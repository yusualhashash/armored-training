import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 56, level: 'excellent' },
  { time: 50, level: 'veryGood' },
  { time: 44, level: 'good' },
  { time: 38, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
