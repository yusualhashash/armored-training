import type { SportEvent } from '@/lib/types'
import { RUN_1KM_CATEGORY_THREE_CATEGORIES } from './categories'
import { RUN_1KM_CATEGORY_THREE_SCORES } from './scores'
import { RUN_1KM_CATEGORY_THREE_STANDARDS } from './standards'

export const RUN_1KM_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'run-1km-category-3',
  name: '1 كم —   الفئة العمرية الثالثة',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_THREE_CATEGORIES,
  standards: RUN_1KM_CATEGORY_THREE_STANDARDS,
  scores: RUN_1KM_CATEGORY_THREE_SCORES,
}

export const RUN_1KM_CATEGORY_THREE_DEFAULT = RUN_1KM_CATEGORY_THREE_CATEGORIES[0]
