import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 100 متر ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */export const RUN_100M_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 14.2, level: 'excellent' },
  { time: 14.6, level: 'veryGood' },
  { time: 15.0, level: 'good' },
  { time: 16.0, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
