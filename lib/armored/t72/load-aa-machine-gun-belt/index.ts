import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_LOAD_AA_MACHINE_GUN_BELT_INSTRUCTIONS = `علبة الاشرطة مفتوحة ، شريط الرشاش فوق الباش قرب الدبابة ، آلة راكوفا لتعبئة شريط الرشاش موضوعة على الدبابة . يجب ان يكون الشريط المعبأ موضوعا في العلبة .غطاء العلبة مغلق . ينفذ المعدل من قبل سدين واحد .`

export const T72_LOAD_AA_MACHINE_GUN_BELT_RATINGS = [
  { score: '2 د + 50 ثا', rating: 'ممتاز' },
  { score: '3 د', rating: 'جيد' },
  { score: '3 د + 40 ثا', rating: 'مقبول' },
]

export function createT72LoadAAMachineGunBeltEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 2 * 60 + 50, level: 'excellent' },
    { time: 3 * 60, level: 'good' },
    { time: 3 * 60 + 40, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-load-aa-machine-gun-belt',
    name: 'تعبئة شريط الرشاش (بالنسبة للرشاش م/ط ٥٠ طلقة ( عدا الدبابة ت ٧٢ – ٦٠ طلقة ) تعبأ يدويا) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
