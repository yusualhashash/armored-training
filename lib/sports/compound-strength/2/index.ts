import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_TWO_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_TWO_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_TWO_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'compound-strength-category-2',
  name: 'القوة المركبة — الفئة العمرية الثانية',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_TWO_CATEGORIES,
  standards: COMPOUND_STRENGTH_CATEGORY_TWO_STANDARDS,
  scores: COMPOUND_STRENGTH_CATEGORY_TWO_SCORES,
}

export const COMPOUND_STRENGTH_CATEGORY_TWO_DEFAULT = COMPOUND_STRENGTH_CATEGORY_TWO_CATEGORIES[0]
