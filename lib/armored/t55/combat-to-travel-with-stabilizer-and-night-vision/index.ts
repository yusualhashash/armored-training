import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS = `الطاقم في الدبابة ، فتحات الخروج مغلقة . السلاح واجهزة التسديد والانارة والاشارة محولة الى وضعية القتال .
يحسب الزمن من ايعاز « انتهى » حتى اصطفاف الطاقم خلف الدبابة على بعد حتى ٤ م .`

export const T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS = [
  { score: '1 د + 50 ثا', rating: 'ممتاز' },
  { score: '2 د', rating: 'جيد' },
  { score: '2 د + 25 ثا', rating: 'مقبول' },
]

export function createT55CombatToTravelWithStabilizerAndNightVisionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 110, level: 'excellent' }, // 1m 50s
    { time: 120, level: 'good' },      // 2m
    { time: 145, level: 'acceptable' },// 2m 25s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-combat-to-travel-with-stabilizer-and-night-vision',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية) - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
