import type { SportEvent } from '@/lib/types'
import { RUN_1KM_CATEGORY_SIX_SCORES } from './scores'
import { RUN_1KM_CATEGORY_SIX_STANDARDS } from './standards'
import { RUN_1KM_CATEGORY_SIX_CATEGORIES } from './categories'

/** اختبار 1 كيلومتر (الفئة السادسة) بكل بياناته: الفئات العمرية والمعايير وجدول العلامات. */
export const RUN_1KM_CATEGORY_SIX_EVENT: SportEvent = {
  id: 'run-1km-category-6',
  name: '1 كم — الفئة العمرية السادسة',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_SIX_CATEGORIES,
  standards: RUN_1KM_CATEGORY_SIX_STANDARDS,
  scores: RUN_1KM_CATEGORY_SIX_SCORES,
}

/** الفئة العمرية المستخدمة في شاشة الاختبار. */
export const RUN_1KM_CATEGORY_SIX_DEFAULT = RUN_1KM_CATEGORY_SIX_CATEGORIES[0]
