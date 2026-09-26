import { Trophy } from 'lucide-react'

import { getPerformanceLevelColor, getPerformanceLevelLabel } from '@/lib/performance'
import type { PerformanceLevel } from '@/lib/types'

interface ResultSummaryProps {
  level: PerformanceLevel
  score: number | null
  maxScore: number
}

/** نتيجة الاختبار: المستوى المحقق والعلامة النهائية. */
export function ResultSummary({ level, score, maxScore }: ResultSummaryProps) {
  return (
    <div className="mt-5 flex flex-col items-center gap-3">
      <div className="flex items-center justify-center gap-2 text-xl font-bold">
        <Trophy className="size-5 text-rose-200" aria-hidden="true" />
        <span className={getPerformanceLevelColor(level)}>{getPerformanceLevelLabel(level)}</span>
      </div>
      {score !== null && (
        <div className="w-full rounded-2xl bg-rose-200/10 px-4 py-3 text-center">
          <p className="text-xs font-medium text-white/50">العلامة النهائية</p>
          <p className="mt-1 flex items-baseline justify-center gap-1 text-4xl font-black text-rose-100">
            <span>{score}</span>
            <span className="text-base font-bold text-white/50">/ {maxScore}</span>
          </p>
        </div>
      )}
    </div>
  )
}
