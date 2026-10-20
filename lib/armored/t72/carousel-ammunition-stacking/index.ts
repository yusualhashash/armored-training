import type { PerformanceStandard, SportEvent } from '@/lib/types'

export const T72_CAROUSEL_AMMUNITION_INSTRUCTIONS = `بعد تحميل الوحدة النارية . تحول اسلحة الدبابة الى وضعية الرحيل .
الطاقم يصطف خلف الدبابة .`

export const T72_CAROUSEL_AMMUNITION_RATINGS = [
  { score: '22 ثا', rating: 'ممتاز' },
  { score: '24 ثا', rating: 'جيد' },
  { score: '29 ثا', rating: 'مقبول' },
]

export function createT72CarouselAmmunitionEvent(): SportEvent {
  const standards: PerformanceStandard[] = [
    { time: 22, level: 'excellent' },
    { time: 24, level: 'good' },
    { time: 29, level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: 't72-carousel-ammunition-stacking',
    name: 'تنضيد الوحدة النارية في الدبابة (فقط في الحامل الدوار) - T72',
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
