import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS = `الطاقم في الدبابة ، فتحات الخروج مغلقة . السلاح واجهزة التسديد والانارة والاشارة محولة الى وضعية القتال .
يحسب الزمن من ايعاز « انتهى » حتى اصطفاف الطاقم خلف الدبابة على بعد حتى ٤ م .`

export const T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS = [
  { score: '1 د', rating: 'ممتاز' },
  { score: '1 د + 10 ثا', rating: 'جيد' },
  { score: '1 د + 25 ثا', rating: 'مقبول' },
]

export function createT62CombatToTravelWithStabilizerOffEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 60, level: 'excellent' },  // 1m
    { time: 70, level: 'good' },       // 1m 10s
    { time: 85, level: 'acceptable' }, // 1m 25s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-combat-to-travel-with-stabilizer-off',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
