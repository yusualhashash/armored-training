import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS = `الرشاش مفكوك فوق الباش عند الدبابة . الادوات جاهزة . يجري التركيب على الباش . المعدلات تنفذ من قبل سدين واحد .`

export const T62_ASSEMBLY_MACHINE_GUN_RATINGS = [
  { score: '24 ثا', rating: 'ممتاز' },
  { score: '28 ثا', rating: 'جيد' },
  { score: '35 ثا', rating: 'مقبول' },
]

export function createT62AssemblyMachineGunEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 24, level: 'excellent' },
    { time: 28, level: 'good' },
    { time: 35, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-assembly-machine-gun',
    name: 'تركيب الرشاش بعد الفك الجزئي (الرشاش الموازي للمدفع) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
