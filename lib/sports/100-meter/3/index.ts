import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_THREE_SCORES } from './scores'
import { RUN_100M_CATEGORY_THREE_STANDARDS } from './standards'
import { RUN_100M_CATEGORY_THREE_CATEGORIES } from './categories';

/** اختبار 100 متر ببيانات الفئة العمرية الثالثة. */
export const RUN_100M_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'run-100m-category-3',
  name: '100 متر — الفئة العمرية الثالثة',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_THREE_CATEGORIES,
  standards: RUN_100M_CATEGORY_THREE_STANDARDS,
  scores: RUN_100M_CATEGORY_THREE_SCORES,
}

export const RUN_100M_CATEGORY_THREE_DEFAULT = RUN_100M_CATEGORY_THREE_CATEGORIES[0]
