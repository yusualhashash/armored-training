import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_ONE_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_ONE_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_ONE_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'compound-strength-category-1',
  name: 'القوة المركبة — الفئة العمرية الأولى',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_ONE_CATEGORIES,
  standards: COMPOUND_STRENGTH_CATEGORY_ONE_STANDARDS,
  scores: COMPOUND_STRENGTH_CATEGORY_ONE_SCORES,
}

export const COMPOUND_STRENGTH_CATEGORY_ONE_DEFAULT = COMPOUND_STRENGTH_CATEGORY_ONE_CATEGORIES[0]
