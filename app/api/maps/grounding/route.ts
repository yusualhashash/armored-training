import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { latitude, longitude, label, context } = body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          error: "يرجى تعيين مفتاح GEMINI_API_KEY في لوحة الإعدادات لتفعيل تحليل خرائط Google الذكي.",
          mapSources: [],
        },
        { status: 200 }
      );
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const lat = typeof latitude === "number" ? latitude : undefined;
    const lng = typeof longitude === "number" ? longitude : undefined;

    let userPrompt = "حدد تفاصيل الموقع الحالي ومعالمه بدقة باللغة العربية مع توضيح المنطقة والمنشآت المجاورة أو الطرق الرئيسية الصالحة لتدريب القوات والمدرعات.";
    if (label) {
      userPrompt += ` وصف الموقع المطلوب: ${label}.`;
    }
    if (context) {
      userPrompt += ` سياق التدريب: ${context}.`;
    }

    const config: any = {
      tools: [{ googleMaps: {} }],
    };

    if (lat !== undefined && lng !== undefined) {
      config.toolConfig = {
        retrievalConfig: {
          latLng: {
            latitude: lat,
            longitude: lng,
          },
        },
      };
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config,
    });

    const text = response.text || "";

    // Extract grounding URLs and sources
    const candidate = response.candidates?.[0];
    const groundingChunks = candidate?.groundingMetadata?.groundingChunks || [];

    interface MapSource {
      uri: string;
      title: string;
      reviewSnippets?: string[];
    }

    const mapSources: MapSource[] = [];

    for (const chunk of groundingChunks as any[]) {
      if (chunk.maps) {
        const uri = chunk.maps.uri || "";
        const title = chunk.maps.title || "موقع على خرائط Google";
        const reviewSnippets = chunk.maps.placeAnswerSources?.reviewSnippets || [];
        if (uri) {
          mapSources.push({ uri, title, reviewSnippets });
        }
      }
    }

    return NextResponse.json({
      success: true,
      text,
      mapSources,
      coordinates: lat && lng ? { latitude: lat, longitude: lng } : null,
    });
  } catch (error: any) {
    console.error("Error generating Maps Grounding info:", error);
    let msg = error?.message || "فشل جلب بيانات الموقع";
    if (msg.includes("API key not valid") || msg.includes("API_KEY_INVALID")) {
      msg = "مفتاح GEMINI_API_KEY غير مفعل أو غير صالح، يرجى التحقق من إعدادات المفتاح.";
    }
    return NextResponse.json(
      {
        success: false,
        error: msg,
        mapSources: [],
      },
      { status: 200 }
    );
  }
}
