import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS = `• الرشاش منزوع . يجري الفك فوق الباش قرب الدبابة . الادوات جاهزة . المعدلات تنفذ من قبل سدين واحد من الطاقم .`

export const T62_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS = [
  { score: '16 ثا', rating: 'ممتاز' },
  { score: '18 ثا', rating: 'جيد' },
  { score: '21 ثا', rating: 'مقبول' },
]

export function createT62PartialDisassemblyMachineGunEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 16, level: 'excellent' },
    { time: 18, level: 'good' },
    { time: 21, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-partial-disassembly-machine-gun',
    name: 'الفك الجزئي للرشاش (الرشاش الموازي للمدفع) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
