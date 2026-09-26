import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية السادسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_SIX_STANDARDS: PerformanceStandard[] = [
  { time: 7, level: 'excellent' },
  { time: 6, level: 'veryGood' },
  { time: 5, level: 'good' },
  { time: 3, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
