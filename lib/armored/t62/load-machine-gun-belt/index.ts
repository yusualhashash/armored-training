import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS = `علبة الاشرطة مفتوحة ، شريط الرشاش فوق الباش قرب الدبابة ، آلة راكوفا لتعبئة شريط الرشاش موضوعة على الدبابة . يجب ان يكون الشريط المعبأ موضوعا في العلبة .غطاء العلبة مغلق . ينفذ المعدل من قبل سدين واحد .`

export const T62_LOAD_MACHINE_GUN_BELT_RATINGS = [
  { score: '7 د + 40 ثا', rating: 'ممتاز' },
  { score: '8 د + 20 ثا', rating: 'جيد' },
  { score: '9 د + 30 ثا', rating: 'مقبول' },
]

export function createT62LoadMachineGunBeltEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 7 * 60 + 40, level: 'excellent' },
    { time: 8 * 60 + 20, level: 'good' },
    { time: 9 * 60 + 30, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-load-machine-gun-belt',
    name: 'تعبئة شريط الرشاش (بالنسبة للرشاش الموازي مع المدفع (٢٥٠ طلقة تعبأ (يدويا))) - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
