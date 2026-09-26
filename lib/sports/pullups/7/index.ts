import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_SEVEN_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_SEVEN_SCORES } from './scores'
import { PULL_UPS_CATEGORY_SEVEN_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_SEVEN_EVENT: SportEvent = {
  id: 'pull-ups-category-7',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية السابعة',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_SEVEN_CATEGORIES,
  standards: PULL_UPS_CATEGORY_SEVEN_STANDARDS,
  scores: PULL_UPS_CATEGORY_SEVEN_SCORES,
}

export const PULL_UPS_CATEGORY_SEVEN_DEFAULT = PULL_UPS_CATEGORY_SEVEN_CATEGORIES[0]
