import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر (الفئة الخامسة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_FIVE_STANDARDS: PerformanceStandard[] = [
  { time: 230, level: 'excellent' },
  { time: 240, level: 'veryGood' },
  { time: 245, level: 'good' },
  { time: 270, level: 'acceptable' }, // يشمل الـ 270 ثانية كآخر قيمة في المقبول
  { time: Infinity, level: 'poor' },
]
