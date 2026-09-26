import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 4×100 متر ( الفئة العمرية الأولى - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const SPRINT_4X100M_CATEGORY_ONE_STANDARDS: PerformanceStandard[] = [
  { time: 70, level: 'excellent' }, 
  { time: 73, level: 'veryGood' }, 
  { time: 76, level: 'good' }, 
  { time: 80, level: 'acceptable' }, 
  { time: Infinity, level: 'poor' },
]
