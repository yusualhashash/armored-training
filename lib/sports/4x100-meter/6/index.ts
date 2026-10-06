import type { SportEvent } from '@/lib/types'
import { SPRINT_4X100M_CATEGORY_SIX_CATEGORIES } from './categories'
import { SPRINT_4X100M_CATEGORY_SIX_SCORES } from './scores'
import { SPRINT_4X100M_CATEGORY_SIX_STANDARDS } from './standards'

export const SPRINT_4X100M_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'sprint-4x100m-category-6',
  name: '4×100 متر — الفئة العمرية السادسة',
  description: 'سباق التتابع 4×100 متر',
  maxScore: 100,
  categories: SPRINT_4X100M_CATEGORY_SIX_CATEGORIES,
  standards: SPRINT_4X100M_CATEGORY_SIX_STANDARDS,
  scores: SPRINT_4X100M_CATEGORY_SIX_SCORES,
}

export const SPRINT_4X100M_CATEGORY_SIX_DEFAULT = SPRINT_4X100M_CATEGORY_SIX_CATEGORIES[0]
