import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 12, level: 'excellent' },
  { time: 11, level: 'veryGood' },
  { time: 10, level: 'good' },
  { time: 8, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
