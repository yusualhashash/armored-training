import type { PerformanceStandard } from '@/lib/types'

/**
 * معايير الأداء لاختبار 1 كيلومتر (الفئة الثالثة - بالثواني).
 * كل زمن أسرع من الحد أو مساوٍ له يحقق المستوى المكتوب.
 */
export const RUN_1KM_CATEGORY_THREE_STANDARDS: PerformanceStandard[] = [
  { time: 210, level: 'excellent' },
  { time: 220, level: 'veryGood' },
  { time: 255, level: 'good' },         // نهاية علامات الجيد والـ 64 هي المقبول
  { time: 255, level: 'acceptable' },   // بما أن الـ 64 تقع في قسم مقبول حتى زمن 255
  { time: Infinity, level: 'poor' },
]
