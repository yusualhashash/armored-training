import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_SEVEN_STANDARDS } from './standards';
import { RUN_100M_CATEGORY_SEVEN_CATEGORIES } from './categories';
import { RUN_100M_CATEGORY_SEVEN_SCORES } from './scores';

/** اختبار 100 متر ببيانات الفئة العمرية  السابعة. */
export const RUN_100M_CATEGORY_SEVEN_EVENT: SportEvent = {
  id: 'run-100m-category-7',
  name: '100 متر — الفئة العمرية السابعة',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_SEVEN_CATEGORIES,
  standards: RUN_100M_CATEGORY_SEVEN_STANDARDS,
  scores: RUN_100M_CATEGORY_SEVEN_SCORES,
}

export const RUN_100M_CATEGORY_SEVEN_DEFAULT = RUN_100M_CATEGORY_SEVEN_CATEGORIES[0]

