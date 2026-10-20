import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_REPLACE_FIRING_PIN_INSTRUCTIONS = `الطاقم في الدبابة . أسلحة الدبابة في وضعية الجاهزية القتالية ، المغلاق مغلق ، الطارق محرر .
الطارق ( القدّاح ) التبادلي ، النابض ومفتاح اخراج غطاء الطارق ضمن مغلف التوابع وقطع التبديل في مكانها المحدد .
الواقي في وضعية القتال . ينفذ العمل من قبل سدنة واحد . تسلم التوابع وقطع التبديل من قبل سدنة ثان .`

export const T72_REPLACE_FIRING_PIN_RATINGS = [
  { score: '1 د + 12 ثا', rating: 'ممتاز' },
  { score: '1 د + 20 ثا', rating: 'جيد' },
  { score: '1 د + 33 ثا', rating: 'مقبول' },
]

export function createT72ReplaceFiringPinEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 72, level: 'excellent' },  // 1m 12s
    { time: 80, level: 'good' },       // 1m 20s
    { time: 93, level: 'acceptable' }, // 1m 33s
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-replace-firing-pin',
    name: 'تبديل الطارق (القدّاح) آلية طارق مغلاق المدفع - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
