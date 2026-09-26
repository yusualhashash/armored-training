import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_ONE_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_ONE_SCORES } from './scores'
import { PULL_UPS_CATEGORY_ONE_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'pull-ups-category-1',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية الأولى',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_ONE_CATEGORIES,
  standards: PULL_UPS_CATEGORY_ONE_STANDARDS,
  scores: PULL_UPS_CATEGORY_ONE_SCORES,
}

export const PULL_UPS_CATEGORY_ONE_DEFAULT = PULL_UPS_CATEGORY_ONE_CATEGORIES[0]
