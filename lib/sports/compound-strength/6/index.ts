import type { SportEvent } from '@/lib/types'
import { COMPOUND_STRENGTH_CATEGORY_SIX_CATEGORIES } from './categories'
import { COMPOUND_STRENGTH_CATEGORY_SIX_SCORES } from './scores'
import { COMPOUND_STRENGTH_CATEGORY_SIX_STANDARDS } from './standards'

export const COMPOUND_STRENGTH_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'compound-strength-category-6',
  name: 'القوة المركبة — الفئة العمرية السادسة',
  description: 'اختبار عدد تكرارات تمرين القوة المركبة خلال الوقت المحدد',
  maxScore: 100,
  categories: COMPOUND_STRENGTH_CATEGORY_SIX_CATEGORIES,
  scores: COMPOUND_STRENGTH_CATEGORY_SIX_SCORES,
  standards: COMPOUND_STRENGTH_CATEGORY_SIX_STANDARDS,
}

export const COMPOUND_STRENGTH_CATEGORY_SIX_DEFAULT = COMPOUND_STRENGTH_CATEGORY_SIX_CATEGORIES[0]
