import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS = `• الرشاش منزوع . يجري الفك فوق الباش قرب الدبابة . الادوات جاهزة . المعدلات تنفذ من قبل سدين واحد من الطاقم .`

export const T55_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS = [
  { score: '28 ثا', rating: 'ممتاز' },
  { score: '30 ثا', rating: 'جيد' },
  { score: '34 ثا', rating: 'مقبول' },
]

export function createT55PartialDisassemblyAAMachineGunEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 28, level: 'excellent' },
    { time: 30, level: 'good' },
    { time: 34, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-partial-disassembly-aa-machine-gun',
    name: 'الفك الجزئي للرشاش (الرشاش م / ط) - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
