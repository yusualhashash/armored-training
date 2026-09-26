import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار  القوة المركبة ( الفئة العمرية السابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const COMPOUND_STRENGTH_CATEGORY_SEVEN_STANDARDS: PerformanceStandard[] = [
  {  time: 36, level: 'excellent'},
  { time: 32, level: 'veryGood' },
  { time: 28, level: 'good' },
  { time: 24, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
