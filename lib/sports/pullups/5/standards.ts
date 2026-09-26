import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية الخامسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_FIVE_STANDARDS: PerformanceStandard[] = [
  { time: 8, level: 'excellent' },
  { time: 7, level: 'veryGood' },
  { time: 6, level: 'good' },
  { time: 4, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
