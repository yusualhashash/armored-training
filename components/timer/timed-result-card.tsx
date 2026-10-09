'use client'

import { Download, FileSpreadsheet, Share2 } from 'lucide-react'

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

/** نتائج جلسة عرضها للتو: زمن وعلامة وتقدير كل متدرب، مع معايير الأداء بتصميم تكتيكي رفيع. */
export function TimedResultCard({ event, entry, isMobile, onExport }: TimedResultCardProps) {
  const ExportIcon = isMobile ? Share2 : Download

  return (
    <div className="mt-6 border-t border-emerald-500/15 pt-6 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExport}
          className="flex h-11 items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 text-xs sm:text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-500/20 active:scale-95 shadow-sm"
        >
          <ExportIcon className="size-4" aria-hidden="true" />
          <span>{isMobile ? 'حفظ أو مشاركة ملف Excel' : 'تصدير النتائج إلى Excel'}</span>
        </button>

        <p className="text-xs text-white/50">
          <TestEntryMeta savedAt={entry.savedAt} durationMs={entry.durationMs} />
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 md:grid-cols-5">
        {entry.results.map((result, index) => {
          const level = resolvePerformanceLevel(event, result.seconds)
          const score = getPerformanceScore(event, result.seconds)

          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-[#09130e] p-3 text-center shadow-sm transition hover:border-emerald-500/30"
            >
              <p className="text-[11px] font-medium text-white/50">المتدرب {index + 1}</p>
              <p dir="ltr" className="mt-1 font-mono text-sm font-bold text-emerald-300 tabular-nums">
                {formatDisplayTime(result.seconds)}
              </p>
              <div className="mt-2 w-full border-t border-white/10 pt-2">
                <span className="text-xl font-black text-white">{score ?? '—'}</span>
                <span className="mr-1 text-[10px] text-white/40">علامة</span>
              </div>
              <p className={`mt-1 text-xs font-bold ${getPerformanceLevelColor(level)}`}>
                {getPerformanceLevelLabel(level)}
              </p>
            </div>
          )
        })}
      </div>

      <div className="mt-6">
        <StandardsTable event={event} />
      </div>
    </div>
  )
}
