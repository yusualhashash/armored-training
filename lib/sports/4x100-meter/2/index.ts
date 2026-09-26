import type { SportEvent } from '@/lib/types'
import { SPRINT_4X100M_CATEGORY_TWO_CATEGORIES } from './categories'
import { SPRINT_4X100M_CATEGORY_TWO_SCORES } from './scores'
import { SPRINT_4X100M_CATEGORY_TWO_STANDARDS } from './standards'

export const SPRINT_4X100M_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'sprint-4x100m-category-2',
  name: '4×100 متر — الفئة العمرية الثانية', 
  description: 'سباق التتابع 4×100 متر', 
  maxScore: 100,
  categories: SPRINT_4X100M_CATEGORY_TWO_CATEGORIES, 
  standards: SPRINT_4X100M_CATEGORY_TWO_STANDARDS, 
  scores: SPRINT_4X100M_CATEGORY_TWO_SCORES,
}

export const SPRINT_4X100M_CATEGORY_TWO_DEFAULT = SPRINT_4X100M_CATEGORY_TWO_CATEGORIES[0]
