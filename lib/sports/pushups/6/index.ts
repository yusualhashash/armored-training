import type { SportEvent } from '@/lib/types'
import { PUSH_UPS_CATEGORY_SIX_CATEGORIES } from './categories'
import { PUSH_UPS_CATEGORY_SIX_SCORES } from './scores'
import { PUSH_UPS_CATEGORY_SIX_STANDARDS } from './standards'

export const PUSH_UPS_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'push-ups-category-6',
  name: 'التمرين السادس (ثني ومد الذراعين)',
  description: 'اختبار عدد تكرارات تمرين ثني ومد الذراعين خلال الوقت المحدد',
  maxScore: 100,
  categories: PUSH_UPS_CATEGORY_SIX_CATEGORIES,
  standards: PUSH_UPS_CATEGORY_SIX_STANDARDS,
  scores: PUSH_UPS_CATEGORY_SIX_SCORES,
}

export const PUSH_UPS_CATEGORY_SIX_DEFAULT = PUSH_UPS_CATEGORY_SIX_CATEGORIES[0]
