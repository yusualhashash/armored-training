import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار التمرين السادس ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PUSH_UPS_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 50, level: 'excellent' },
  { time: 44, level: 'veryGood' },
  { time: 38, level: 'good' },
  { time: 32, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
