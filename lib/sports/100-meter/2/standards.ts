import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */export const RUN_100M_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 14.1, level: 'excellent' },
  { time: 14.4, level: 'veryGood' },
  { time: 14.6, level: 'good' },
  { time: 15.6, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
