import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار سحب الجسم على الثابت ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PULL_UPS_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 14, level: 'excellent' },
  { time: 13, level: 'veryGood' },
  { time: 12, level: 'good' },
  { time: 10, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
