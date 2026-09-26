import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_THREE_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_THREE_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_THREE_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'push-ups-category-3',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_THREE_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_THREE_STANDARDS,
  scores: PUSH_UPS_CATEGORY_THREE_SCORES,
}

export const PUSH_UPS_CATEGORY_THREE_DEFAULT = PUSH_UPS_CATEGORY_THREE_CATEGORIES[0]
