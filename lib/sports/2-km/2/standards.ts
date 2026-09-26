import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 2 كيلومتر ( الفئة الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_2KM_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 460, level: 'excellent' },
  { time: 475, level: 'veryGood' },
  { time: 490, level: 'good' },
  { time: 520, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
