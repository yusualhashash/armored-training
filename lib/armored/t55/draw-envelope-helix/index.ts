import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_DRAW_ENVELOPE_HELIX_INSTRUCTIONS = `باستعمال آليتي التدوير بالارتفاع والاتجاه ( كتلة التحكم ) . يصوب المتدرب علامة التسديد الى النقطة على التتابع . يجب ان لا يزيد التدرج في الخط عن ٣ مم . يكون الظرف _ اللولب على بعد ١٠ – ١٥ م عن الدبابة .`

export const T55_DRAW_ENVELOPE_HELIX_RATINGS = [
  { score: '1 د + 40 ثا', rating: 'ممتاز' },
  { score: '1 د + 50 ثا', rating: 'جيد' },
  { score: '2 د + 12 ثا', rating: 'مقبول' },
]

export function createT55DrawEnvelopeHelixEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 1 * 60 + 40, level: 'excellent' },
    { time: 1 * 60 + 50, level: 'good' },
    { time: 2 * 60 + 12, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-draw-envelope-helix',
    name: 'رسم الظرف - اللولب (بواسطة كتلة التحكم) - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
