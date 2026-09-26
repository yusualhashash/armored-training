import type { SportEvent } from '@/lib/types'
import { RUN_3KM_CATEGORY_TWO_CATEGORIES } from './categories'
import { RUN_3KM_CATEGORY_TWO_SCORES } from './scores'
import { RUN_3KM_CATEGORY_TWO_STANDARDS } from './standards'

export const RUN_3KM_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'run-3km-category-2',
  name: '3 كم — الفئة العمرية الثانية',
  description: 'سباق الجري لمسافة ثلاثة كيلومترات',
  maxScore: 100,
  categories: RUN_3KM_CATEGORY_TWO_CATEGORIES,
  standards: RUN_3KM_CATEGORY_TWO_STANDARDS,
  scores: RUN_3KM_CATEGORY_TWO_SCORES,
}

export const RUN_3KM_CATEGORY_TWO_DEFAULT = RUN_3KM_CATEGORY_TWO_CATEGORIES[0]
