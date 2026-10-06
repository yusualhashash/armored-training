import type { Arrival } from '@/components/timer/use-stopwatch'
import { formatStopwatchTime } from '@/lib/format-time'
import {
  getPerformanceLevelColor,
  getPerformanceLevelLabel,
  getPerformanceScore,
  resolvePerformanceLevel,
} from '@/lib/performance'
import type { SportEvent } from '@/lib/types'

interface ArrivalsListProps {
  event: SportEvent
  arrivals: Arrival[]
}

/** قائمة أوقات الوصول المسجلة مع مستوى وعلامة كل وصول. */
export function ArrivalsList({ event, arrivals }: ArrivalsListProps) {
  return (
    <section className="rounded-2xl sm:rounded-3xl border border-white/10 bg-[#101216] p-3.5 sm:p-5">
      <h2 className="mb-3 sm:mb-4 text-sm sm:text-base font-bold text-white">أوقات الوصول ({arrivals.length})</h2>
      <div className="flex flex-col gap-1.5 sm:gap-2">
        {arrivals.map((arrival) => {
          const seconds = arrival.timeMs / 1000
          const level = resolvePerformanceLevel(event, seconds)
          const score = getPerformanceScore(event, seconds)

          return (
            <div key={arrival.place} className="flex items-center justify-between gap-1.5 rounded-xl bg-[#17191f] px-2 py-2 text-xs sm:gap-3 sm:px-3 sm:py-2.5 sm:text-sm">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-rose-200/15 text-xs font-bold text-rose-100 sm:size-8 sm:text-sm">{arrival.place}</span>
              <span dir="ltr" className="font-mono text-xs font-bold text-white tabular-nums sm:text-base">{formatStopwatchTime(arrival.timeMs)}</span>
              <span className={`min-w-0 truncate text-center text-[11px] sm:text-xs font-semibold ${getPerformanceLevelColor(level)}`}>{getPerformanceLevelLabel(level)}</span>
              <span className="w-7 shrink-0 text-center text-xs font-bold text-rose-200 sm:w-8 sm:text-sm">{score === null ? '—' : score}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
