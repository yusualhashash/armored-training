import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_INSTRUCTIONS = `الطاقم في الدبابة ، فتحات الخروج مغلقة . السلاح واجهزة التسديد والانارة والاشارة محولة الى وضعية القتال .
يحسب الزمن من ايعاز « انتهى » حتى اصطفاف الطاقم خلف الدبابة على بعد حتى ٤ م .`

export const T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_RATINGS = [
  { score: '2 د + 20 ثا', rating: 'ممتاز' },
  { score: '2 د + 30 ثا', rating: 'جيد' },
  { score: '2 د + 50 ثا', rating: 'مقبول' },
]

export function createT55CombatToTravelWithStabilizerEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 140, level: 'excellent' }, // 2m 20s
    { time: 150, level: 'good' },      // 2m 30s
    { time: 170, level: 'acceptable' },// 2m 50s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-combat-to-travel-with-stabilizer',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار) - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
