import type { SportEvent } from '@/lib/types'
import { RUN_1KM_CATEGORY_FOUR_CATEGORIES } from './categories'
import { RUN_1KM_CATEGORY_FOUR_SCORES } from './scores'
import { RUN_1KM_CATEGORY_FOUR_STANDARDS } from './standards'

export const RUN_1KM_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'run-1km-category-4',
  name: '1 كم — الفئة  العمرية الرابعة',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_FOUR_CATEGORIES,
  standards: RUN_1KM_CATEGORY_FOUR_STANDARDS,
  scores: RUN_1KM_CATEGORY_FOUR_SCORES,
}

export const RUN_1KM_CATEGORY_FOUR_DEFAULT = RUN_1KM_CATEGORY_FOUR_CATEGORIES[0]
