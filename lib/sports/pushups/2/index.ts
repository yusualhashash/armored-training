import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_TWO_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_TWO_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_TWO_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'push-ups-category-2',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_TWO_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_TWO_STANDARDS,
  scores: PUSH_UPS_CATEGORY_TWO_SCORES,
}

export const PUSH_UPS_CATEGORY_TWO_DEFAULT = PUSH_UPS_CATEGORY_TWO_CATEGORIES[0]
