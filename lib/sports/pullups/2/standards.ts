import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 13, level: 'excellent' },
  { time: 12, level: 'veryGood' },
  { time: 11, level: 'good' },
  { time: 9, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
