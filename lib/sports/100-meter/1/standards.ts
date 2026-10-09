import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_100M_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 14, level: 'excellent' },
  { time: 14.2, level: 'veryGood' },
  { time: 14.5, level: 'good' },
  { time: 15.3, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
