import type { SportEvent } from '@/lib/types'
import { RUN_2KM_CATEGORY_THREE_CATEGORIES } from './categories'
import { RUN_2KM_CATEGORY_THREE_SCORES } from './scores'
import { RUN_2KM_CATEGORY_THREE_STANDARDS } from './standards'

export const RUN_2KM_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'run-2km-category-3',
  name: '2 كم — الفئة العمرية الثالثة',
  description: 'سباق الجري لمسافة كيلومترين اثنين',
  maxScore: 100,
  categories: RUN_2KM_CATEGORY_THREE_CATEGORIES,
  standards: RUN_2KM_CATEGORY_THREE_STANDARDS,
  scores: RUN_2KM_CATEGORY_THREE_SCORES,
}

export const RUN_2KM_CATEGORY_THREE_DEFAULT = RUN_2KM_CATEGORY_THREE_CATEGORIES[0]
