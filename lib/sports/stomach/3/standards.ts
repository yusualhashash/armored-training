import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 54, level: 'excellent' },
  { time: 48, level: 'veryGood' },
  { time: 42, level: 'good' },
  { time: 36, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
