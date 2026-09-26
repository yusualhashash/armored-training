import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية السابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_SEVEN_STANDARDS: PerformanceStandard[] = [
  { time: 35, level: 'excellent' },
  { time: 30, level: 'veryGood' },
  { time: 25, level: 'good' },
  { time: 20, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
