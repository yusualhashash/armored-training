import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_TRAVEL_TO_COMBAT_INSTRUCTIONS = `طاقم الدبابة على بعد حتى ٤ م . فتحات الدخول مغلقة . السلاح مثبت ومغلف . الاجهزة اللاسلكية مغلقة ، الهوائي في مقره ، القلنسوات في الدبابة .
يحسب الزمن من ايعاز « الى القتال » حتى يبلغ قائد الدبابة باللاسلكي « جاهز للقتال » .`

export const T72_TRAVEL_TO_COMBAT_RATINGS = [
  { score: '1 د + 10 ثا', rating: 'ممتاز' },
  { score: '1 د + 20 ثا', rating: 'جيد' },
  { score: '1 د + 35 ثا', rating: 'مقبول' },
]

export function createT72TravelToCombatEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 70, level: 'excellent' },   // 1m 10s
    { time: 80, level: 'good' },        // 1m 20s
    { time: 95, level: 'acceptable' },  // 1m 35s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-travel-to-combat-without-stabilizer',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (دون تشغيل جهاز الاستقرار) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
