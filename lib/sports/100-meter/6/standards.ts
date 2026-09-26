import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر (الفئة العمرية السادسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_100M_CATEGORY_SIX_STANDARDS: PerformanceStandard[] = [
  { time: 16.0, level: 'excellent' },
  { time: 16.5, level: 'veryGood' },
  { time: 17.0, level: 'good' },
  { time: 18.0, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
