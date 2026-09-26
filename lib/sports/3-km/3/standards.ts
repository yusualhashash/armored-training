import type { PerformanceStandard } from '@/lib/types'

export const RUN_3KM_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 750, level: 'excellent' },
  { time: 765, level: 'veryGood' },
  { time: 780, level: 'good' },
  { time: 820, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
