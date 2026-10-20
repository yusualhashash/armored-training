import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_AMMUNITION_INSTRUCTIONS = `سلاح الدبابة في وضعية القتال .
الوحدة النارية معدة للتنضيد وموضوعه اكداسا على طول الجانب الايمن للمركبات ، طلقات المدفع في عبواتها مفروزة حسب انواع القذائف .
طلقات الرشاشات في العلب ، الرمانات والشهب في الحقائب ، الطاقم خلف الدبابة على بعد حتى ٤م .`

export const T72_AMMUNITION_RATINGS = [
  { score: '26 د', rating: 'ممتاز' },
  { score: '28 د', rating: 'جيد' },
  { score: '34 د', rating: 'مقبول' },
]

export function createT72AmmunitionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 26 * 60, level: 'excellent' },
    { time: 28 * 60, level: 'good' },
    { time: 34 * 60, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-ammunition-stacking',
    name: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
