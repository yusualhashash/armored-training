import type { SportEvent } from '@/lib/types'
import { STOMACH_CATEGORY_ONE_SCORES } from './scores'
import { STOMACH_CATEGORY_ONE_STANDARDS } from './standards'
import { STOMACH_CATEGORY_ONE_CATEGORIES } from './categories'

export const STOMACH_CATEGORY_ONE_EVENT: SportEvent = {
  id: 'stomach-category-1',
  name: 'تمرين المعدة (ثبات متوسط) — الفئة العمرية الأولى',
  description: 'اختبار عدد تكرارات تمرين المعدة خلال الوقت المحدد',
  maxScore: 100,
  categories: STOMACH_CATEGORY_ONE_CATEGORIES,
  standards: STOMACH_CATEGORY_ONE_STANDARDS,
  scores: STOMACH_CATEGORY_ONE_SCORES,
}

export const STOMACH_CATEGORY_ONE_DEFAULT = STOMACH_CATEGORY_ONE_CATEGORIES[0]
