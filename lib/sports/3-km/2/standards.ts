import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 3 كيلومتر ( الفئة الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_3KM_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 735, level: 'excellent' },
  { time: 750, level: 'veryGood' },
  { time: 765, level: 'good' },
  { time: 795, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
