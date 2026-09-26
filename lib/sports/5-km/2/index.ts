import type { SportEvent } from '@/lib/types'
import { RUN_5KM_CATEGORY_TWO_CATEGORIES } from './categories'
import { RUN_5KM_CATEGORY_TWO_SCORES } from './scores'
import { RUN_5KM_CATEGORY_TWO_STANDARDS } from './standards'

export const RUN_5KM_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'run-5km-category-2',
  name: '5 كم — الفئة العمرية الثانية',
  description: 'سباق الجري لمسافة خمسة كيلومترات',
  maxScore: 95,
  categories: RUN_5KM_CATEGORY_TWO_CATEGORIES,
  standards: RUN_5KM_CATEGORY_TWO_STANDARDS,
  scores: RUN_5KM_CATEGORY_TWO_SCORES,
}

export const RUN_5KM_CATEGORY_TWO_DEFAULT = RUN_5KM_CATEGORY_TWO_CATEGORIES[0]
