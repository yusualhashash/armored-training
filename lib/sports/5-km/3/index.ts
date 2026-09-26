import type { SportEvent } from '@/lib/types'
import { RUN_5KM_CATEGORY_THREE_CATEGORIES } from './categories'
import { RUN_5KM_CATEGORY_THREE_SCORES } from './scores'
import { RUN_5KM_CATEGORY_THREE_STANDARDS } from './standards'

export const RUN_5KM_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'run-5km-category-3',
  name: '5 كم — الفئة العمرية الثالثة',
  description: 'سباق الجري لمسافة خمسة كيلومترات',
  maxScore: 95,
  categories: RUN_5KM_CATEGORY_THREE_CATEGORIES,
  standards: RUN_5KM_CATEGORY_THREE_STANDARDS,
  scores: RUN_5KM_CATEGORY_THREE_SCORES,
}

export const RUN_5KM_CATEGORY_THREE_DEFAULT = RUN_5KM_CATEGORY_THREE_CATEGORIES[0]
