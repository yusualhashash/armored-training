import { Dumbbell, Medal, Timer, type LucideIcon } from 'lucide-react'
import type { View } from './navigation'

interface MenuItem {
  label: string
  description: string
  icon: LucideIcon
  view: View
}

export const sectionMenus = {
  'armored': [
    { label: 'T72', description: 'اختبار ركوب الطواقم في الدبابة', icon: Medal, view: 't72' },
    { label: 'T55+62', description: 'اختبار ركوب الطواقم في الدبابة', icon: Medal, view: 't55-62' },
  ],
  't72': [
    { label: 'ركوب الطواقم في الدب��بة', description: 'الطاقم والفصيلة والسرية', icon: Medal, view: 't72-boarding' },
    { label: 'نزول الطواقم من الدبابة', description: 'الطاقم والفصيلة والسرية', icon: Medal, view: 't72-disembarking' },
    { label: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', description: 'السرية والكتيبة', icon: Medal, view: 't72-pre-combat' },
    { label: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال', description: 'الفصيلة والسرية والكتيبة', icon: Medal, view: 't72-combat-to-pre-combat' },
    { label: 'الفتح من ترتيب ما قبل القتال', description: 'الفصيلة والسرية والكتيبة', icon: Medal, view: 't72-open-pre-combat' },
  ],
  't55-62': [
    { label: 'ركوب الطواقم في الدبابة', description: 'الطاقم والفصيلة والسرية', icon: Medal, view: 't55-62-boarding' },
    { label: 'نزول الطواقم من الدبابة', description: 'الطاقم والفصيلة والسرية', icon: Medal, view: 't55-62-disembarking' },
    { label: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', description: 'السرية والكتيبة', icon: Medal, view: 't55-62-pre-combat' },
    { label: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال', description: 'الفصيلة والسرية والكتيبة', icon: Medal, view: 't55-62-combat-to-pre-combat' },
    { label: 'الفتح من ترتيب ما قبل القتال', description: 'الفصيلة والسرية والكتيبة', icon: Medal, view: 't55-62-open-pre-combat' },
  ],
  'sports': [
    { label: 'تمرين المعدة', description: 'اختبار التكرارات مع إدخال النتائج', icon: Dumbbell, view: 'stomach' },
    { label: 'التمرين السادس', description: 'ثني ومد الذراعين', icon: Dumbbell, view: 'pushups' },
    { label: 'القوة المركبة', description: 'اختبار القوة المركبة', icon: Dumbbell, view: 'compound-strength' },
    { label: 'سحب الجسم على الثابت', description: 'اختبار العقلة والتكرارات', icon: Dumbbell, view: 'pullups' },
    { label: '100 متر', description: 'سباق السرعة لمسافة مئة متر', icon: Timer, view: 'hundred' },
    { label: '1 كم', description: 'سباق الجري لمسافة كيلومتر واحد', icon: Timer, view: 'one-km' },
    { label: '2 كم', description: 'سباق الجري لمسافة كيلومترين اثنين', icon: Timer, view: 'two-km' },
    { label: '3 كم', description: 'سباق الجري لمسافة ثلاثة كيلومترات', icon: Timer, view: 'three-km' },
    { label: '5 كم', description: 'سباق الجري لمسافة خمسة كيلومترات', icon: Timer, view: 'five-km' },
    { label: '4×100 متر', description: 'سباق التتابع لمسافة 4×100 متر', icon: Timer, view: '4x100' },
  ],
} as const satisfies Partial<Record<View, readonly MenuItem[]>>

export type MenuView = keyof typeof sectionMenus

export function isMenuView(view: View): view is MenuView {
  return Object.hasOwn(sectionMenus, view)
}
