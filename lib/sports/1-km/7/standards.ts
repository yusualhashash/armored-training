import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر (الفئة السابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_SEVEN_STANDARDS: PerformanceStandard[] = [
  { time: 300, level: 'excellent' },
  { time: 330, level: 'veryGood' },
  { time: 360, level: 'good' },
  { time: 420, level: 'acceptable' }, // يشمل الـ 420 ثانية كآخر قيمة في المقبول
  { time: Infinity, level: 'poor' },
]
