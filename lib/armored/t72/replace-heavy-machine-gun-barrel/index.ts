import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS = `• الطاقم في الدبابة . الرشاش ملقم . السبطانة التبادلية موجودة في علبة الادوات والتوابع الاحتياطية . بعد تبديل السبطانة ، يوضع الرشاش في الوضعية القتالية . المعدلات تنفذ من قبل شخص واحد ، تقدم السبطانة الاحتياطية من قبل السدين الثاني .`

export const T72_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS = [
  { score: '1 د + 40 ثا', rating: 'ممتاز' },
  { score: '1 د + 50 ثا', rating: 'جيد' },
  { score: '2 د + 10 ثا', rating: 'مقبول' },
]

export function createT72ReplaceHeavyMachineGunBarrelEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 100, level: 'excellent' }, // 1m 40s
    { time: 110, level: 'good' },      // 1m 50s
    { time: 130, level: 'acceptable' }, // 2m 10s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-replace-heavy-machine-gun-barrel',
    name: 'تبديل سبطانة الرشاش (الرشاش كبير العيار (للآليات التي يركب فيها)) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
