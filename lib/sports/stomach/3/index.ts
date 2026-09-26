import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_THREE_CATEGORIES } from './categories';
import { STOMACH_CATEGORY_THREE_STANDARDS } from './standards';
import { STOMACH_CATEGORY_THREE_SCORES } from './scores';

export const STOMACH_CATEGORY_THREE_EVENT: SportEvent = {
  id: 'stomach-category-3',
  name: 'تمرين المعدة (ثبات متوسط) — الفئة العمرية الثالثة',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_THREE_CATEGORIES,
  standards: STOMACH_CATEGORY_THREE_STANDARDS,
  scores: STOMACH_CATEGORY_THREE_SCORES,
}

export const STOMACH_CATEGORY_THREE_DEFAULT = STOMACH_CATEGORY_THREE_CATEGORIES[0]
