import type { SportEvent } from '@/lib/types'
import { RUN_2KM_CATEGORY_ONE_SCORES } from './scores'
import { RUN_2KM_CATEGORY_ONE_STANDARDS } from './standards'
import { RUN_2KM_CATEGORY_ONE_CATEGORIES } from './categories'

export const RUN_2KM_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'run-2km-category-1',
  name: '2 كم — الفئة العمرية الأولى',
  description: 'سباق الجري لمسافة كيلومترين اثنين',
  maxScore: 100,
  categories: RUN_2KM_CATEGORY_ONE_CATEGORIES,
  standards: RUN_2KM_CATEGORY_ONE_STANDARDS,
  scores: RUN_2KM_CATEGORY_ONE_SCORES,
}

export const RUN_2KM_CATEGORY_ONE_DEFAULT = RUN_2KM_CATEGORY_ONE_CATEGORIES[0]
