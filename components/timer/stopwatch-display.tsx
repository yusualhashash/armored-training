import { formatStopwatchTime } from '@/lib/format-time'

interface StopwatchDisplayProps {
  elapsedMs: number
}

/** شاشة عرض زمن ساعة الإيقاف. */
export function StopwatchDisplay({ elapsedMs }: StopwatchDisplayProps) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-black/25 px-2 py-6 sm:px-3 sm:py-8">
      <p dir="ltr" className="w-full overflow-hidden whitespace-nowrap text-center font-mono text-[clamp(1.75rem,11.5vw,3.75rem)] font-bold leading-none tracking-tight text-white tabular-nums">
        {formatStopwatchTime(elapsedMs)}
      </p>
      <p className="mt-2.5 sm:mt-3 text-center text-[11px] sm:text-xs text-white/40">
        دقائق : ثواني . أجزاء من الثانية
      </p>
    </div>
  )
}
