import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_FOUR_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_FOUR_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_FOUR_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'compound-strength-category-4',
  name: 'القوة المركبة — الفئة العمرية الرابعة',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_FOUR_CATEGORIES,
  scores: COMPOUND_STRENGTH_CATEGORY_FOUR_SCORES,
  standards: COMPOUND_STRENGTH_CATEGORY_FOUR_STANDARDS,
}

export const COMPOUND_STRENGTH_CATEGORY_FOUR_DEFAULT = COMPOUND_STRENGTH_CATEGORY_FOUR_CATEGORIES[0]
