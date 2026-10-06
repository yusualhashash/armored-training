'use client'

import { useEffect, useState } from 'react'

import { StopwatchDisplay } from '@/components/timer/stopwatch-display'
import { TestHistorySection } from '@/components/timer/test-history-section'
import { TestShareSheet } from '@/components/timer/test-share-sheet'
import { TimedHistoryList } from '@/components/timer/timed-history-list'
import { TimedResultCard } from '@/components/timer/timed-result-card'
import { TimedTimeInputs } from '@/components/timer/timed-time-inputs'
import { TimerControls } from '@/components/timer/timer-controls'
import { useStopwatch } from '@/components/timer/use-stopwatch'
import { useTestHistory } from '@/components/timer/use-test-history'
import { getPerformanceLevelLabel, getPerformanceScore, resolvePerformanceLevel } from '@/lib/performance'
import {
  createEntryId,
  formatClock,
  formatDate,
  formatDisplayTime,
  formatDuration,
  formatSecondsValue,
  type TimedHistoryEntry,
  type TimedShareTarget,
} from '@/lib/test-history'
import { buildTimedEntryFile, buildTimedHistoryFile } from '@/lib/timed-test-xlsx'
import type { AgeCategory, SportEvent } from '@/lib/types'
import { downloadBlob, isMobileDevice, shareFile } from '@/lib/xlsx-writer'

const HISTORY_KEY = 'timed-test-history-v1'
const MAX_PER_TEST = 500 // أحدث جلسة محفوظة لكل اختبار وفئة عمرية
const MAX_TRAINEES = 100

/** يسمح بالأرقام ونقطة عشرية واحدة فقط في خانة الزمن. */
const sanitizeSecondsInput = (raw: string) => {
  const cleaned = raw.replace(/[^0-9.]/g, '')
  const [whole, ...fractionParts] = cleaned.split('.')
  if (fractionParts.length === 0) return whole
  return `${whole}.${fractionParts.join('').slice(0, 1)}`
}

