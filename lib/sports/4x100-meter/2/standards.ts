import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 4×100 متر ( الفئة العمرية الثانية - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const SPRINT_4X100M_CATEGORY_TWO_STANDARDS: PerformanceStandard[] = [
  { time: 72, level: 'excellent' }, 
  { time: 75, level: 'veryGood' }, 
  { time: 78, level: 'good' }, 
  { time: 82, level: 'acceptable' }, 
  { time: Infinity, level: 'poor' },
]
