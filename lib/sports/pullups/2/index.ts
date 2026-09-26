import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_TWO_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_TWO_SCORES } from './scores'
import { PULL_UPS_CATEGORY_TWO_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'pull-ups-category-2',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية الثانية',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_TWO_CATEGORIES,
  standards: PULL_UPS_CATEGORY_TWO_STANDARDS,
  scores: PULL_UPS_CATEGORY_TWO_SCORES,
}

export const PULL_UPS_CATEGORY_TWO_DEFAULT = PULL_UPS_CATEGORY_TWO_CATEGORIES[0]
