import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر (الفئة الرابعة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_FOUR_STANDARDS: PerformanceStandard[] = [
  { time: 220, level: 'excellent' },
  { time: 230, level: 'veryGood' },
  { time: 250, level: 'good' },         // يشمل الـ 250 ثانية كآخر قيمة في الجيد
  { time: 255, level: 'acceptable' },   // يشمل الـ 255 ثانية كآخر قيمة في المقبول
  { time: Infinity, level: 'poor' },
]
