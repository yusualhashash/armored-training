import { formatStandardSeconds } from '@/lib/format-time'
import { getPerformanceLevelColor, getPerformanceLevelLabel } from '@/lib/performance'
import { buildStandardRanges } from '@/lib/standard-ranges'
import type { SportEvent } from '@/lib/types'

interface StandardsTableProps {
  event: SportEvent
}

/** جدول معايير الأداء مع النطاق الزمني لكل مستوى. */
export function StandardsTable({ event }: StandardsTableProps) {
  const ranges = buildStandardRanges(event.standards)
  const isMinuteEvent = ranges.some((range) => range.upperSeconds >= 60 || range.lowerSeconds >= 60)

  return (
    <section className="rounded-3xl border border-white/10 bg-[#101216] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-white">معايير الأداء</h2>
        <span className="text-xs text-white/50">
          {isMinuteEvent ? '(دقائق : ثواني)' : '(بالثواني)'}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {ranges.map((range) => (
          <div key={`${range.level}-${range.lowerSeconds}`} className="flex items-center justify-between gap-3 rounded-xl bg-[#17191f] px-3 py-2">
            <span className={`text-sm font-semibold ${getPerformanceLevelColor(range.level)}`}>{getPerformanceLevelLabel(range.level)}</span>
            {Number.isFinite(range.upperSeconds) ? (
              <span dir="ltr" className="font-mono text-xs text-white/70">
                {formatStandardSeconds(range.lowerSeconds, isMinuteEvent)} - {formatStandardSeconds(range.upperSeconds, isMinuteEvent)}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs text-white/70">
                <span dir="ltr" className="font-mono">{formatStandardSeconds(range.lowerSeconds, isMinuteEvent)}</span>
                <span>فأكثر</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
