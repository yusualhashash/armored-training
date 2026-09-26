import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_SIX_CATEGORIES } from './categories';
import { RUN_100M_CATEGORY_SIX_STANDARDS } from './standards';
import { RUN_100M_CATEGORY_SIX_SCORES } from './scores';

/** اختبار 100 متر ببيانات الفئة العمرية  السادسة. */
export const RUN_100M_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'run-100m-category-6',
  name: '100 متر — الفئة العمرية السادسة',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_SIX_CATEGORIES,
  standards: RUN_100M_CATEGORY_SIX_STANDARDS,
  scores: RUN_100M_CATEGORY_SIX_SCORES,
}

export const RUN_100M_CATEGORY_SIX_DEFAULT = RUN_100M_CATEGORY_SIX_CATEGORIES[0]

