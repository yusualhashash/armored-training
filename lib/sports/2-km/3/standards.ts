import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 2 كيلومتر ( الفئة الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_2KM_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 480, level: 'excellent' },
  { time: 495, level: 'veryGood' },
  { time: 510, level: 'good' },
  { time: 540, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
  