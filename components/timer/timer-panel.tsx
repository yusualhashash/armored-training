'use client'

import { useState } from 'react'
import { ArrivalsList } from '@/components/timer/arrivals-list'
import { ResultSummary } from '@/components/timer/result-summary'
import { StandardsTable } from '@/components/timer/standards-table'
import { StopwatchDisplay } from '@/components/timer/stopwatch-display'
import { TimerControls } from '@/components/timer/timer-controls'
import { useStopwatch } from '@/components/timer/use-stopwatch'
import { Button } from '@/components/ui/button'
import { BookOpen, ChevronDown } from 'lucide-react'
import { getPerformanceScore, resolvePerformanceLevel } from '@/lib/performance'
import type { AgeCategory, SportEvent } from '@/lib/types'

interface TimerPanelProps {
  event: SportEvent
  category?: AgeCategory
  showRecord?: boolean
  trainerInstructions?: string
  armoredTrainerRatings?: Array<{ score: string; rating: string }>
}

/** شاشة اختبار كاملة: ساعة إيقاف وتسجيل أوقات الوصول والنتيجة النهائية. */
export function TimerPanel({
  event,
  category,
  showRecord = true,
  trainerInstructions,
  armoredTrainerRatings,
}: TimerPanelProps) {
  const stopwatch = useStopwatch()
  const [showInstructions, setShowInstructions] = useState(false)
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

      {trainerInstructions && (
        <section className="overflow-hidden rounded-3xl border border-emerald-200/10 bg-[#101216]" dir="rtl">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowInstructions((visible) => !visible)}
            aria-expanded={showInstructions}
            className="flex h-auto w-full items-center justify-between px-5 py-4 text-right text-white hover:bg-white/5"
          >
            <span className="flex items-center gap-3">
              <BookOpen className="size-5 text-emerald-300" aria-hidden="true" />
              <span className="font-semibold">تعليمات المدرب</span>
            </span>
            <ChevronDown className={`size-5 text-white/50 transition-transform ${showInstructions ? 'rotate-180' : ''}`} aria-hidden="true" />
          </Button>
          {showInstructions && (
            <div className="border-t border-white/10 px-5 pb-5 pt-4 text-sm leading-8 text-white/70">
              {trainerInstructions.split('\\n').map((line) => (
                <p key={line} className="not-last:mb-2">{line}</p>
              ))}
              {armoredTrainerRatings && (
                <table className="mt-4 w-full overflow-hidden rounded-xl border border-white/10 text-right text-sm">
                  <thead className="bg-white/5 text-white/90">
                    <tr>
                      <th scope="col" className="px-4 py-2 font-semibold">الزمن</th>
                      <th scope="col" className="px-4 py-2 font-semibold">التقييم</th>
                    </tr>
                  </thead>
                  <tbody>
                    {armoredTrainerRatings.map((item) => (
                      <tr key={item.score} className="border-t border-white/10">
                        <td className="px-4 py-2 text-white/80">{item.score}</td>
                        <td className="px-4 py-2 text-white/80">{item.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </section>
      )}

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
