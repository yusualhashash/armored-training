import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 2 كيلومتر ( الفئة الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_2KM_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 470, level: 'excellent' },
  { time: 480, level: 'veryGood' },
  { time: 500, level: 'good' },
  { time: 540, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
