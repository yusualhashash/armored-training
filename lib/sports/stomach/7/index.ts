import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_SEVEN_STANDARDS } from './standards';
import { STOMACH_CATEGORY_SEVEN_CATEGORIES } from './categories';
import { STOMACH_CATEGORY_SEVEN_SCORES } from './scores';

export const STOMACH_CATEGORY_SEVEN_EVENT: SportEvent = {
  id: 'stomach-category-7',
  name: 'تمرين المعدة (ذراعين عالياً) — الفئة العمرية السابعة',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_SEVEN_CATEGORIES,
  standards: STOMACH_CATEGORY_SEVEN_STANDARDS,
  scores: STOMACH_CATEGORY_SEVEN_SCORES,
}

export const STOMACH_CATEGORY_SEVEN_DEFAULT = STOMACH_CATEGORY_SEVEN_CATEGORIES[0]

