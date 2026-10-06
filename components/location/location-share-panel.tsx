'use client'

import { useState } from 'react'
import {
  Compass,
  Copy,
  ExternalLink,
  Loader2,
  MapPin,
  MessageCircle,
  Navigation,
  RefreshCw,
  Send,
  Share2,
  Sparkles,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  type Coordinates,
  type MapSource,
  buildGoogleMapsUrl,
  fetchLocationGrounding,
  formatLocationMessage,
  getCurrentPositionAsync,
  shareViaTelegram,
  shareViaWhatsApp,
} from '@/lib/location-share'

interface LocationSharePanelProps {
  initialTestSummary?: string
  initialTitle?: string
}

export function LocationSharePanel({
  initialTestSummary,
  initialTitle = 'ميدان التدريب الميداني',
}: LocationSharePanelProps) {
  const [coords, setCoords] = useState<Coordinates | null>(null)
  const [siteName, setSiteName] = useState(initialTitle)
  const [extraNotes, setExtraNotes] = useState('')
  const [isLoadingGps, setIsLoadingGps] = useState(false)
  const [gpsError, setGpsError] = useState<string | null>(null)

  const [isLoadingGrounding, setIsLoadingGrounding] = useState(false)
  const [groundedText, setGroundedText] = useState<string>('')
  const [mapSources, setMapSources] = useState<MapSource[]>([])
  const [groundingError, setGroundingError] = useState<string | null>(null)

  const [copied, setCopied] = useState(false)

  // Handle GPS location request
  const handleGetLocation = async () => {
    setIsLoadingGps(true)
    setGpsError(null)
    try {
      const position = await getCurrentPositionAsync()
      setCoords(position)
      // Automatically run Google Maps Grounding to enrich with place details
      await enrichWithMaps(position, siteName)
    } catch (err: any) {
      setGpsError(err.message || 'تعذر تحديد الموقع')
    } finally {
      setIsLoadingGps(false)
    }
  }

  // Handle Maps Grounding with Gemini 3.5 Flash
  const enrichWithMaps = async (currentCoords?: Coordinates | null, currentSiteName?: string) => {
    const targetCoords = currentCoords ?? coords
    setIsLoadingGrounding(true)
    setGroundingError(null)

    try {
      const result = await fetchLocationGrounding({
        latitude: targetCoords?.latitude,
        longitude: targetCoords?.longitude,
        label: currentSiteName || siteName,
        context: 'تدريب عسكري وميداني للمدرعات وتمارين اللياقة البدنية',
      })

      if (result.success && result.text) {
        setGroundedText(result.text)
        setMapSources(result.mapSources || [])
      } else if (result.error) {
        setGroundingError(result.error)
      }
    } catch (err: any) {
      setGroundingError(err.message || 'فشل جلب بيانات الخرائط')
    } finally {
      setIsLoadingGrounding(false)
    }
  }

  const primaryMapUrl = coords
    ? buildGoogleMapsUrl(coords.latitude, coords.longitude)
    : mapSources[0]?.uri || ''

  const finalMessage = formatLocationMessage({
    title: siteName,
    coords,
    groundedText,
    primaryMapUrl,
    extraNotes,
    testSummary: initialTestSummary,
  })

  const handleShareWhatsApp = () => {
    shareViaWhatsApp(finalMessage)
  }

  const handleShareTelegram = () => {
    shareViaTelegram(finalMessage, primaryMapUrl || undefined)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(finalMessage)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
    }
  }

  return (
    <div className="flex flex-col gap-5 text-right">
      {/* Intro Header Card */}
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-5 sm:p-6 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
            <MapPin className="size-6" />
          </div>
          <div className="flex-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-300 border border-emerald-500/20">
              <Share2 className="size-3" />
              مشاركة مباشرة عبر واتساب وتيليجرام
            </span>
            <h2 className="mt-2 text-lg font-bold text-white sm:text-xl">
              مشاركة موقع التدريب الميداني
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-white/60 leading-relaxed">
              حدّد موقعك الجغرافي الدقيق بالـ GPS واستخرج تفاصيل المعالم المجاورة عبر خرائط Google الذكية لمشاركتها فوراً مع الضباط أو أفراد الفصيلة.
            </p>
          </div>
        </div>

        {/* GPS Button and Coordinates */}
        <div className="mt-5 flex flex-col gap-3">
          <Button
            type="button"
            onClick={handleGetLocation}
            disabled={isLoadingGps}
            className="h-13 w-full rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-base shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2"
          >
            {isLoadingGps ? (
              <>
                <Loader2 className="size-5 animate-spin" />
                <span>جاري قراءة إحداثيات GPS بدقة...</span>
              </>
            ) : (
              <>
                <Navigation className="size-5" />
                <span>{coords ? 'تحديث موقعي الحالي (GPS)' : 'تحديد موقعي الحالي الآن (GPS)'}</span>
              </>
            )}
          </Button>

          {gpsError && (
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-300">
              ⚠️ {gpsError}
            </div>
          )}

          {coords && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span className="flex items-center gap-1 text-emerald-300 font-semibold">
                  <span className="size-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  تم رصد إشارة GPS بنجاح
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center pt-1 font-mono text-sm">
                <div className="rounded-xl bg-black/30 p-2 border border-white/5">
                  <span className="block text-[11px] text-white/40 font-sans">خط العرض (Latitude)</span>
                  <span className="text-white font-semibold">{coords.latitude.toFixed(6)}</span>
                </div>
                <div className="rounded-xl bg-black/30 p-2 border border-white/5">
                  <span className="block text-[11px] text-white/40 font-sans">خط الطول (Longitude)</span>
                  <span className="text-white font-semibold">{coords.longitude.toFixed(6)}</span>
                </div>
              </div>

              {primaryMapUrl && (
                <a
                  href={primaryMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 underline pt-1"
                >
                  <ExternalLink className="size-3.5" />
                  معاينة الموقع على خرائط Google
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Field / Base Metadata Input */}
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-5 sm:p-6 shadow-xl flex flex-col gap-4">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <Compass className="size-4 text-emerald-300" />
          بيانات الميدان والملاحظات
        </h3>

        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5">
            اسم المعسكر / الميدان أو النقطة
          </label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="مثال: ميدان تدريب الدبابات الرئيسي - الكتيبة الأولى"
            className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-white/60 mb-1.5">
            ملاحظات التدريب الميداني (اختياري)
          </label>
          <input
            type="text"
            value={extraNotes}
            onChange={(e) => setExtraNotes(e.target.value)}
            placeholder="مثال: جاهزية الطواقم 100%، نقطة تجمع الفصائل"
            className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Google Maps Grounding Section (Gemini 3.5 Flash) */}
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-5 sm:p-6 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between">

          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => enrichWithMaps()}
            disabled={isLoadingGrounding}
            className="h-8 rounded-xl border border-white/10 bg-white/[0.05] px-2.5 text-xs text-white/80 hover:bg-white/[0.1]"
          >
            {isLoadingGrounding ? (
              <Loader2 className="size-3.5 animate-spin" />
            ) : (
              <RefreshCw className="size-3.5" />
            )}
            <span className="mr-1">تحديث البيانات</span>
          </Button>
        </div>

        {groundingError && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-200">
            {groundingError}
          </div>
        )}

        {groundedText ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-xs leading-6 text-white/85 whitespace-pre-line">
            {groundedText}
          </div>
        ) : (
          !isLoadingGrounding && (
            <div className="rounded-2xl border border-dashed border-white/10 p-4 text-center text-xs text-white/40">
              اضغط على «تحديث البيانات» أو فعّل الـ GPS للبحث عن المعالم والمواقع المحيطة عبر خرائط Google.
            </div>
          )
        )}

        {/* Display extracted Google Maps links from groundingChunks */}
        {mapSources.length > 0 && (
          <div className="flex flex-col gap-2 pt-1">
            <span className="text-xs font-semibold text-white/60">
              روابط ومعالم خرائط Google المستخرجة:
            </span>
            <div className="flex flex-col gap-2">
              {mapSources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-3.5 py-2.5 text-xs text-emerald-300 hover:bg-white/[0.09] transition-colors"
                >
                  <span className="flex items-center gap-2 font-medium truncate">
                    <MapPin className="size-4 shrink-0 text-emerald-400" />
                    <span className="truncate">{source.title || 'عرض على خرائط Google'}</span>
                  </span>
                  <ExternalLink className="size-3.5 shrink-0 opacity-70" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Share Actions - WhatsApp & Telegram */}
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-5 sm:p-6 shadow-xl flex flex-col gap-3">
        <h3 className="text-sm font-bold text-white mb-1">
          إرسال الموقع الفوري
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* WhatsApp Share Button */}
          <button
            type="button"
            onClick={handleShareWhatsApp}
            className="flex h-15 items-center justify-between rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 p-4 text-right text-white hover:bg-[#25D366]/30 active:scale-[0.99] transition-all shadow-lg shadow-black/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#25D366] text-black font-bold">
                <MessageCircle className="size-6 text-black" />
              </span>
              <div>
                <span className="block text-sm font-bold text-white">مشاركة عبر واتساب</span>
                <span className="block text-[11px] text-[#25D366]">إرسال الرسالة والرابط للمجموعة</span>
              </div>
            </div>
          </button>

          {/* Telegram Share Button */}
          <button
            type="button"
            onClick={handleShareTelegram}
            className="flex h-15 items-center justify-between rounded-2xl bg-[#229ED9]/20 border border-[#229ED9]/40 p-4 text-right text-white hover:bg-[#229ED9]/30 active:scale-[0.99] transition-all shadow-lg shadow-black/20"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#229ED9] text-white font-bold">
                <Send className="size-5 text-white" />
              </span>
              <div>
                <span className="block text-sm font-bold text-white">مشاركة عبر تيليجرام</span>
                <span className="block text-[11px] text-[#229ED9]">إرسال الموقع إلى القناة أو المحادثة</span>
              </div>
            </div>
          </button>
        </div>

        {/* Secondary actions: Copy text & Open Google Maps */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Button
            type="button"
            variant="ghost"
            onClick={handleCopy}
            className="h-11 rounded-xl border border-white/10 bg-white/[0.05] text-xs text-white/80 hover:bg-white/[0.1] hover:text-white"
          >
            {copied ? (
              <>
                <Check className="size-4 text-emerald-400" />
                <span className="mr-1 text-emerald-300">تم النسخ بنجاح!</span>
              </>
            ) : (
              <>
                <Copy className="size-4" />
                <span className="mr-1">نسخ الرسالة كاملة</span>
              </>
            )}
          </Button>

          {primaryMapUrl ? (
            <a
              href={primaryMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-xs text-white/80 hover:bg-white/[0.1] hover:text-white"
            >
              <ExternalLink className="size-4" />
              <span className="mr-1">فتح في خرائط Google</span>
            </a>
          ) : (
            <Button
              type="button"
              disabled
              variant="ghost"
              className="h-11 rounded-xl border border-white/5 bg-white/[0.02] text-xs text-white/30"
            >
              <MapPin className="size-4" />
              <span className="mr-1">الخريطة (غير محدد)</span>
            </Button>
          )}
        </div>

        {/* Message preview accordion */}
        <div className="mt-2 rounded-2xl border border-white/10 bg-black/40 p-3.5">
          <span className="block text-[11px] font-semibold text-white/40 mb-1">
            معاينة نص الرسالة التي ستُرسل:
          </span>
          <pre className="text-[11px] text-white/70 whitespace-pre-wrap font-sans leading-relaxed">
            {finalMessage}
          </pre>
        </div>
      </div>
    </div>
  )
}
