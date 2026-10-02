'use client'

import { useEffect, useState } from 'react'
import { MapPin, ShieldCheck, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function LocationConsent() {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || Boolean((navigator as Navigator & { standalone?: boolean }).standalone)
    if (isStandalone && sessionStorage.getItem('location-consent-seen') !== 'true') setOpen(true)
  }, [])

  const close = () => {
    sessionStorage.setItem('location-consent-seen', 'true')
    setOpen(false)
  }

  const shareLocation = () => {
    if (!navigator.geolocation) {
      setStatus('error')
      return
    }

    setStatus('loading')
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      try {
        const response = await fetch('/api/location', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ latitude: coords.latitude, longitude: coords.longitude }),
        })
        if (!response.ok) throw new Error('Location request failed')
        close()
      } catch {
        setStatus('error')
      }
    }, () => setStatus('error'), { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 })
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center" role="dialog" aria-modal="true" aria-labelledby="location-title" dir="rtl">
      <div className="w-full max-w-md rounded-3xl border border-amber-200/20 bg-[#101216] p-6 text-white shadow-2xl">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-amber-300/10 text-amber-200"><MapPin className="size-5" aria-hidden="true" /></div>
            <div><h2 id="location-title" className="font-bold">مشاركة موقع الجهاز</h2><p className="mt-1 text-xs text-white/55">يظهر هذا الطلب عند تشغيل التطبيق المثبت</p></div>
          </div>
          <Button variant="ghost" size="icon" onClick={close} aria-label="إغلاق" className="text-white/60 hover:bg-white/10 hover:text-white"><X className="size-5" /></Button>
        </div>
        <p className="text-sm leading-7 text-white/75">يمكنك مشاركة موقع جهازك مع إدارة التطبيق عبر Telegram. لن تتم مشاركة موقعك إلا بعد موافقتك والسماح بالوصول إلى الموقع.</p>
        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-200/80"><ShieldCheck className="size-4" aria-hidden="true" />يمكنك الرفض وإغلاق هذا الطلب</div>
        {status === 'error' && <p className="mt-4 text-sm text-red-300">تعذر إرسال الموقع. تحقق من إذن الموقع وحاول مرة أخرى.</p>}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <Button type="button" variant="outline" onClick={close} className="h-11 border-white/10 bg-transparent text-white hover:bg-white/10">ليس الآن</Button>
          <Button type="button" onClick={shareLocation} disabled={status === 'loading'} className="h-11 bg-amber-500 text-black hover:bg-amber-400">{status === 'loading' ? 'جارٍ الإرسال...' : 'مشاركة الموقع'}</Button>
        </div>
      </div>
    </div>
  )
}
