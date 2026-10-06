export interface Coordinates {
  latitude: number
  longitude: number
  accuracy?: number
}

export interface MapSource {
  uri: string
  title: string
  reviewSnippets?: string[]
}

export interface GroundingResult {
  success: boolean
  text?: string
  mapSources?: MapSource[]
  error?: string
}

export function getCurrentPositionAsync(timeoutMs = 12000): Promise<Coordinates> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      reject(new Error('خدمة تحديد الموقع الجغرافي (GPS) غير مدعومة في هذا المتصفح'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        })
      },
      (err) => {
        let message = 'تعذر الحصول على الموقع الجغرافي.'
        if (err.code === 1) {
          message = 'تم رفض الإذن للوصول إلى الموقع. يرجى تفعيل إذن الموقع في إعدادات المتصفح أو الجهاز.'
        } else if (err.code === 2) {
          message = 'إشارة الـ GPS غير متوفرة حالياً، يرجى المحاولة في مكان مفتوح.'
        } else if (err.code === 3) {
          message = 'انتهت مهلة تحديد الموقع. يرجى المحاولة مرة أخرى.'
        }
        reject(new Error(message))
      },
      {
        enableHighAccuracy: true,
        timeout: timeoutMs,
        maximumAge: 30000,
      }
    )
  })
}

export function buildGoogleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps?q=${lat},${lng}`
}

export async function fetchLocationGrounding(params: {
  latitude?: number
  longitude?: number
  label?: string
  context?: string
}): Promise<GroundingResult> {
  try {
    const res = await fetch('/api/maps/grounding', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      return {
        success: false,
        error: data.error || 'حدث خطأ أثناء جلب بيانات خرائط Google',
        mapSources: [],
      }
    }

    const data = await res.json()
    return {
      success: true,
      text: data.text || '',
      mapSources: data.mapSources || [],
    }
  } catch (error: any) {
    return {
      success: false,
      error: error?.message || 'تعذر الاتصال بخدمة التحقق من الخرائط',
      mapSources: [],
    }
  }
}

export function formatLocationMessage(params: {
  title?: string
  coords?: Coordinates | null
  groundedText?: string
  primaryMapUrl?: string
  extraNotes?: string
  testSummary?: string
}): string {
  const parts: string[] = []

  parts.push(`📍 *موقع التدريب الميداني - المعدلات الزمنية*`)
  if (params.title) {
    parts.push(`🏷️ المعسكر / الميدان: ${params.title}`)
  }

  if (params.extraNotes) {
    parts.push(`\n📝 ملاحظات التدريب: ${params.extraNotes}`)
  }

  if (params.groundedText) {
    parts.push(`\n📌 تفاصيل الموقع والمعالم (بيانات خرائط Google):\n${params.groundedText.trim()}`)
  }

  if (params.testSummary) {
    parts.push(`\n📊 ملخص نتيجة الاختبار:\n${params.testSummary}`)
  }

  parts.push(`\n⏱️ تم الإرسال عبر تطبيق المعدلات الزمنية`)

  return parts.join('\n')
}

export function shareViaWhatsApp(text: string) {
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function shareViaTelegram(text: string, directUrl?: string) {
  const url = directUrl
    ? `https://t.me/share/url?url=${encodeURIComponent(directUrl)}&text=${encodeURIComponent(text)}`
    : `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
