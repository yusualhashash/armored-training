import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_FIVE_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_FIVE_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_FIVE_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'compound-strength-category-5',
  name: 'القوة المركبة — الفئة العمرية الخامسة',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_FIVE_CATEGORIES,
  scores: COMPOUND_STRENGTH_CATEGORY_FIVE_SCORES,
  standards: COMPOUND_STRENGTH_CATEGORY_FIVE_STANDARDS,
}

export const COMPOUND_STRENGTH_CATEGORY_FIVE_DEFAULT = COMPOUND_STRENGTH_CATEGORY_FIVE_CATEGORIES[0]