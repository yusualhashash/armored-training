import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار  القوة المركبة ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const COMPOUND_STRENGTH_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  {  time: 52  , level: 'excellent'},
  { time: 48, level: 'veryGood' },
  { time: 44, level: 'good' },
  { time: 40, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
