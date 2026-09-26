import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر ( الفئة العمرية الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */export const RUN_100M_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 15.0, level: 'excellent' },
  { time: 15.4, level: 'veryGood' },
  { time: 15.8, level: 'good' },
  { time: 16.6, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
