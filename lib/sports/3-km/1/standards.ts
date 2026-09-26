import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 3 كيلومتر ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_3KM_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 720, level: 'excellent' },
  { time: 735, level: 'veryGood' },
  { time: 750, level: 'good' },
  { time: 780, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
