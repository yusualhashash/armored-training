import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS = `علبة الاشرطة مفتوحة ، شريط الرشاش فوق الباش قرب الدبابة ، آلة راكوفا لتعبئة شريط الرشاش موضوعة على الدبابة . يجب ان يكون الشريط المعبأ موضوعا في العلبة .غطاء العلبة مغلق . ينفذ المعدل من قبل سدين واحد .`

export const T62_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS = [
  { score: '5 د + 30 ثا', rating: 'ممتاز' },
  { score: '6 د + 10 ثا', rating: 'جيد' },
  { score: '7 د + 20 ثا', rating: 'مقبول' },
]

export function createT62LoadMachineGunBeltRakovaEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 5 * 60 + 30, level: 'excellent' },
    { time: 6 * 60 + 10, level: 'good' },
    { time: 7 * 60 + 20, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-load-machine-gun-belt-rakova',
    name: 'تعبئة شريط الرشاش (بالنسبة للرشاش الموازي مع المدفع (٢٥٠ طلقة تعبأ (بواسطة آلة راكوفا))) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
