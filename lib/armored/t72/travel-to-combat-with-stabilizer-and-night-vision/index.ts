import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS = `طاقم الدبابة على بعد حتى ٤ م . فتحات الدخول مغلقة . السلاح مثبت ومغلف . الاجهزة اللاسلكية مغلقة ، الهوائي في مقره ، القلنسوات في الدبابة .
يحسب الزمن من ايعاز « الى القتال » حتى يبلغ قائد الدبابة باللاسلكي « جاهز للقتال » .`

export const T72_TRAVEL_TO_COMBAT_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS = [
  { score: '2 د + 50 ثا', rating: 'ممتاز' },
  { score: '3 د + 20 ثا', rating: 'جيد' },
  { score: '3 د + 50 ثا', rating: 'مقبول' },
]

export function createT72TravelToCombatWithStabilizerAndNightVisionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 170, level: 'excellent' }, // 2m 50s
    { time: 200, level: 'good' },      // 3m 20s
    { time: 230, level: 'acceptable' },// 3m 50s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-travel-to-combat-with-stabilizer-and-night-vision',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار واجهزة الرؤية الليلية) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
