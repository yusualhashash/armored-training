'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download, History, Share2, Trash2 } from 'lucide-react'
import { StopwatchDisplay } from '@/components/timer/stopwatch-display'
import { TimerControls } from '@/components/timer/timer-controls'
import { useStopwatch } from '@/components/timer/use-stopwatch'
import { buildXlsx, isMobileDevice, saveOrShare, type Cell } from '@/lib/xlsx-writer'
import type { PerformanceLevel, PerformanceStandard } from '@/lib/types'

type StandardLevel = PerformanceLevel
type TraineeResult = { count: number; score: number }
type HistoryEntry = {
  id: string
  savedAt: string // ISO date-time
  eventName: string
  categoryName: string
  durationMs: number | null // stopwatch time when the timer is used
  results: TraineeResult[]
}

const HISTORY_KEY = 'repetition-test-history-v1'
const MAX_PER_TEST = 500 // latest sessions kept per test + age group

const standardLabels: Record<StandardLevel, string> = {
  excellent: 'ممتاز',
  veryGood: 'جيد جدا',
  good: 'جيد',
  acceptable: 'مقبول',
  poor: 'غير مقبول',
}

const standardColors: Record<StandardLevel, string> = {
  excellent: 'text-emerald-300',
  veryGood: 'text-cyan-300',
  good: 'text-sky-300',
  acceptable: 'text-amber-300',
  poor: 'text-rose-300',
}

const getStandardForCount = (count: number, standards: PerformanceStandard[]) =>
  standards.find((standard, index) => count >= standard.time || index === standards.length - 1) ?? standards.at(-1)

const getStandardRanges = (standards: PerformanceStandard[]) => standards.map((standard, index) => {
  const nextThreshold = standards[index - 1]?.time
  if (index === 0) return `${standard.time} فأكثر`
  if (!Number.isFinite(standard.time)) return `0 – ${nextThreshold - 1}`
  return `${standard.time} – ${nextThreshold - 1}`
})

