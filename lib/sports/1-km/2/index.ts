import type { SportEvent } from '@/lib/types'
import { RUN_1KM_CATEGORY_TWO_CATEGORIES } from './categories'
import { RUN_1KM_CATEGORY_TWO_SCORES } from './scores'
import { RUN_1KM_CATEGORY_TWO_STANDARDS } from './standards'

export const RUN_1KM_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'run-1km-category-2',
  name: '1 كم — الفئة العمرية الثانية',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_TWO_CATEGORIES,
  standards: RUN_1KM_CATEGORY_TWO_STANDARDS,
  scores: RUN_1KM_CATEGORY_TWO_SCORES,
}

export const RUN_1KM_CATEGORY_TWO_DEFAULT = RUN_1KM_CATEGORY_TWO_CATEGORIES[0]
