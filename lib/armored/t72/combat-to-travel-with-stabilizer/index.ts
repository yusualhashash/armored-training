import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS = `الطاقم في الدبابة ، فتحات الخروج مغلقة . السلاح واجهزة التسديد والانارة والاشارة محولة الى وضعية القتال .
يحسب الزمن من ايعاز « انتهى » حتى اصطفاف الطاقم خلف الدبابة على بعد حتى ٤ م .`

export const T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS = [
  { score: '2 د + 30 ثا', rating: 'ممتاز' },
  { score: '2 د + 45 ثا', rating: 'جيد' },
  { score: '3 د', rating: 'مقبول' },
]

export function createT72CombatToTravelWithStabilizerEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 150, level: 'excellent' }, // 2m 30s
    { time: 165, level: 'good' },      // 2m 45s
    { time: 180, level: 'acceptable' },// 3m
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-combat-to-travel-with-stabilizer',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
