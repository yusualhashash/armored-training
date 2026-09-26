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
    <section className="rounded-3xl border border-white/10 bg-[#101216] p-5">
      <h2 className="mb-4 text-base font-bold text-white">أوقات الوصول ({arrivals.length})</h2>
      <div className="flex flex-col gap-2">
        {arrivals.map((arrival) => {
          const seconds = arrival.timeMs / 1000
          const level = resolvePerformanceLevel(event, seconds)
          const score = getPerformanceScore(event, seconds)

          return (
            <div key={arrival.place} className="flex items-center justify-between gap-2 rounded-xl bg-[#17191f] px-2.5 py-2.5 text-sm sm:gap-3 sm:px-3">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-rose-200/15 text-xs font-bold text-rose-100 sm:size-8 sm:text-sm">{arrival.place}</span>
              <span dir="ltr" className="font-mono text-sm font-bold text-white tabular-nums sm:text-base">{formatStopwatchTime(arrival.timeMs)}</span>
              <span className={`text-center text-xs font-semibold ${getPerformanceLevelColor(level)}`}>{getPerformanceLevelLabel(level)}</span>
              <span className="w-8 shrink-0 text-center text-sm font-bold text-rose-200">{score === null ? '—' : score}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
