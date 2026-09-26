import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر (الفئة العمرية السابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_100M_CATEGORY_SEVEN_STANDARDS: PerformanceStandard[] = [
  { time: 16.5, level: 'excellent' },
  { time: 17.0, level: 'veryGood' },
  { time: 17.5, level: 'good' },
  { time: 18.5, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
