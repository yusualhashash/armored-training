'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'
import { StopwatchDisplay } from '@/components/timer/stopwatch-display'
import { TimerControls } from '@/components/timer/timer-controls'
import { useStopwatch } from '@/components/timer/use-stopwatch'
import type { PerformanceLevel, PerformanceStandard } from '@/lib/types'

type StandardLevel = PerformanceLevel

const standardLabels: Record<StandardLevel, string> = {
  excellent: 'ممتاز',
  veryGood: 'جيد جدا',
  good: 'جيد',
  acceptable: 'مقبول',
  poor: 'غير مقبول',
}

const getStandardForCount = (count: number, standards: PerformanceStandard[]) =>
  standards.find((standard, index) => count >= standard.time || index === standards.length - 1) ?? standards.at(-1)

const getStandardRanges = (standards: PerformanceStandard[]) => standards.map((standard, index) => {
  const nextThreshold = standards[index - 1]?.time
  if (index === 0) return `${standard.time} فأكثر`
  if (!Number.isFinite(standard.time)) return `0 – ${nextThreshold - 1}`
  return `${standard.time} – ${nextThreshold - 1}`
})

const standardColors: Record<StandardLevel, string> = {
  excellent: 'text-emerald-300',
  veryGood: 'text-cyan-300',
  good: 'text-sky-300',
  acceptable: 'text-amber-300',
  poor: 'text-rose-300',
}

export function RepetitionTestPanel({ eventName, category, standards, scoreResolver, showTimer = true }: { eventName: string; category: { name: string; birthYears: string }; standards: PerformanceStandard[]; scoreResolver: (count: number) => number; showTimer?: boolean }) {
  const stopwatch = useStopwatch()
  const [counts, setCounts] = useState([''])
  const [scores, setScores] = useState<{ count: number; score: number }[] | null>(null)
  const standardRanges = getStandardRanges(standards)

  const updateCount = (index: number, value: string) => {
    setCounts((current) => current.map((count, countIndex) => (countIndex === index ? value.replace(/[^0-9]/g, '') : count)))
    setScores(null)
  }

  const showResult = () => {
    const enteredCounts = counts.filter((count) => count !== '').map(Number)
    if (enteredCounts.length === 0) return
    setScores(enteredCounts.map((count) => ({ count, score: scoreResolver(count) })))
  }

  const exportResults = () => {
    if (!scores) return

    const rows = [
      ['اختبار', eventName],
      ['الفئة العمرية', category.name],
      [],
      ['رقم المتدرب', 'عدد التكرارات', 'النتيجة', 'التقدير'],
      ...scores.map((result, index) => {
        const level = getStandardForCount(result.count, standards)?.level ?? 'poor'
        return [index + 1, result.count, result.score, standardLabels[level]]
      }),
    ]
  const csv = rows
    .map((row) => row.map((cell) => `"${String(cell ?? '').replaceAll('"', '""')}"`).join(';'))
    .join('\r\n')

  // Excel on Arabic/Windows locales reliably detects UTF-16LE and semicolon columns.
  const utf16 = new Uint8Array(2 + csv.length * 2)
  utf16[0] = 0xff
  utf16[1] = 0xfe
  for (let index = 0; index < csv.length; index += 1) {
    const code = csv.charCodeAt(index)
    utf16[2 + index * 2] = code & 0xff
    utf16[3 + index * 2] = code >> 8
  }
  const blob = new Blob([utf16], { type: 'text/csv;charset=utf-16le;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `نتائج-${eventName}-${category.name}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6">
        <p className="text-center text-xs font-semibold text-white/70">اختبار {eventName}</p>
        <p className="mt-1.5 text-center text-sm text-white/50">{category.name} · مواليد {category.birthYears}</p>
        {showTimer && <div className="mt-5"><StopwatchDisplay elapsedMs={stopwatch.elapsedMs} /></div>}
      </div>

      {showTimer && <TimerControls isRunning={stopwatch.isRunning} isFinished={stopwatch.isFinished} hasStarted={stopwatch.elapsedMs > 0} arrivalsCount={0} onToggle={stopwatch.toggleRunning} onFinish={stopwatch.finish} onRecord={() => undefined} onReset={() => { stopwatch.reset(); setCounts(Array.from({ length: 10 }, () => '')); setScores(null) }} showRecord={false} />}

      {(!showTimer || stopwatch.isFinished) && (
        <section className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6" aria-labelledby="counts-title">
          <div className="mb-4"><h2 id="counts-title" className="text-base font-bold text-white">أدخل عدد التكرارات</h2><p className="mt-1 text-xs text-white/50">أدخل نتيجة كل متدرب، ثم اعرض النتيجة.</p></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {counts.map((count, index) => <label key={index} className="text-xs text-white/55"><span className="mb-1.5 block">المتدرب {index + 1}</span><input type="number" min="0" inputMode="numeric" value={count} onChange={(event) => updateCount(index, event.target.value)} className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.06] px-3 text-center text-base text-white outline-none focus:border-rose-200/60" /></label>)}
          </div>
          <div className="mt-4 flex gap-2">
            <Button type="button" variant="outline" onClick={() => setCounts((current) => [...current, ''])} disabled={counts.length >= 10} className="h-11 flex-1 rounded-xl border-white/15 bg-transparent text-white hover:bg-white/10">إضافة متدرب</Button>
            <Button type="button" onClick={showResult} disabled={!counts.some((count) => count !== '')} className="h-11 flex-1 rounded-xl bg-rose-200 font-bold text-[#24131b] hover:bg-rose-100">عرض النتيجة</Button>
          </div>
          {scores !== null && <div className="mt-5 border-t border-white/10 pt-5"><div className="mb-4 flex justify-start"><Button type="button" variant="outline" onClick={exportResults} className="h-10 rounded-xl border-emerald-300/30 bg-transparent text-emerald-200 hover:bg-emerald-300/10"><Download className="ml-2 size-4" aria-hidden="true" />تصدير النتائج إلى Excel</Button></div><div className="grid grid-cols-2 gap-2 sm:grid-cols-5">{scores.map((result, index) => { const standard = getStandardForCount(result.count, standards); const level = standard?.level ?? 'poor'; return <div key={index} className="rounded-xl bg-white/[0.05] px-2 py-3 text-center"><p className="text-[11px] text-white/45">المتدرب {index + 1}</p><p className="mt-2 text-sm font-semibold text-white">{result.count} تكرار</p><p className="mt-1 border-t border-white/10 pt-1 text-lg font-bold text-rose-100">{result.score} <span className="text-[11px] font-normal text-white/45">نتيجة</span></p><p className={`mt-1 text-sm font-bold ${standardColors[level]}`}>{standard ? standardLabels[standard.level] : standardLabels.poor}</p></div> })}</div><div className="mt-5 rounded-2xl border border-white/10 bg-[#0d0f12] p-3"><h3 className="mb-3 text-right text-sm font-bold text-white">معايير الأداء</h3><div className="flex flex-col gap-2">{standards.map((standard, index) => <div key={`${standard.level}-${standard.time}`} className="flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2 text-xs"><span className="text-white/60">{standardRanges[index]} تكرار</span><span className={`font-bold ${standardColors[standard.level]}`}>{standardLabels[standard.level]}</span></div>)}</div></div></div>}
        </section>
      )}
    </div>
  )
}
