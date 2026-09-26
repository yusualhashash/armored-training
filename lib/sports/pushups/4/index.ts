import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_FOUR_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_FOUR_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_FOUR_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'push-ups-category-4',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_FOUR_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_FOUR_STANDARDS,
  scores: PUSH_UPS_CATEGORY_FOUR_SCORES,
}

export const PUSH_UPS_CATEGORY_FOUR_DEFAULT = PUSH_UPS_CATEGORY_FOUR_CATEGORIES[0]
