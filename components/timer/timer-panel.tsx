'use client'

import { ArrivalsList } from '@/components/timer/arrivals-list'
import { ResultSummary } from '@/components/timer/result-summary'
import { StandardsTable } from '@/components/timer/standards-table'
import { StopwatchDisplay } from '@/components/timer/stopwatch-display'
import { TimerControls } from '@/components/timer/timer-controls'
import { useStopwatch } from '@/components/timer/use-stopwatch'
import { getPerformanceScore, resolvePerformanceLevel } from '@/lib/performance'
import type { AgeCategory, SportEvent } from '@/lib/types'

interface TimerPanelProps {
  event: SportEvent
  category?: AgeCategory
  showRecord?: boolean
}

/** شاشة اختبار كاملة: ساعة إيقاف وتسجيل أوقات الوصول والنتيجة النهائية. */
export function TimerPanel({ event, category, showRecord = true }: TimerPanelProps) {
  const stopwatch = useStopwatch()
  const seconds = stopwatch.elapsedMs / 1000
  const level = resolvePerformanceLevel(event, seconds)
  const score = getPerformanceScore(event, seconds)

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6">
<p className="text-center text-xs font-semibold text-white/70">اختبار {event.name}</p>
        {category && <p className="mt-1.5 text-center text-sm text-white/50">{category.name} · مواليد {category.birthYears}</p>}
        <div className="mt-5">
          <StopwatchDisplay elapsedMs={stopwatch.elapsedMs} />
        </div>
        {stopwatch.isFinished && <ResultSummary level={level} score={score} maxScore={event.maxScore} />}
      </div>

      <TimerControls
        isRunning={stopwatch.isRunning}
        isFinished={stopwatch.isFinished}
        hasStarted={stopwatch.elapsedMs > 0}
        arrivalsCount={stopwatch.arrivals.length}
        onToggle={stopwatch.toggleRunning}
        onFinish={stopwatch.finish}
        onRecord={stopwatch.recordArrival}
        onReset={stopwatch.reset}
        showRecord={showRecord}
      />

      {stopwatch.arrivals.length > 0 && <ArrivalsList event={event} arrivals={stopwatch.arrivals} />}

      {stopwatch.isFinished && <StandardsTable event={event} />}
    </div>
  )
}
