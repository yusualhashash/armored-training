import type { PerformanceStandard } from '@/lib/types'
/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 52, level: 'excellent' },
  { time: 46, level: 'veryGood' },
  { time: 40, level: 'good' },
  { time: 34, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
