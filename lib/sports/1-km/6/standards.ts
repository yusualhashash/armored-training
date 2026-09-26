import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر (الفئة السادسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_SIX_STANDARDS: PerformanceStandard[] = [
  { time: 250, level: 'excellent' },
  { time: 275, level: 'veryGood' },
  { time: 299, level: 'good' },
  { time: 345, level: 'acceptable' }, // يشمل الـ 345 ثانية كآخر قيمة في المقبول
  { time: Infinity, level: 'poor' },
]
