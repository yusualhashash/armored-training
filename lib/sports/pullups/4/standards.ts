import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 10, level: 'excellent' },
  { time: 9, level: 'veryGood' },
  { time: 8, level: 'good' },
  { time: 6, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
