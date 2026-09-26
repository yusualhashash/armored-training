import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 2 كيلومتر ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_2KM_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 450, level: 'excellent' },
  { time: 465, level: 'veryGood' },
  { time: 480, level: 'good' },
  { time: 510, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
