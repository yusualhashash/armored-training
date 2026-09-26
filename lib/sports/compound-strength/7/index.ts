import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_SEVEN_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_SEVEN_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_SEVEN_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_SEVEN_EVENT: SportEvent = {
  id: 'compound-strength-category-7',
  name: 'القوة المركبة — الفئة العمرية السابعة',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_SEVEN_CATEGORIES,
  scores: COMPOUND_STRENGTH_CATEGORY_SEVEN_SCORES,
  standards: COMPOUND_STRENGTH_CATEGORY_SEVEN_STANDARDS,
}

export const COMPOUND_STRENGTH_CATEGORY_SEVEN_DEFAULT = COMPOUND_STRENGTH_CATEGORY_SEVEN_CATEGORIES[0]
