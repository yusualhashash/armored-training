import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر (الفئة الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 200, level: 'excellent' },
  { time: 210, level: 'veryGood' },
  { time: 225, level: 'good' },
  { time: 235, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
