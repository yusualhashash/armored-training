import { formatStopwatchTime } from '@/lib/format-time'

interface StopwatchDisplayProps {
  elapsedMs: number
}

/** شاشة عرض زمن ساعة الإيقاف. */
export function StopwatchDisplay({ elapsedMs }: StopwatchDisplayProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 px-3 py-8">
      <p dir="ltr" className="w-full overflow-hidden whitespace-nowrap text-center font-mono text-[clamp(1.75rem,13vw,4rem)] font-bold leading-none tracking-tight text-white tabular-nums">
        {formatStopwatchTime(elapsedMs)}
      </p>
      <p className="mt-3 text-center text-xs text-white/40">دقائق : ثواني . أجزاء من الثانية</p>
    </div>
  )
}
