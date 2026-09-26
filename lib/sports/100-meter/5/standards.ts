import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر ( الفئة العمرية الخامسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_100M_CATEGORY_FIVE_STANDARDS: PerformanceStandard[] = [
  { time: 15.6, level: 'excellent' },
  { time: 16.0, level: 'veryGood' },
  { time: 16.4, level: 'good' },
  { time: 17.2, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
