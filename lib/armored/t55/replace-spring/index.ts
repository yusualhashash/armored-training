import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T55_REPLACE_SPRING_INSTRUCTIONS = `الطاقم في الدبابة . أسلحة الدبابة في وضعية الجاهزية القتالية ، المغلاق مغلق ، الطارق محرر .
الطارق ( القدّاح ) التبادلي ، النابض ومفتاح اخراج غطاء الطارق ضمن مغلف التوابع وقطع التبديل في مكانها المحدد .
الواقي في وضعية القتال . ينفذ العمل من قبل سدنة واحد . تسلم التوابع وقطع التبديل من قبل سدنة ثان .`

export const T55_REPLACE_SPRING_RATINGS = [
  { score: '14 ثا', rating: 'ممتاز' },
  { score: '16 ثا', rating: 'جيد' },
  { score: '19 ثا', rating: 'مقبول' },
]

export function createT55ReplaceSpringEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 14, level: 'excellent' },
    { time: 16, level: 'good' },
    { time: 19, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't55-replace-spring',
    name: 'تبديل النابض آلية طارق مغلاق المدفع - T55',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