// ---- date / time helpers (Latin digits so Excel and the UI stay consistent) ----
const formatDate = (iso: string) => new Date(iso).toLocaleDateString('ar-u-nu-latn', { year: 'numeric', month: '2-digit', day: '2-digit' })
const formatClock = (iso: string) => new Date(iso).toLocaleTimeString('ar-u-nu-latn', { hour: '2-digit', minute: '2-digit', hour12: false })
const formatDuration = (ms: number | null) => {
  if (ms === null) return '—'
  const totalCentis = Math.floor(ms / 10)
  const minutes = Math.floor(totalCentis / 6000)
  const seconds = Math.floor((totalCentis % 6000) / 100)
  const centis = totalCentis % 100
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centis).padStart(2, '0')}`
}
const fileStamp = (iso: string) => iso.slice(0, 16).replace('T', '_').replace(':', '-')

const loadHistory = (): HistoryEntry[] => {
  try {
    const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) ?? '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function RepetitionTestPanel({ eventName, category, standards, scoreResolver, showTimer = true }: { eventName: string; category: { name: string; birthYears: string }; standards: PerformanceStandard[]; scoreResolver: (count: number) => number; showTimer?: boolean }) {
  const stopwatch = useStopwatch()
  const [counts, setCounts] = useState([''])
  const [current, setCurrent] = useState<HistoryEntry | null>(null)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [historyLoaded, setHistoryLoaded] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const standardRanges = getStandardRanges(standards)
  const ExportIcon = isMobile ? Share2 : Download

  // Load history once on the client, then persist every change.
  useEffect(() => {
    setHistory(loadHistory())
    setIsMobile(isMobileDevice())
    setHistoryLoaded(true)
  }, [])
  useEffect(() => {
    if (!historyLoaded) return
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
    } catch {
      // storage full or blocked: history just won't persist
    }
  }, [history, historyLoaded])

  // Only show history of this test + age group.
  const relevantHistory = useMemo(
    () => history.filter((entry) => entry.eventName === eventName && entry.categoryName === category.name),
    [history, eventName, category.name],
  )

  const levelOf = (count: number): StandardLevel => getStandardForCount(count, standards)?.level ?? 'poor'

  const updateCount = (index: number, value: string) => {
    setCounts((existing) => existing.map((count, countIndex) => (countIndex === index ? value.replace(/[^0-9]/g, '') : count)))
    setCurrent(null)
  }

  const showResult = () => {
    const enteredCounts = counts.filter((count) => count !== '').map(Number)
    if (enteredCounts.length === 0) return
    const entry: HistoryEntry = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      savedAt: new Date().toISOString(),
      eventName,
      categoryName: category.name,
      durationMs: showTimer ? stopwatch.elapsedMs : null,
      results: enteredCounts.map((count) => ({ count, score: scoreResolver(count) })),
    }
    setCurrent(entry)
    setHistory((existing) => {
      let kept = 0
      return [entry, ...existing].filter((item) => {
        if (item.eventName !== entry.eventName || item.categoryName !== entry.categoryName) return true
        kept += 1
        return kept <= MAX_PER_TEST
      })
    })
  }

  const deleteEntry = (id: string) => {
    setHistory((existing) => existing.filter((entry) => entry.id !== id))
    if (current?.id === id) setCurrent(null)
  }

  const clearHistory = () => {
    if (!window.confirm('هل تريد حذف كل السجل لهذا الاختبار؟')) return
    setHistory((existing) => existing.filter((entry) => !(entry.eventName === eventName && entry.categoryName === category.name)))
  }

  const sessionRows = (entry: HistoryEntry): Cell[][] =>
    entry.results.map((result, index) => [index + 1, result.count, result.score, standardLabels[levelOf(result.count)]])

  const historyRows = (entries: HistoryEntry[]): Cell[][] =>
    entries.flatMap((entry) =>
      entry.results.map((result, index) => [
        formatDate(entry.savedAt),
        formatClock(entry.savedAt),
        entry.eventName,
        entry.categoryName,
        formatDuration(entry.durationMs),
        index + 1,
        result.count,
        result.score,
        standardLabels[levelOf(result.count)],
      ]),
    )

  const historyHeader: Cell[] = ['التاريخ', 'الوقت', 'الاختبار', 'الفئة العمرية', 'مدة الاختبار', 'رقم المتدرب', 'عدد التكرارات', 'النتيجة', 'التقدير'].map((v) => ({ v, s: 'header' as const }))

  const exportEntry = (entry: HistoryEntry) => {
    const average = entry.results.reduce((sum, result) => sum + result.count, 0) / entry.results.length
    const blob = buildXlsx([
      {
        name: 'النتائج',
        widths: [20, 16, 14, 14, 16],
        rows: [
          [{ v: `اختبار ${entry.eventName}`, s: 'title' }],
          [],
          [{ v: 'الفئة العمرية', s: 'label' }, entry.categoryName],
          [{ v: 'مواليد', s: 'label' }, category.birthYears],
          [{ v: 'التاريخ', s: 'label' }, formatDate(entry.savedAt)],
          [{ v: 'الوقت', s: 'label' }, formatClock(entry.savedAt)],
          [{ v: 'مدة الاختبار', s: 'label' }, formatDuration(entry.durationMs)],
          [{ v: 'عدد المتدربين', s: 'label' }, entry.results.length],
          [{ v: 'متوسط التكرارات', s: 'label' }, Math.round(average * 10) / 10],
          [],
          ['رقم المتدرب', 'عدد التكرارات', 'النتيجة', 'التقدير'].map((v) => ({ v, s: 'header' as const })),
          ...sessionRows(entry),
          [],
          [{ v: 'معايير الأداء', s: 'title' }],
          ['عدد التكرارات', 'التقدير'].map((v) => ({ v, s: 'header' as const })),
          ...standards.map((standard, index): Cell[] => [`${standardRanges[index]} تكرار`, standardLabels[standard.level]]),
        ],
      },
      {
        name: 'السجل',
        widths: [14, 10, 16, 16, 14, 12, 14, 10, 14],
        rows: [historyHeader, ...historyRows(relevantHistory)],
      },
    ])
    void saveOrShare(blob, `نتائج-${eventName}-${category.name}-${fileStamp(entry.savedAt)}.xlsx`)
  }

  const exportAllHistory = () => {
    if (relevantHistory.length === 0) return
    const blob = buildXlsx([
      {
        name: 'السجل',
        widths: [14, 10, 16, 16, 14, 12, 14, 10, 14],
        rows: [historyHeader, ...historyRows(relevantHistory)],
      },
    ])
    void saveOrShare(blob, `سجل-${eventName}-${category.name}.xlsx`)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6">
        <p className="text-center text-xs font-semibold text-white/70">اختبار {eventName}</p>
        <p className="mt-1.5 text-center text-sm text-white/50">{category.name} · مواليد {category.birthYears}</p>
        {showTimer && <div className="mt-5"><StopwatchDisplay elapsedMs={stopwatch.elapsedMs} /></div>}
      </div>

      {showTimer && <TimerControls isRunning={stopwatch.isRunning} isFinished={stopwatch.isFinished} hasStarted={stopwatch.elapsedMs > 0} arrivalsCount={0} onToggle={stopwatch.toggleRunning} onFinish={stopwatch.finish} onRecord={() => undefined} onReset={() => { stopwatch.reset(); setCounts(Array.from({ length: 10 }, () => '')); setCurrent(null) }} showRecord={false} />}

      {(!showTimer || stopwatch.isFinished) && (
        <section className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6" aria-labelledby="counts-title">
          <div className="mb-4"><h2 id="counts-title" className="text-base font-bold text-white">أدخل عدد التكرارات</h2><p className="mt-1 text-xs text-white/50">أدخل نتيجة كل متدرب، ثم اعرض النتيجة.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {counts.map((count, index) => <label key={index} className="text-xs text-white/55"><span className="mb-1.5 block">المتدرب {index + 1}</span><input type="number" min="0" inputMode="numeric" value={count} onChange={(event) => updateCount(index, event.target.value)} className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.06] px-3 text-center text-base text-white outline-none focus:border-rose-200/60" /></label>)}
          </div>
          <div className="mt-4 flex gap-2">
            <Button type="button" variant="outline" onClick={() => setCounts((existing) => [...existing, ''])} disabled={counts.length >= 10} className="h-11 flex-1 rounded-xl border-white/15 bg-transparent text-white hover:bg-white/10">إضافة متدرب</Button>
            <Button type="button" onClick={showResult} disabled={!counts.some((count) => count !== '')} className="h-11 flex-1 rounded-xl bg-rose-200 font-bold text-[#24131b] hover:bg-rose-100">عرض النتيجة</Button>
          </div>

          {current && (
            <div className="mt-5 border-t border-white/10 pt-5">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <Button type="button" variant="outline" onClick={() => exportEntry(current)} className="h-10 rounded-xl border-emerald-300/30 bg-transparent text-emerald-200 hover:bg-emerald-300/10"><ExportIcon className="ml-2 size-4" aria-hidden="true" />{isMobile ? 'حفظ أو مشاركة ملف Excel' : 'تصدير النتائج إلى Excel'}</Button>
                <p className="text-xs text-white/50" dir="ltr">{formatDate(current.savedAt)} · {formatClock(current.savedAt)}{current.durationMs !== null && ` · ${formatDuration(current.durationMs)}`}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
                {current.results.map((result, index) => {
                  const level = levelOf(result.count)
                  return <div key={index} className="rounded-xl bg-white/[0.05] px-2 py-3 text-center"><p className="text-[11px] text-white/45">المتدرب {index + 1}</p><p className="mt-2 text-sm font-semibold text-white">{result.count} تكرار</p><p className="mt-1 border-t border-white/10 pt-1 text-lg font-bold text-rose-100">{result.score} <span className="text-[11px] font-normal text-white/45">نتيجة</span></p><p className={`mt-1 text-sm font-bold ${standardColors[level]}`}>{standardLabels[level]}</p></div>
                })}
              </div>
              <div className="mt-5 rounded-2xl border border-white/10 bg-[#0d0f12] p-3"><h3 className="mb-3 text-right text-sm font-bold text-white">معايير الأداء</h3><div className="flex flex-col gap-2">{standards.map((standard, index) => <div key={`${standard.level}-${standard.time}`} className="flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2 text-xs"><span className="text-white/60">{standardRanges[index]} تكرار</span><span className={`font-bold ${standardColors[standard.level]}`}>{standardLabels[standard.level]}</span></div>)}</div></div>
            </div>
          )}
        </section>
      )}

      <section className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6" aria-labelledby="history-title">
        <button type="button" onClick={() => setShowHistory((open) => !open)} aria-expanded={showHistory} className="flex w-full items-center justify-between text-right">
          <span className="flex items-center gap-2"><History className="size-4 text-white/60" aria-hidden="true" /><span id="history-title" className="text-base font-bold text-white">سجل الاختبارات</span></span>
          <span className="text-xs text-white/50">{relevantHistory.length} جلسة</span>
        </button>

        {showHistory && (
          <div className="mt-4">
            {relevantHistory.length === 0 ? (
              <p className="py-4 text-center text-sm text-white/50">لا توجد جلسات محفوظة بعد. تُحفظ كل نتيجة تعرضها هنا تلقائيا.</p>
            ) : (
              <>
                <div className="mb-3 flex gap-2">
                  <Button type="button" variant="outline" onClick={exportAllHistory} className="h-10 flex-1 rounded-xl border-emerald-300/30 bg-transparent text-emerald-200 hover:bg-emerald-300/10"><ExportIcon className="ml-2 size-4" aria-hidden="true" />{isMobile ? 'حفظ أو مشاركة السجل' : 'تصدير السجل كاملا'}</Button>
                  <Button type="button" variant="outline" onClick={clearHistory} className="h-10 rounded-xl border-rose-300/30 bg-transparent text-rose-200 hover:bg-rose-300/10"><Trash2 className="ml-2 size-4" aria-hidden="true" />مسح السجل</Button>
                </div>
                <ul className="flex max-h-96 flex-col gap-2 overflow-y-auto">
                  {relevantHistory.map((entry) => {
                    const best = Math.max(...entry.results.map((result) => result.count))
                    return (
                      <li key={entry.id} className="rounded-xl bg-white/[0.05] px-3 py-3">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="text-sm font-semibold text-white" dir="ltr">{formatDate(entry.savedAt)} · {formatClock(entry.savedAt)}</p>
                            <p className="mt-1 text-xs text-white/50">{entry.results.length} متدرب · أفضل نتيجة {best} تكرار{entry.durationMs !== null && ` · المدة ${formatDuration(entry.durationMs)}`}</p>
                          </div>
                          <div className="flex gap-1">
                            <Button type="button" variant="outline" size="icon" aria-label={isMobile ? 'حفظ أو مشاركة هذه الجلسة' : 'تصدير هذه الجلسة'} onClick={() => exportEntry(entry)} className="size-9 rounded-lg border-white/15 bg-transparent text-white hover:bg-white/10"><ExportIcon className="size-4" aria-hidden="true" /></Button>
                            <Button type="button" variant="outline" size="icon" aria-label="حذف هذه الجلسة" onClick={() => deleteEntry(entry.id)} className="size-9 rounded-lg border-white/15 bg-transparent text-rose-200 hover:bg-rose-300/10"><Trash2 className="size-4" aria-hidden="true" /></Button>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {entry.results.map((result, index) => <span key={index} className={`rounded-md bg-white/[0.06] px-2 py-0.5 text-[11px] ${standardColors[levelOf(result.count)]}`}>{index + 1}: {result.count}</span>)}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </>
            )}
          </div>
        )}
      </section>
    </div>
  )
}
