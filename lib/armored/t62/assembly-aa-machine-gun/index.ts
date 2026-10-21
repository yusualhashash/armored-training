import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS = `الرشاش مفكوك فوق الباش عند الدبابة . الادوات جاهزة . يجري التركيب على الباش . المعدلات تنفذ من قبل سدين واحد .`

export const T62_ASSEMBLY_AA_MACHINE_GUN_RATINGS = [
  { score: '46 ثا', rating: 'ممتاز' },
  { score: '50 ثا', rating: 'جيد' },
  { score: '1 د', rating: 'مقبول' },
]

export function createT62AssemblyAAMachineGunEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 46, level: 'excellent' },
    { time: 50, level: 'good' },
    { time: 60, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-assembly-aa-machine-gun',
    name: 'تركيب الرشاش بعد الفك الجزئي (الرشاش م / ط) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
