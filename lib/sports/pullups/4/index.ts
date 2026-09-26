import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_FOUR_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_FOUR_SCORES } from './scores'
import { PULL_UPS_CATEGORY_FOUR_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'pull-ups-category-4',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية الرابعة',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_FOUR_CATEGORIES,
  standards: PULL_UPS_CATEGORY_FOUR_STANDARDS,
  scores: PULL_UPS_CATEGORY_FOUR_SCORES,
}

export const PULL_UPS_CATEGORY_FOUR_DEFAULT = PULL_UPS_CATEGORY_FOUR_CATEGORIES[0]
