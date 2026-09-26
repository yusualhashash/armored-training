import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار التمرين السادس ( الفئة العمرية الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PUSH_UPS_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 45, level: 'excellent' },
  { time: 40, level: 'veryGood' },
  { time: 35, level: 'good' },
  { time: 30, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
