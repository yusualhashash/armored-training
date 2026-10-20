import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T62_REPLACE_FIRING_PIN_INSTRUCTIONS = `الطاقم في الدبابة . أسلحة الدبابة في وضعية الجاهزية القتالية ، المغلاق مغلق ، الطارق محرر .
الطارق ( القدّاح ) التبادلي ، النابض ومفتاح اخراج غطاء الطارق ضمن مغلف التوابع وقطع التبديل في مكانها المحدد .
الواقي في وضعية القتال . ينفذ العمل من قبل سدنة واحد . تسلم التوابع وقطع التبديل من قبل سدنة ثان .`

export const T62_REPLACE_FIRING_PIN_RATINGS = [
  { score: '25 ثا', rating: 'ممتاز' },
  { score: '28 ثا', rating: 'جيد' },
  { score: '33 ثا', rating: 'مقبول' },
]

export function createT62ReplaceFiringPinEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 25, level: 'excellent' },
    { time: 28, level: 'good' },
    { time: 33, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't62-replace-firing-pin',
    name: 'تبديل الطارق (القدّاح) آلية طارق مغلاق المدفع - T62',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
