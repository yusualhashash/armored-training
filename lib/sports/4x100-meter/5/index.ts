import type { SportEvent } from '@/lib/types'
import { SPRINT_4X100M_CATEGORY_FIVE_CATEGORIES } from './categories'
import { SPRINT_4X100M_CATEGORY_FIVE_SCORES } from './scores'
import { SPRINT_4X100M_CATEGORY_FIVE_STANDARDS } from './standards'

export const SPRINT_4X100M_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'sprint-4x100m-category-5', 
  name: '4×100 متر — الفئة العمرية الخامسة', 
  description: 'سباق التتابع 4×100 متر', 
  maxScore: 100,
  categories: SPRINT_4X100M_CATEGORY_FIVE_CATEGORIES, 
  standards: SPRINT_4X100M_CATEGORY_FIVE_STANDARDS, 
  scores: SPRINT_4X100M_CATEGORY_FIVE_SCORES,
}

export const SPRINT_4X100M_CATEGORY_FIVE_DEFAULT = SPRINT_4X100M_CATEGORY_FIVE_CATEGORIES[0]
