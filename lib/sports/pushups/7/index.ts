import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_SEVEN_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_SEVEN_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_SEVEN_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_SEVEN_EVENT: SportEvent = {
  id: 'push-ups-category-7',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_SEVEN_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_SEVEN_STANDARDS,
  scores: PUSH_UPS_CATEGORY_SEVEN_SCORES,
}

export const PUSH_UPS_CATEGORY_SEVEN_DEFAULT = PUSH_UPS_CATEGORY_SEVEN_CATEGORIES[0]
