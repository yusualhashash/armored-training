import type { SportEvent } from '@/lib/types'
import { RUN_100M_CATEGORY_ONE_SCORES } from './scores';
import { RUN_100M_CATEGORY_ONE_STANDARDS } from './standards';
import { RUN_100M_CATEGORY_ONE_CATEGORIES } from './categories';

/** اختبار 100 متر بكل بياناته: الفئات العمرية والمعايير وجدول العلامات. */
export const RUN_100M_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'run-100m-category-1',
  name: '100 متر — الفئة العمرية الأولى',
  description: 'سباق السرعة لمسافة مئة متر',
  maxScore: 100,
  categories: RUN_100M_CATEGORY_ONE_CATEGORIES,
  standards: RUN_100M_CATEGORY_ONE_STANDARDS,
  scores: RUN_100M_CATEGORY_ONE_SCORES,
}

/** الفئة العمرية المستخدمة في شاشة الاختبار. */
export const RUN_100M_CATEGORY_ONE_DEFAULT = RUN_100M_CATEGORY_ONE_CATEGORIES[0]
