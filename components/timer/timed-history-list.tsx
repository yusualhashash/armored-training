'use client'

import { Download, Share2, Trash2 } from 'lucide-react'

import { TestEntryMeta } from '@/components/timer/test-entry-meta'
import { Button } from '@/components/ui/button'
import { getPerformanceLevelColor, resolvePerformanceLevel } from '@/lib/performance'
import { formatDisplayTime, type TimedHistoryEntry } from '@/lib/test-history'
import type { SportEvent } from '@/lib/types'

interface TimedHistoryListProps {
  event: SportEvent
  entries: TimedHistoryEntry[]
  isMobile: boolean
  onExport: (entry: TimedHistoryEntry) => void
  onDelete: (id: string) => void
}

/** عناصر سجل الجلسات المحفوظة: زمن كل متدرب مع تصدير الجلسة أو حذفها. */
export function TimedHistoryList({ event, entries, isMobile, onExport, onDelete }: TimedHistoryListProps) {
  const ExportIcon = isMobile ? Share2 : Download

  return (
    <>
      {entries.map((entry) => {
        const fastest = Math.min(...entry.results.map((result) => result.seconds))
        const fastestScore = entry.results.find((result) => result.seconds === fastest)?.score ?? 0

        return (
          <li key={entry.id} className="rounded-xl bg-white/[0.05] px-3 py-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-sm font-semibold text-white"><TestEntryMeta savedAt={entry.savedAt} durationMs={entry.durationMs} /></p>
                <p className="mt-1 text-xs text-white/50">{entry.results.length} متدرب · أسرع زمن <bdi dir="ltr" className="tabular-nums">{formatDisplayTime(fastest)}</bdi> · {fastestScore} نتيجة</p>
              </div>
              <div className="flex gap-1">
                <Button type="button" variant="outline" size="icon" aria-label={isMobile ? 'حفظ أو مشاركة هذه الجلسة' : 'تصدير هذه الجلسة'} onClick={() => onExport(entry)} className="size-9 rounded-lg border-white/15 bg-transparent text-white hover:bg-white/10"><ExportIcon className="size-4" aria-hidden="true" /></Button>
                <Button type="button" variant="outline" size="icon" aria-label="حذف هذه الجلسة" onClick={() => onDelete(entry.id)} className="size-9 rounded-lg border-white/15 bg-transparent text-rose-200 hover:bg-rose-300/10"><Trash2 className="size-4" aria-hidden="true" /></Button>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {entry.results.map((result, index) => (
                <span key={index} className={`rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] tabular-nums ${getPerformanceLevelColor(resolvePerformanceLevel(event, result.seconds))}`}>{index + 1}: <bdi dir="ltr">{formatDisplayTime(result.seconds)}</bdi></span>
              ))}
            </div>
          </li>
        )
      })}
    </>
  )
}
