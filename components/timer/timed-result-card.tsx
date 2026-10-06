'use client'

import { Download, Share2 } from 'lucide-react'

import { StandardsTable } from '@/components/timer/standards-table'
import { TestEntryMeta } from '@/components/timer/test-entry-meta'
import { Button } from '@/components/ui/button'
import { getPerformanceLevelColor, getPerformanceLevelLabel, getPerformanceScore, resolvePerformanceLevel } from '@/lib/performance'
import { formatDisplayTime, type TimedHistoryEntry } from '@/lib/test-history'
import type { SportEvent } from '@/lib/types'

interface TimedResultCardProps {
  event: SportEvent
  entry: TimedHistoryEntry
  isMobile: boolean
  onExport: () => void
}

/** نتائج جلسة عرضها للتو: زمن وعلامة وتقدير كل متدرب، مع معايير الأداء. */
export function TimedResultCard({ event, entry, isMobile, onExport }: TimedResultCardProps) {
  const ExportIcon = isMobile ? Share2 : Download

  return (
    <div className="mt-5 border-t border-white/10 pt-5">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <Button type="button" variant="outline" onClick={onExport} className="h-10 w-full sm:w-auto rounded-xl border-emerald-300/30 bg-transparent text-emerald-200 hover:bg-emerald-300/10 text-xs sm:text-sm whitespace-normal"><ExportIcon className="ml-2 size-4 shrink-0" aria-hidden="true" /><span>{isMobile ? 'حفظ أو مشاركة ملف Excel' : 'تصدير النتائج إلى Excel'}</span></Button>
        <p className="text-xs text-white/50"><TestEntryMeta savedAt={entry.savedAt} durationMs={entry.durationMs} /></p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {entry.results.map((result, index) => {
          const level = resolvePerformanceLevel(event, result.seconds)
          const score = getPerformanceScore(event, result.seconds)

          return (
            <div key={index} className="rounded-xl bg-white/[0.05] px-2 py-3 text-center">
              <p className="text-[11px] text-white/45">المتدرب {index + 1}</p>
              <p dir="ltr" className="mt-2 text-sm font-semibold text-white tabular-nums">{formatDisplayTime(result.seconds)}</p>
              <p className="mt-1 border-t border-white/10 pt-1 text-lg font-bold text-rose-100">{score ?? '—'} <span className="text-[11px] font-normal text-white/45">نتيجة</span></p>
              <p className={`mt-1 text-sm font-bold ${getPerformanceLevelColor(level)}`}>{getPerformanceLevelLabel(level)}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-5">
        <StandardsTable event={event} />
      </div>
    </div>
  )
}
