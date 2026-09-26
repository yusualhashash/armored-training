import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_FIVE_CATEGORIES } from './categories';
import { STOMACH_CATEGORY_FIVE_STANDARDS } from './standards';
import { STOMACH_CATEGORY_FIVE_SCORES } from './scores';


export const STOMACH_CATEGORY_FIVE_EVENT: SportEvent = {
  id: 'stomach-category-5',
  name: 'تمرين المعدة (ثبات متوسط) — الفئة العمرية الخامسة',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_FIVE_CATEGORIES,
  standards: STOMACH_CATEGORY_FIVE_STANDARDS,
  scores: STOMACH_CATEGORY_FIVE_SCORES,
}

export const STOMACH_CATEGORY_FIVE_DEFAULT = STOMACH_CATEGORY_FIVE_CATEGORIES[0]
