import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS = `باستعمال آليتي التدوير بالارتفاع والاتجاه ( كتلة التحكم ) . يصوب المتدرب علامة التسديد الى النقطة على التتابع . يجب ان لا يزيد التدرج في الخط عن ٣ مم . يكون الظرف _ اللولب على بعد ١٠ – ١٥ م عن الدبابة .`

export const T72_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS = [
  { score: '1 د + 50 ثا', rating: 'ممتاز' },
  { score: '2 د', rating: 'جيد' },
  { score: '2 د + 25 ثا', rating: 'مقبول' },
]

export function createT72DrawEnvelopeHelixElevationDirectionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 1 * 60 + 50, level: 'excellent' },
    { time: 2 * 60, level: 'good' },
    { time: 2 * 60 + 25, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-draw-envelope-helix-elevation-direction',
    name: 'رسم الظرف - اللولب (بواسطة آليتي التدوير بالارتفاع والاتجاه) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
