import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_TRANSFER_ROUNDS_INSTRUCTIONS = `الطاقم في الدبابة . فتحات الدخول
مغلقة ، المدفع في وضعية القتال .
نقل طلقات المدفع وتحويل اسلحة
الدبابة الى وضعية القتال .`

export const T72_TRANSFER_ROUNDS_RATINGS = [
  { score: '26 د + 20 ثا', rating: 'ممتاز' },
  { score: '27 د', rating: 'جيد' },
  { score: '28 د + 10 ثا', rating: 'مقبول' },
]

export function createT72TransferRoundsEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 26 * 60 + 20, level: 'excellent' }, // 1580s
    { time: 27 * 60, level: 'good' },           // 1620s
    { time: 28 * 60 + 10, level: 'acceptable' },// 1690s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-transfer-rounds-to-carousel',
    name: 'نقل جميع طلقات المدفع من المنضدة الآلية الى الحامل الدوار - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
