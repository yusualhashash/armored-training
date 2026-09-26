import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار تمرين المعدة ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const STOMACH_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 58, level: 'excellent' },
  { time: 52, level: 'veryGood' },
  { time: 46, level: 'good' },
  { time: 40, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]

