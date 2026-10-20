import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_AMMUNITION_INSTRUCTIONS = `سلاح الدبابة في وضعية القتال .
الوحدة النارية معدة للتنضيد وموضوعه اكداسا على طول الجانب الايمن للمركبات ، طلقات المدفع في عبواتها مفروزة حسب انواع القذائف .
طلقات الرشاشات في العلب ، الرمانات والشهب في الحقائب ، الطاقم خلف الدبابة على بعد حتى ٤م .`

export const T55_AMMUNITION_RATINGS = [
  { score: '13 د', rating: 'ممتاز' },
  { score: '14 د + 30 ثا', rating: 'جيد' },
  { score: '16 د', rating: 'مقبول' },
]

export function createT55AmmunitionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 13 * 60, level: 'excellent' },
    { time: 14 * 60 + 30, level: 'good' },
    { time: 16 * 60, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-ammunition-stacking',
    name: 'تنضيد الوحدة النارية في الدبابة (الوحدة النارية بالكامل) - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
