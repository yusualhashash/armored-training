'use client'

import { useEffect, useState } from 'react'
import { WifiOff, HardDrive } from 'lucide-react'

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  )

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

export function OfflineIndicator() {
  const isOnline = useOnlineStatus()

  if (isOnline) return null

  return (
    <div
      dir="rtl"
      className="fixed bottom-24 right-4 left-4 z-40 mx-auto flex max-w-sm items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-[#0d1f14]/95 px-4 py-2.5 text-xs text-emerald-200 shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2">
        <WifiOff className="size-4 shrink-0 text-amber-400 animate-pulse" />
        <span>وضع عدم الاتصال: التطبيق يعمل ومحفوظ محلياً</span>
      </div>
      <div className="flex items-center gap-1 text-[11px] text-emerald-400/80">
        <HardDrive className="size-3.5" />
        <span>ذاكرة الجهاز</span>
      </div>
    </div>
  )
}
