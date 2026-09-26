import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية الخامسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_FIVE_STANDARDS: PerformanceStandard[] = [
  { time: 45, level: 'excellent' },
  { time: 40, level: 'veryGood' },
  { time: 35, level: 'good' },
  { time: 30, level: 'acceptable' },
  { time: 0, level: 'poor' },
]
