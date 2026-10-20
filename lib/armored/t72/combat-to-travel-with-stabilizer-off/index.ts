import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS = `الطاقم في الدبابة ، فتحات الخروج مغلقة . السلاح واجهزة التسديد والانارة والاشارة محولة الى وضعية القتال .
يحسب الزمن من ايعاز « انتهى » حتى اصطفاف الطاقم خلف الدبابة على بعد حتى ٤ م .`

export const T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS = [
  { score: '2 د + 10 ثا', rating: 'ممتاز' },
  { score: '2 د + 20 ثا', rating: 'جيد' },
  { score: '2 د + 40 ثا', rating: 'مقبول' },
]

export function createT72CombatToTravelWithStabilizerOffEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 130, level: 'excellent' },  // 2m 10s
    { time: 140, level: 'good' },       // 2m 20s
    { time: 160, level: 'acceptable' }, // 2m 40s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-combat-to-travel-with-stabilizer-off',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع اطفاء جهاز الاستقرار) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
