import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار التمرين السادس ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const PUSH_UPS_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 52, level: 'excellent' },
  { time: 46, level: 'veryGood' },
  { time: 40, level: 'good' },
  { time: 34, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
