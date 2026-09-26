import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 5 كيلومتر ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_5KM_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 1440, level: 'excellent' },
  { time: 1470, level: 'veryGood' },
  { time: 1500, level: 'good' },
  { time: 1560, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
