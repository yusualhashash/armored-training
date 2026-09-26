import type { SportEvent } from '@/lib/types'
import { RUN_2KM_CATEGORY_FOUR_CATEGORIES } from './categories'
import { RUN_2KM_CATEGORY_FOUR_SCORES } from './scores'
import { RUN_2KM_CATEGORY_FOUR_STANDARDS } from './standards'

export const RUN_2KM_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'run-2km-category-4',
  name: '2 كم — الفئة العمرية الرابعة',
  description: 'سباق الجري لمسافة كيلومترين اثنين',
  maxScore: 100,
  categories: RUN_2KM_CATEGORY_FOUR_CATEGORIES,
  standards: RUN_2KM_CATEGORY_FOUR_STANDARDS,
  scores: RUN_2KM_CATEGORY_FOUR_SCORES,
}

export const RUN_2KM_CATEGORY_FOUR_DEFAULT = RUN_2KM_CATEGORY_FOUR_CATEGORIES[0]
