import { formatStopwatchTime } from '@/lib/format-time'

interface StopwatchDisplayProps {
  elapsedMs: number
}

/** شاشة عرض زمن ساعة الإيقاف بتصميم كرونوغراف عسكري تكتيكي عالي الدقة. */
export function StopwatchDisplay({ elapsedMs }: StopwatchDisplayProps) {
  const isRunning = elapsedMs > 0

  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-500/25 bg-[#040805] px-4 py-7 shadow-[inset_0_4px_20px_rgba(0,0,0,0.85),0_0_25px_rgba(16,185,129,0.08)]">
      {/* Background LCD glow effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center">
        <p
          dir="ltr"
          className="w-full overflow-hidden whitespace-nowrap text-center font-mono text-[clamp(2.2rem,13vw,4.4rem)] font-black leading-none tracking-widest text-emerald-300 tabular-nums drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]"
        >
          {formatStopwatchTime(elapsedMs)}
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider text-emerald-400/60 border-t border-emerald-500/15 pt-3 w-full max-w-xs">
          <span className="flex size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>دقائق : ثواني . أجزاء المئة</span>
        </div>
      </div>
    </div>
  )
}
