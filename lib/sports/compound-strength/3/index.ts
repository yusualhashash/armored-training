import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_THREE_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_THREE_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_THREE_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'compound-strength-category-3',
  name: 'القوة المركبة — الفئة العمرية الثالثة',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_THREE_CATEGORIES,
  scores: COMPOUND_STRENGTH_CATEGORY_THREE_SCORES,
  standards: COMPOUND_STRENGTH_CATEGORY_THREE_STANDARDS,
}

export const COMPOUND_STRENGTH_CATEGORY_THREE_DEFAULT = COMPOUND_STRENGTH_CATEGORY_THREE_CATEGORIES[0]