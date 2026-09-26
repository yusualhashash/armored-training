import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_THREE_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_THREE_SCORES } from './scores'
import { PULL_UPS_CATEGORY_THREE_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'pull-ups-category-3',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية الثالثة',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_THREE_CATEGORIES,
  standards: PULL_UPS_CATEGORY_THREE_STANDARDS,
  scores: PULL_UPS_CATEGORY_THREE_SCORES,
}

export const PULL_UPS_CATEGORY_THREE_DEFAULT = PULL_UPS_CATEGORY_THREE_CATEGORIES[0]
