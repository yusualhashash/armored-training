import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_FIVE_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_FIVE_SCORES } from './scores'
import { PULL_UPS_CATEGORY_FIVE_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'pull-ups-category-5',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية الخامسة',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_FIVE_CATEGORIES,
  standards: PULL_UPS_CATEGORY_FIVE_STANDARDS,
  scores: PULL_UPS_CATEGORY_FIVE_SCORES,
}

export const PULL_UPS_CATEGORY_FIVE_DEFAULT = PULL_UPS_CATEGORY_FIVE_CATEGORIES[0]
