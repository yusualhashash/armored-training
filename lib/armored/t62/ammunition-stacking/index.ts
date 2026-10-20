import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_AMMUNITION_INSTRUCTIONS = `سلاح الدبابة في وضعية القتال .
الوحدة النارية معدة للتنضيد وموضوعه اكداسا على طول الجانب الايمن للمركبات ، طلقات المدفع في عبواتها مفروزة حسب انواع القذائف .
طلقات الرشاشات في العلب ، الرمانات والشهب في الحقائب ، الطاقم خلف الدبابة على بعد حتى ٤م .`

export const T62_AMMUNITION_RATINGS = [
  { score: '17 د + 30 ثا', rating: 'ممتاز' },
  { score: '19 د', rating: 'جيد' },
  { score: '23 د', rating: 'مقبول' },
]

export function createT62AmmunitionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 17 * 60 + 30, level: 'excellent' },
    { time: 19 * 60, level: 'good' },
    { time: 23 * 60, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-ammunition-stacking',
    name: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
