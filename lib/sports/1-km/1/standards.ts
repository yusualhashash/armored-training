import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر ( الفئة  العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 190, level: 'excellent' },
  { time: 200, level: 'veryGood' },
  { time: 215, level: 'good' },
  { time: 235, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
