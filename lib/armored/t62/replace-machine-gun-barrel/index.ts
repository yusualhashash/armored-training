import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS = `• الطاقم في الدبابة . الرشاش ملقم . السبطانة التبادلية موجودة في علبة الادوات والتوابع الاحتياطية . بعد تبديل السبطانة ، يوضع الرشاش في الوضعية القتالية . المعدلات تنفذ من قبل شخص واحد ، تقدم السبطانة الاحتياطية من قبل السدين الثاني .`

export const T62_REPLACE_MACHINE_GUN_BARREL_RATINGS = [
  { score: '1 د + 30 ثا', rating: 'ممتاز' },
  { score: '1 د + 40 ثا', rating: 'جيد' },
  { score: '2 د', rating: 'مقبول' },
]

export function createT62ReplaceMachineGunBarrelEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 90, level: 'excellent' },  // 1m 30s
    { time: 100, level: 'good' },      // 1m 40s
    { time: 120, level: 'acceptable' }, // 2m
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-replace-machine-gun-barrel',
    name: 'تبديل سبطانة الرشاش (الرشاش الموازي للمدفع) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
