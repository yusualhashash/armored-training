import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 4×100 متر ( الفئة العمرية الخامسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const SPRINT_4X100M_CATEGORY_FIVE_STANDARDS: PerformanceStandard[] = [
  { time: 80, level: 'excellent' }, 
  { time: 85, level: 'veryGood' }, 
  { time: 90, level: 'good' }, 
  { time: 95, level: 'acceptable' }, 
  { time: Infinity, level: 'poor' },
]
