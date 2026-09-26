import type { SportEvent } from '@/lib/types'
import { RUN_2KM_CATEGORY_TWO_CATEGORIES } from './categories'
import { RUN_2KM_CATEGORY_TWO_SCORES } from './scores'
import { RUN_2KM_CATEGORY_TWO_STANDARDS } from './standards'

export const RUN_2KM_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'run-2km-category-2',
  name: '2 كم — الفئة العمرية الثانية',
  description: 'سباق الجري لمسافة كيلومترين اثنين',
  maxScore: 100,
  categories: RUN_2KM_CATEGORY_TWO_CATEGORIES,
  standards: RUN_2KM_CATEGORY_TWO_STANDARDS,
  scores: RUN_2KM_CATEGORY_TWO_SCORES,
}

export const RUN_2KM_CATEGORY_TWO_DEFAULT = RUN_2KM_CATEGORY_TWO_CATEGORIES[0]
