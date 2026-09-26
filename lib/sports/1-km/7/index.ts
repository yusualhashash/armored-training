import type { SportEvent } from '@/lib/types'
import { RUN_1KM_CATEGORY_SEVEN_SCORES } from './scores'
import { RUN_1KM_CATEGORY_SEVEN_STANDARDS } from './standards'
import { RUN_1KM_CATEGORY_SEVEN_CATEGORIES } from './categories'

/** اختبار 1 كيلومتر (الفئة السابعة) بكل بياناته: الفئات العمرية والمعايير وجدول العلامات. */
export const RUN_1KM_CATEGORY_SEVEN_EVENT: SportEvent = {
  id: 'run-1km-category-7',
  name: '1 كم — الفئة العمرية السابعة',
  description: 'سباق الجري لمسافة كيلومتر واحد',
  maxScore: 100,
  categories: RUN_1KM_CATEGORY_SEVEN_CATEGORIES,
  standards: RUN_1KM_CATEGORY_SEVEN_STANDARDS,
  scores: RUN_1KM_CATEGORY_SEVEN_SCORES,
}

/** الفئة العمرية المستخدمة في شاشة الاختبار. */
export const RUN_1KM_CATEGORY_SEVEN_DEFAULT = RUN_1KM_CATEGORY_SEVEN_CATEGORIES[0]
