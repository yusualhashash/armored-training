import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_FIVE_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_FIVE_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_FIVE_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'push-ups-category-5',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_FIVE_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_FIVE_STANDARDS,
  scores: PUSH_UPS_CATEGORY_FIVE_SCORES,
}

export const PUSH_UPS_CATEGORY_FIVE_DEFAULT = PUSH_UPS_CATEGORY_FIVE_CATEGORIES[0]
