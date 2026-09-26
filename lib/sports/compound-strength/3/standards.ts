import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار  القوة المركبة ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const COMPOUND_STRENGTH_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  {  time: 48, level: 'excellent'},
  { time: 44, level: 'veryGood' },
  { time: 40, level: 'good' },
  { time: 36, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
