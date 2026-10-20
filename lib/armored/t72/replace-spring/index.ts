import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_REPLACE_SPRING_INSTRUCTIONS = `الطاقم في الدبابة . أسلحة الدبابة في وضعية الجاهزية القتالية ، المغلاق مغلق ، الطارق محرر .
الطارق ( القدّاح ) التبادلي ، النابض ومفتاح اخراج غطاء الطارق ضمن مغلف التوابع وقطع التبديل في مكانها المحدد .
الواقي في وضعية القتال . ينفذ العمل من قبل سدنة واحد . تسلم التوابع وقطع التبديل من قبل سدنة ثان .`

export const T72_REPLACE_SPRING_RATINGS = [
  { score: '50 ثا', rating: 'ممتاز' },
  { score: '1 د', rating: 'جيد' },
  { score: '1 د + 20 ثا', rating: 'مقبول' },
]

export function createT72ReplaceSpringEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 50, level: 'excellent' },
    { time: 60, level: 'good' },
    { time: 80, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-replace-spring',
    name: 'تبديل النابض آلية طارق مغلاق المدفع - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
