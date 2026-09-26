import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية السابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_SEVEN_STANDARDS: PerformanceStandard[] = [
  { time: 6, level: 'excellent' },
  { time: 5, level: 'veryGood' },
  { time: 4, level: 'good' },
  { time: 2, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
