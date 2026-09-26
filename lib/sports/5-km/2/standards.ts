import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 5 كيلومتر ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_5KM_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 1380, level: 'excellent' },
  { time: 1410, level: 'veryGood' },
  { time: 1440, level: 'good' },
  { time: 1500, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
