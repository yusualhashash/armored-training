import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار  القوة المركبة ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const COMPOUND_STRENGTH_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  {  time: 50  , level: 'excellent'},
  { time: 46, level: 'veryGood' },
  { time: 42, level: 'good' },
  { time: 38, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
