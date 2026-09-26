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

  return (
    <section className="rounded-3xl border border-white/10 bg-[#101216] p-5">
      <h2 className="mb-4 text-base font-bold text-white">معايير الأداء</h2>
      <div className="flex flex-col gap-2">
        {ranges.map((range) => (
          <div key={`${range.level}-${range.lowerSeconds}`} className="flex items-center justify-between gap-3 rounded-xl bg-[#17191f] px-3 py-2">
            <span className={`text-sm font-semibold ${getPerformanceLevelColor(range.level)}`}>{getPerformanceLevelLabel(range.level)}</span>
            {Number.isFinite(range.upperSeconds) ? (
              <span dir="ltr" className="font-mono text-xs text-white/50">
                {formatStandardSeconds(range.lowerSeconds)} - {formatStandardSeconds(range.upperSeconds)}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs text-white/50">
                <span dir="ltr" className="font-mono">{formatStandardSeconds(range.lowerSeconds)}</span>
                <span>فأكثر</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
