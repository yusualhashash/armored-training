import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_ONE_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_ONE_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_ONE_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'push-ups-category-1',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_ONE_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_ONE_STANDARDS,
  scores: PUSH_UPS_CATEGORY_ONE_SCORES,
}

export const PUSH_UPS_CATEGORY_ONE_DEFAULT = PUSH_UPS_CATEGORY_ONE_CATEGORIES[0]
