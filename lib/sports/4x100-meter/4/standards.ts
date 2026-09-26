import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 4×100 متر ( الفئة العمرية الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const SPRINT_4X100M_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 78, level: 'excellent' }, 
  { time: 82, level: 'veryGood' }, 
  { time: 86, level: 'good' }, 
  { time: 90, level: 'acceptable' }, 
  { time: Infinity, level: 'poor' },
]
