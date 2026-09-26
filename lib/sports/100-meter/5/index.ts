import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_FIVE_CATEGORIES } from './categories';
import { RUN_100M_CATEGORY_FIVE_STANDARDS } from './standards';
import { RUN_100M_CATEGORY_FIVE_SCORES } from './scores';

/** اختبار 100 متر ببيانات الفئة العمرية  الخامسة. */
export const RUN_100M_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'run-100m-category-5',
  name: '100 متر — الفئة العمرية الخامسة',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_FIVE_CATEGORIES,
  standards: RUN_100M_CATEGORY_FIVE_STANDARDS,
  scores: RUN_100M_CATEGORY_FIVE_SCORES,
}

export const RUN_100M_CATEGORY_FIVE_DEFAULT = RUN_100M_CATEGORY_FIVE_CATEGORIES[0]

