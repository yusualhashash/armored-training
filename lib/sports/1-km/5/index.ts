import type { SportEvent } from '@/lib/types'
import { RUN_1KM_CATEGORY_FIVE_CATEGORIES } from './categories'
import { RUN_1KM_CATEGORY_FIVE_SCORES } from './scores'
import { RUN_1KM_CATEGORY_FIVE_STANDARDS } from './standards'

export const RUN_1KM_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'run-1km-category-5',
  name: '1 كم — الفئة العمرية الخامسة',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_FIVE_CATEGORIES,
  standards: RUN_1KM_CATEGORY_FIVE_STANDARDS,
  scores: RUN_1KM_CATEGORY_FIVE_SCORES,
}

export const RUN_1KM_CATEGORY_FIVE_DEFAULT = RUN_1KM_CATEGORY_FIVE_CATEGORIES[0]
