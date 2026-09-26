import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 5 كيلومتر ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_5KM_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 1320, level: 'excellent' },
  { time: 1350, level: 'veryGood' },
  { time: 1380, level: 'good' },
  { time: 1440, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
