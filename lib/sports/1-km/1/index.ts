import type { SportEvent } from '@/lib/types';
import { RUN_1KM_CATEGORY_ONE_SCORES } from './scores';
import { RUN_1KM_CATEGORY_ONE_STANDARDS } from './standards';
import { RUN_1KM_CATEGORY_ONE_CATEGORIES } from './categories';

export const RUN_1KM_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'run-1km-category-1',
  name: '1 كم — الفئة العمرية الأولى',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_ONE_CATEGORIES,
  standards: RUN_1KM_CATEGORY_ONE_STANDARDS,
  scores: RUN_1KM_CATEGORY_ONE_SCORES,
}

export const RUN_1KM_CATEGORY_ONE_DEFAULT = RUN_1KM_CATEGORY_ONE_CATEGORIES[0]
