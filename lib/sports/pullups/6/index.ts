import type { SportEvent } from '@/lib/types'
import { PULL_UPS_CATEGORY_SIX_CATEGORIES } from './categories'
import { PULL_UPS_CATEGORY_SIX_SCORES } from './scores'
import { PULL_UPS_CATEGORY_SIX_STANDARDS } from './standards'

export const PULL_UPS_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'pull-ups-category-6',
  name: 'تمرين سحب الجسم على الثابت - الفئة العمرية السادسة',
  description: 'اختبار عدد تكرارات تمرين سحب الجسم على الثابت خلال الوقت المحدد',
  maxScore: 100,
  categories: PULL_UPS_CATEGORY_SIX_CATEGORIES,
  standards: PULL_UPS_CATEGORY_SIX_STANDARDS,
  scores: PULL_UPS_CATEGORY_SIX_SCORES,
}

export const PULL_UPS_CATEGORY_SIX_DEFAULT = PULL_UPS_CATEGORY_SIX_CATEGORIES[0]
