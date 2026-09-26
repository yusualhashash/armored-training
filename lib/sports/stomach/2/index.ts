
import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_TWO_STANDARDS } from './standards';
import { STOMACH_CATEGORY_TWO_CATEGORIES } from './categories';
import { STOMACH_CATEGORY_TWO_SCORES } from './scores';

export const STOMACH_CATEGORY_TWO_EVENT: SportEvent = {
  id: 'stomach-category-2',
  name: 'تمرين المعدة (ثبات متوسط) — الفئة العمرية الثانية',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_TWO_CATEGORIES,
  standards: STOMACH_CATEGORY_TWO_STANDARDS,
  scores: STOMACH_CATEGORY_TWO_SCORES,
}

export const STOMACH_CATEGORY_TWO_DEFAULT = STOMACH_CATEGORY_TWO_CATEGORIES[0]
