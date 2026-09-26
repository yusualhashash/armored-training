import type { SportEvent } from '@/lib/types'
import { RUN_3KM_CATEGORY_THREE_CATEGORIES } from './categories'
import { RUN_3KM_CATEGORY_THREE_SCORES } from './scores'
import { RUN_3KM_CATEGORY_THREE_STANDARDS } from './standards'

export const RUN_3KM_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'run-3km-category-3',
  name: '3 كم — الفئة العمرية الثالثة',
  description: 'سباق الجري لمسافة ثلاثة كيلومترات',
  maxScore: 100,
  categories: RUN_3KM_CATEGORY_THREE_CATEGORIES,
  standards: RUN_3KM_CATEGORY_THREE_STANDARDS,
  scores: RUN_3KM_CATEGORY_THREE_SCORES,
}

export const RUN_3KM_CATEGORY_THREE_DEFAULT = RUN_3KM_CATEGORY_THREE_CATEGORIES[0]
