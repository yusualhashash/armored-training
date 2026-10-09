import { formatStandardSeconds } from '@/lib/format-time'
import { getPerformanceLevelColor, getPerformanceLevelLabel } from '@/lib/performance'
import { buildStandardRanges } from '@/lib/standard-ranges'
import type { SportEvent } from '@/lib/types'

interface StandardsTableProps {
  event: SportEvent
}

/** جدول معايير الأداء مع النطاق الزمني لكل مستوى بتصميم تكتيكي واضح. */
export function StandardsTable({ event }: StandardsTableProps) {
  const ranges = buildStandardRanges(event.standards)
  const isMinuteEvent = ranges.some((range) => range.upperSeconds >= 60 || range.lowerSeconds >= 60)

  return (
    <section className="rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <h2 className="text-sm sm:text-base font-bold text-white tracking-tight">
          معايير الأداء المعتمدة
        </h2>
        <span className="text-[11px] font-medium text-emerald-400/80">
          رتب التقييم الزمني
        </span>
      </div>

      <div className="flex flex-col gap-2">
        {ranges.map((range) => (
          <div
            key={`${range.level}-${range.lowerSeconds}`}
            className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-[#08120b] px-3.5 py-2.5 transition hover:border-emerald-500/25"
          >
            <span className={`text-xs sm:text-sm font-bold ${getPerformanceLevelColor(range.level)}`}>
              {getPerformanceLevelLabel(range.level)}
            </span>

            {Number.isFinite(range.upperSeconds) ? (
              <span dir="ltr" className="font-mono text-xs sm:text-sm font-semibold text-white/80 tabular-nums">
                {formatStandardSeconds(range.lowerSeconds, isMinuteEvent)} - {formatStandardSeconds(range.upperSeconds, isMinuteEvent)}
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-white/80">
                <span dir="ltr" className="font-mono font-semibold tabular-nums">
                  {formatStandardSeconds(range.lowerSeconds, isMinuteEvent)}
                </span>
                <span className="text-xs text-white/50">فأكثر</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
