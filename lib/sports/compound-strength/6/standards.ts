import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار  القوة المركبة ( الفئة العمرية السادسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const COMPOUND_STRENGTH_CATEGORY_SIX_STANDARDS: PerformanceStandard[] = [
  {  time: 40, level: 'excellent'},
  { time: 36, level: 'veryGood' },
  { time: 32, level: 'good' },
  { time: 28, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
