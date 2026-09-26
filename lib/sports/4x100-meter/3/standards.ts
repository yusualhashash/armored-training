import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 4×100 متر ( الفئة العمرية الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const SPRINT_4X100M_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 75, level: 'excellent' }, 
  { time: 78, level: 'veryGood' }, 
  { time: 82, level: 'good' }, 
  { time: 87, level: 'acceptable' }, 
  { time: Infinity, level: 'poor' },
]
