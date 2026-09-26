import type { SportEvent } from '@/lib/types'
import { RUN_3KM_CATEGORY_ONE_CATEGORIES } from './categories'
import { RUN_3KM_CATEGORY_ONE_SCORES } from './scores'
import { RUN_3KM_CATEGORY_ONE_STANDARDS } from './standards'

export const RUN_3KM_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'run-3km-category-1',
  name: '3 كم — الفئة العمرية الأولى',
  description: 'سباق الجري لمسافة ثلاثة كيلومترات',
  maxScore: 100,
  categories: RUN_3KM_CATEGORY_ONE_CATEGORIES,
  standards: RUN_3KM_CATEGORY_ONE_STANDARDS,
  scores: RUN_3KM_CATEGORY_ONE_SCORES,
}

export const RUN_3KM_CATEGORY_ONE_DEFAULT = RUN_3KM_CATEGORY_ONE_CATEGORIES[0]
