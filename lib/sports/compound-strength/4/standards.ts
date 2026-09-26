import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار  القوة المركبة ( الفئة العمرية الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const COMPOUND_STRENGTH_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  {  time: 46, level: 'excellent'},
  { time: 42, level: 'veryGood' },
  { time: 38, level: 'good' },
  { time: 34, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
