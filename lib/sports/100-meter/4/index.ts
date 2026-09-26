import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_FOUR_CATEGORIES } from './categories';
import { RUN_100M_CATEGORY_FOUR_STANDARDS } from './standards';
import { RUN_100M_CATEGORY_FOUR_SCORES } from './scores';

/** اختبار 100 متر ببيانات الفئة العمرية الرابعة. */
export const RUN_100M_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'run-100m-category-4',
  name: '100 متر — الفئة العمرية الرابعة',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_FOUR_CATEGORIES,
  standards: RUN_100M_CATEGORY_FOUR_STANDARDS,
  scores: RUN_100M_CATEGORY_FOUR_SCORES,
}

export const RUN_100M_CATEGORY_FOUR_DEFAULT = RUN_100M_CATEGORY_FOUR_CATEGORIES[0]
