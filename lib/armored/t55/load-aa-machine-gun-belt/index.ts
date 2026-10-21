import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_LOAD_AA_MACHINE_GUN_BELT_INSTRUCTIONS = `علبة الاشرطة مفتوحة ، شريط الرشاش فوق الباش قرب الدبابة ، آلة راكوفا لتعبئة شريط الرشاش موضوعة على الدبابة . يجب ان يكون الشريط المعبأ موضوعا في العلبة .غطاء العلبة مغلق . ينفذ المعدل من قبل سدين واحد .`

export const T55_LOAD_AA_MACHINE_GUN_BELT_RATINGS = [
  { score: '1 د + 40 ثا', rating: 'ممتاز' },
  { score: '1 د + 50 ثا', rating: 'جيد' },
  { score: '2 د + 15 ثا', rating: 'مقبول' },
]

export function createT55LoadAAMachineGunBeltEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 1 * 60 + 40, level: 'excellent' },
    { time: 1 * 60 + 50, level: 'good' },
    { time: 2 * 60 + 15, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-load-aa-machine-gun-belt',
    name: 'تعبئة شريط الرشاش (بالنسبة للرشاش م/ط ٥٠ طلقة ( عدا الدبابة ت ٧٢ – ٦٠ طلقة ) تعبأ يدويا) - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
