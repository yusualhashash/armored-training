import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_TWO_SCORES } from './scores'
import { RUN_100M_CATEGORY_TWO_STANDARDS } from './standards'
import { RUN_100M_CATEGORY_TWO_CATEGORIES } from './categories';

/** اختبار 100 متر ببيانات الفئة العمرية الثانية. */
export const RUN_100M_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'run-100m-category-2',
  name: '100 متر — الفئة العمرية الثانية',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_TWO_CATEGORIES,
  standards: RUN_100M_CATEGORY_TWO_STANDARDS,
  scores: RUN_100M_CATEGORY_TWO_SCORES,
}

export const RUN_100M_CATEGORY_TWO_DEFAULT = RUN_100M_CATEGORY_TWO_CATEGORIES[0]
