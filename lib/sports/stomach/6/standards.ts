import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية السادسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_SIX_STANDARDS: PerformanceStandard[] = [
  { time: 40, level: 'excellent' },
  { time: 35, level: 'veryGood' },
  { time: 30, level: 'good' },
  { time: 25, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
