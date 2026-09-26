import type { SportEvent } from '@/lib/types'
import { SPRINT_4X100M_CATEGORY_THREE_CATEGORIES } from './categories'
import { SPRINT_4X100M_CATEGORY_THREE_SCORES } from './scores'
import { SPRINT_4X100M_CATEGORY_THREE_STANDARDS } from './standards'

export const SPRINT_4X100M_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'sprint-4x100m-category-3', 
  name: '4×100 متر — الفئة العمرية الثالثة', 
  description: 'سباق التتابع 4×100 متر', 
  maxScore: 100,
  categories: SPRINT_4X100M_CATEGORY_THREE_CATEGORIES, 
  standards: SPRINT_4X100M_CATEGORY_THREE_STANDARDS, 
  scores: SPRINT_4X100M_CATEGORY_THREE_SCORES,
}

export const SPRINT_4X100M_CATEGORY_THREE_DEFAULT = SPRINT_4X100M_CATEGORY_THREE_CATEGORIES[0]
