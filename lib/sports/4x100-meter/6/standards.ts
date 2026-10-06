import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 4×100 متر ( الفئة العمرية السادسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const SPRINT_4X100M_CATEGORY_SIX_STANDARDS: PerformanceStandard[] = [
  { time: 85, level: 'excellent' },
  { time: 90, level: 'veryGood' },
  { time: 95, level: 'good' },
  { time: 105, level: 'acceptable' },
  { time: Infinity, level: 'poor' },
]
