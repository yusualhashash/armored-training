import type { SportEvent } from '@/lib/types'
import { SPRINT_4X100M_CATEGORY_FOUR_CATEGORIES } from './categories'
import { SPRINT_4X100M_CATEGORY_FOUR_SCORES } from './scores'
import { SPRINT_4X100M_CATEGORY_FOUR_STANDARDS } from './standards'

export const SPRINT_4X100M_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'sprint-4x100m-category-4', 
  name: '4×100 متر — الفئة العمرية الرابعة', 
  description: 'سباق التتابع 4×100 متر', 
  maxScore: 100,
  categories: SPRINT_4X100M_CATEGORY_FOUR_CATEGORIES, 
  standards: SPRINT_4X100M_CATEGORY_FOUR_STANDARDS, 
  scores: SPRINT_4X100M_CATEGORY_FOUR_SCORES,
}

export const SPRINT_4X100M_CATEGORY_FOUR_DEFAULT = SPRINT_4X100M_CATEGORY_FOUR_CATEGORIES[0]
