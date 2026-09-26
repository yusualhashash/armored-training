import type { SportEvent } from '@/lib/types'
import { RUN_5KM_CATEGORY_ONE_CATEGORIES } from './categories'
import { RUN_5KM_CATEGORY_ONE_SCORES } from './scores'
import { RUN_5KM_CATEGORY_ONE_STANDARDS } from './standards'

export const RUN_5KM_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'run-5km-category-1',
  name: '5 كم — الفئة العمرية الأولى',
  description: 'سباق الجري لمسافة خمسة كيلومترات',
  maxScore: 95,
  categories: RUN_5KM_CATEGORY_ONE_CATEGORIES,
  standards: RUN_5KM_CATEGORY_ONE_STANDARDS,
  scores: RUN_5KM_CATEGORY_ONE_SCORES,
}

export const RUN_5KM_CATEGORY_ONE_DEFAULT = RUN_5KM_CATEGORY_ONE_CATEGORIES[0]