/** شاشة اختبار زمني: ساعة إيقاف، تسجيل زمن كل متدرب، ونتيجة وعلامة، مع سجل وتصدير Excel. */
export function TimedTestPanel({ event, category, showTimer = true }: { event: SportEvent; category: AgeCategory; showTimer?: boolean }) {
  const stopwatch = useStopwatch()
  const history = useTestHistory<TimedHistoryEntry>(HISTORY_KEY, event.name, category.name, MAX_PER_TEST)
  const [times, setTimes] = useState<string[]>([])
  const [current, setCurrent] = useState<TimedHistoryEntry | null>(null)
  const [showHistory, setShowHistory] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [shareTarget, setShareTarget] = useState<TimedShareTarget | null>(null)

  useEffect(() => {
    setIsMobile(isMobileDevice())
  }, [])

  // إذا انتهى العداد دون تسجيل أي زمن، يُعتمد زمن الإنهاء كمتدرب واحد.
  useEffect(() => {
    if (!showTimer || !stopwatch.isFinished) return
    setTimes((existing) => (existing.length > 0 ? existing : [formatSecondsValue(stopwatch.elapsedMs / 1000)]))
  }, [showTimer, stopwatch.isFinished, stopwatch.elapsedMs])

  useEffect(() => {
    if (!shareTarget) return
    const onKey = (keyEvent: KeyboardEvent) => keyEvent.key === 'Escape' && setShareTarget(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [shareTarget])

  const removeTime = (index: number) => {
    setTimes((existing) => existing.filter((_, i) => i !== index))
    setCurrent(null)
  }

  // يسجّل زمن المتدرب الحالي فور الضغط على زر تسجيل وصول
  const recordTime = () => {
    if (!stopwatch.isRunning) return
    const value = formatSecondsValue(stopwatch.elapsedMs / 1000)
    setTimes((existing) => {
      const valid = existing.filter((item) => item !== '')
      if (valid.length >= MAX_TRAINEES) return valid
      return [...valid, value]
    })
    setCurrent(null)
  }

  const resetSession = () => {
    stopwatch.reset()
    setTimes([])
    setCurrent(null)
  }

  const showResult = () => {
    const enteredSeconds = times
      .filter((value) => value !== '')
      .map(Number)
      .filter((seconds) => Number.isFinite(seconds) && seconds > 0)

    if (enteredSeconds.length === 0) return

    const entry: TimedHistoryEntry = {
      id: createEntryId(),
      savedAt: new Date().toISOString(),
      eventName: event.name,
      categoryName: category.name,
      durationMs: showTimer ? stopwatch.elapsedMs : null,
      results: enteredSeconds.map((seconds) => ({ seconds, score: getPerformanceScore(event, seconds) ?? 0 })),
    }

    setCurrent(entry)
    history.add(entry)
  }

  const deleteEntry = (id: string) => {
    history.remove(id)
    if (current?.id === id) setCurrent(null)
  }

  const clearHistory = () => {
    if (!window.confirm('هل تريد حذف كل السجل لهذا الاختبار؟')) return
    history.clear()
  }

  const fileFor = (target: TimedShareTarget) =>
    target.kind === 'entry'
      ? buildTimedEntryFile(event, category, target.entry, history.relevant)
      : buildTimedHistoryFile(event, category, history.relevant)

  // على الجوال: افتح ورقة المشاركة. على الحاسوب: نزّل الملف مباشرة.
  const requestExport = (target: TimedShareTarget) => {
    if (isMobile) {
      setShareTarget(target)
      return
    }
    const file = fileFor(target)
    downloadBlob(file.blob, file.name)
  }

  const summaryText = (entry: TimedHistoryEntry) => {
    const lines = [
      `اختبار ${entry.eventName}`,
      `الفئة العمرية: ${entry.categoryName}`,
      `التاريخ: ${formatDate(entry.savedAt)} ${formatClock(entry.savedAt)}`,
      ...(entry.durationMs !== null ? [`مدة الاختبار: ${formatDuration(entry.durationMs)}`] : []),
      '',
      ...entry.results.map((result, index) => `المتدرب ${index + 1}: ${formatDisplayTime(result.seconds)} - ${result.score} نتيجة - ${getPerformanceLevelLabel(resolvePerformanceLevel(event, result.seconds))}`),
    ]
    return lines.join('\n')
  }

  const sendToApp = (app: 'whatsapp' | 'telegram') => {
    if (shareTarget?.kind !== 'entry') return
    const text = summaryText(shareTarget.entry)
    const url =
      app === 'whatsapp'
        ? `https://wa.me/?text=${encodeURIComponent(text)}`
        : `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setShareTarget(null)
  }

  const shareExcelFile = async () => {
    if (!shareTarget) return
    const file = fileFor(shareTarget)
    setShareTarget(null)
    await shareFile(file.blob, file.name)
  }

  const saveExcelFile = () => {
    if (!shareTarget) return
    const file = fileFor(shareTarget)
    setShareTarget(null)
    downloadBlob(file.blob, file.name)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6">
        <p className="text-center text-xs font-semibold text-white/70">اختبار {event.name}</p>
        <p className="mt-1.5 text-center text-sm text-white/50">{category.name} · مواليد {category.birthYears}</p>
        {showTimer && <div className="mt-5"><StopwatchDisplay elapsedMs={stopwatch.elapsedMs} /></div>}
      </div>

      {showTimer && (
        <TimerControls
          isRunning={stopwatch.isRunning}
          isFinished={stopwatch.isFinished}
          hasStarted={stopwatch.elapsedMs > 0}
          arrivalsCount={times.filter((value) => value !== '').length}
          onToggle={stopwatch.toggleRunning}
          onFinish={stopwatch.finish}
          onRecord={recordTime}
          onReset={resetSession}
        />
      )}

      <TimedTimeInputs times={times} maxTrainees={MAX_TRAINEES} onRemove={removeTime} onSubmit={showResult}>
        {current && <TimedResultCard event={event} entry={current} isMobile={isMobile} onExport={() => requestExport({ kind: 'entry', entry: current })} />}
      </TimedTimeInputs>

      <TestHistorySection
        count={history.relevant.length}
        isMobile={isMobile}
        open={showHistory}
        onToggle={() => setShowHistory((open) => !open)}
        onExportAll={() => requestExport({ kind: 'all' })}
        onClear={clearHistory}
        emptyMessage="لا توجد جلسات محفوظة بعد. تُحفظ كل نتيجة تعرضها هنا تلقائيا."
      >
        <TimedHistoryList
          event={event}
          entries={history.relevant}
          isMobile={isMobile}
          onExport={(entry) => requestExport({ kind: 'entry', entry })}
          onDelete={deleteEntry}
        />
      </TestHistorySection>

      {shareTarget && (
        <TestShareSheet
          showMessaging={shareTarget.kind === 'entry'}
          onClose={() => setShareTarget(null)}
          onSendWhatsApp={() => sendToApp('whatsapp')}
          onSendTelegram={() => sendToApp('telegram')}
          onShareFile={shareExcelFile}
          onSaveFile={saveExcelFile}
        />
      )}
    </div>
  )
}
