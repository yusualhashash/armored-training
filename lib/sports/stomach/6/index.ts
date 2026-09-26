import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_SIX_CATEGORIES } from './categories';
import { STOMACH_CATEGORY_SIX_STANDARDS } from './standards';
import { STOMACH_CATEGORY_SIX_SCORES } from './scores';

export const STOMACH_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'stomach-category-6',
  name: 'تمرين المعدة ( ذراعين عالياً) — الفئة العمرية السادسة',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_SIX_CATEGORIES,
  standards: STOMACH_CATEGORY_SIX_STANDARDS,
  scores: STOMACH_CATEGORY_SIX_SCORES,
}

export const STOMACH_CATEGORY_SIX_DEFAULT = STOMACH_CATEGORY_SIX_CATEGORIES[0]
