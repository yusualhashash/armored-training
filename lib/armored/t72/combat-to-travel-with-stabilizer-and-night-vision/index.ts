import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS = `الطاقم في الدبابة ، فتحات الخروج مغلقة . السلاح واجهزة التسديد والانارة والاشارة محولة الى وضعية القتال .
يحسب الزمن من ايعاز « انتهى » حتى اصطفاف الطاقم خلف الدبابة على بعد حتى ٤ م .`

export const T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS = [
  { score: '3 د + 10 ثا', rating: 'ممتاز' },
  { score: '3 د + 30 ثا', rating: 'جيد' },
  { score: '4 د + 10 ثا', rating: 'مقبول' },
]

export function createT72CombatToTravelWithStabilizerAndNightVisionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 190, level: 'excellent' }, // 3m 10s
    { time: 210, level: 'good' },      // 3m 30s
    { time: 250, level: 'acceptable' },// 4m 10s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-combat-to-travel-with-stabilizer-and-night-vision',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية القتال الى وضعية الرحيل (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
