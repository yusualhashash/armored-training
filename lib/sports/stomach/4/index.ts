
import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_FOUR_CATEGORIES } from './categories';
import { STOMACH_CATEGORY_FOUR_STANDARDS } from './standards';
import { STOMACH_CATEGORY_FOUR_SCORES } from './scores';

export const STOMACH_CATEGORY_FOUR_EVENT: SportEvent = {
  id: 'stomach-category-4',
  name: 'تمرين المعدة (ثبات متوسط) — الفئة العمرية الرابعة',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_FOUR_CATEGORIES,
  standards: STOMACH_CATEGORY_FOUR_STANDARDS,
  scores: STOMACH_CATEGORY_FOUR_SCORES,
}

export const STOMACH_CATEGORY_FOUR_DEFAULT = STOMACH_CATEGORY_FOUR_CATEGORIES[0]
