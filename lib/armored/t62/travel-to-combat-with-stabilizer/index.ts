import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_TRAVEL_TO_COMBAT_WITH_STABILIZER_INSTRUCTIONS = `طاقم الدبابة على بعد حتى ٤ م . فتحات الدخول مغلقة . السلاح مثبت ومغلف . الاجهزة اللاسلكية مغلقة ، الهوائي في مقره ، القلنسوات في الدبابة .
يحسب الزمن من ايعاز « الى القتال » حتى يبلغ قائد الدبابة باللاسلكي « جاهز للقتال » .`

export const T62_TRAVEL_TO_COMBAT_WITH_STABILIZER_RATINGS = [
  { score: '2 د', rating: 'ممتاز' },
  { score: '2 د + 10 ثا', rating: 'جيد' },
  { score: '2 د + 30 ثا', rating: 'مقبول' },
]

export function createT62TravelToCombatWithStabilizerEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 120, level: 'excellent' }, // 2m
    { time: 130, level: 'good' },      // 2m 10s
    { time: 150, level: 'acceptable' },// 2m 30s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-travel-to-combat-with-stabilizer',
    name: 'تحويل حجرة القتال واسلحة الدبابة من وضعية الرحيل الى وضعية القتال (مع تشغيل جهاز الاستقرار) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
