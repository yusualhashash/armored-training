'use client'

import { ArrowRight, BookOpen, ChevronLeft, Dumbbell, House, Medal, Sparkles, Timer } from 'lucide-react';
import { useEffect, useState } from 'react';

import { T55_62View, type T55_62ViewId } from '@/components/armored/t55-62/boarding/view';
import { T55_62DisembarkingView, type T55_62DisembarkingViewId } from '@/components/armored/t55-62/disembarking/view';
import { T55_62OpenPreCombatView, type T55_62OpenPreCombatViewId } from '@/components/armored/t55-62/open-pre-combat/view';
import { T55_62PreCombatView, type T55_62PreCombatViewId } from '@/components/armored/t55-62/pre-combat/view';
import { T72View } from '@/components/armored/t72/boarding/view';
import { T72DisembarkingView, type T72DisembarkingViewId } from '@/components/armored/t72/disembarking/view';
import { T72OpenPreCombatView, type T72OpenPreCombatViewId } from '@/components/armored/t72/open-pre-combat/view';
import { T72PreCombatView, type T72PreCombatViewId } from '@/components/armored/t72/pre-combat/view';
import { T72CombatToPreCombatView, type T72CombatToPreCombatViewId } from '@/components/armored/t72/combat-to-pre-combat/view';
import { OneKilometerCategories, OneKilometerView } from '@/components/sports/1-km/one-km-view';
import { HundredMeterCategories, HundredMeterView, type HundredMeterViewId } from '@/components/sports/100-meter/100-meter-view';
import { TwoKilometerCategories, TwoKilometerView, type TwoKilometerViewId } from '@/components/sports/2-km/two-km-view';
import { ThreeKilometerCategories, ThreeKilometerView, type ThreeKilometerViewId } from '@/components/sports/3-km/three-km-view';
import { FourXHundredMeterCategories, FourXHundredMeterView, type FourXHundredMeterViewId } from '@/components/sports/4x100-meter/four-x-hundred-meter-view';
import { FiveKilometerCategories, FiveKilometerView, type FiveKilometerViewId } from '@/components/sports/5-km/five-km-view';
import { CompoundStrengthCategories, CompoundStrengthView } from '@/components/sports/compound-strength/compound-strength-view';
import { PullupsCategories, PullupsView } from '@/components/sports/pullups/pullups-view';
import { PushupsCategories, PushupsView } from '@/components/sports/pushups/pushups-view';
import { StomachCategories, StomachView } from '@/components/sports/stomach/stomach-view';
import { Button } from '@/components/ui/button';


type View = 'home' | 'sports' | 'stomach' | 'stomach-category-one' | 'stomach-category-two' | 'stomach-category-three' | 'stomach-category-four' | 'stomach-category-five' | 'stomach-category-six' | 'stomach-category-seven' | 'pushups' | 'pushups-category-one' | 'pushups-category-two' | 'pushups-category-three' | 'pushups-category-four' | 'pushups-category-five' | 'pushups-category-six' | 'pushups-category-seven' | 'compound-strength' | 'compound-strength-category-one' | 'compound-strength-category-two' | 'compound-strength-category-three' | 'compound-strength-category-four' | 'compound-strength-category-five' | 'compound-strength-category-six' | 'compound-strength-category-seven' | 'pullups' | 'pullups-category-one' | 'pullups-category-two' | 'pullups-category-three' | 'pullups-category-four' | 'pullups-category-five' | 'pullups-category-six' | 'pullups-category-seven' | 'hundred' | 'category-one' | 'category-two' | 'category-three' | 'category-four' | 'category-five' | 'category-six' | 'category-seven' | 'one-km' | 'one-km-category-one' | 'one-km-category-two' | 'one-km-category-three' | 'one-km-category-four' | 'one-km-category-five' | 'one-km-category-six' | 'one-km-category-seven' | 'two-km' | 'two-km-category-one' | 'two-km-category-two' | 'two-km-category-three' | 'two-km-category-four' | 'three-km' | 'three-km-category-one' | 'three-km-category-two' | 'three-km-category-three' | 'five-km' | 'five-km-category-one' | 'five-km-category-two' | 'five-km-category-three' | '4x100' | '4x100-category-one' | '4x100-category-two' | '4x100-category-three' | '4x100-category-four' | '4x100-category-five' | '4x100-category-six' | 'armored' | 't72' | 't72-boarding' | 't72-طاقم' | 't72-فصيلة' | 't72-سرية' | 't72-disembarking' | 't72-disembarking-طاقم' | 't72-disembarking-فصيلة' | 't72-disembarking-سرية' | 't72-pre-combat' | 't72-pre-combat-سرية' | 't72-pre-combat-كتيبة' | 't72-combat-to-pre-combat' | 't72-combat-to-pre-combat-سرية' | 't72-combat-to-pre-combat-كتيبة' | 't55-62' | 't55-62-boarding' | 't55-62-طاقم' | 't55-62-فصيلة' | 't55-62-سرية' | 't55-62-disembarking' | 't55-62-disembarking-طاقم' | 't55-62-disembarking-فصيلة' | 't55-62-disembarking-سرية' | 't55-62-pre-combat' | 't55-62-pre-combat-سرية' | 't55-62-pre-combat-كتيبة' | 't72-open-pre-combat' | 't72-open-pre-combat-فصيلة' | 't72-open-pre-combat-سرية' | 't72-open-pre-combat-كتيبة' | 't55-62-open-pre-combat' | 't55-62-open-pre-combat-فصيلة' | 't55-62-open-pre-combat-سرية' | 't55-62-open-pre-combat-كتيبة' | 'guide'

const navigationItems = [
  { id: 'home' as const, label: 'الرئيسية', icon: House },
  { id: 'guide' as const, label: 'التعليمات', icon: BookOpen },
]

const sectionCards = [
  {
    view: 'sports' as const,
    label: 'الرياضة',
    description: 'اختر نوع الرياضة للوصول إلى تفاصيل المنافسات.',
    icon: Dumbbell,
    eyebrow: 'القسم الأول',
  },
  {
    view: 'armored' as const,
    label: 'أسلحة ورمي',
    description: 'اختبارات الدبابات والمهارات الميدانية.',
    icon: Medal,
    eyebrow: 'القسم الثاني',
  },
]


type SportsView = Exclude<View, 'home' | 'guide'>

const stomachTitle = 'تمرين المعدة'

const viewContent: Record<SportsView, { title: string; backLabel: string; backTo: View }> = {
  't55-62-open-pre-combat': { title: 'الفتح من ترتيب ما قبل القتال', backLabel: 'T55+62', backTo: 't55-62' },
  't55-62-open-pre-combat-فصيلة': { title: 'الفصيلة', backLabel: 'الفتح من ترتيب ما قبل القتال', backTo: 't55-62-open-pre-combat' },
  't55-62-open-pre-combat-سرية': { title: 'السرية', backLabel: 'الفتح من ترتيب ما قبل القتال', backTo: 't55-62-open-pre-combat' },
  't55-62-open-pre-combat-كتيبة': { title: 'الكتيبة', backLabel: 'الفتح من ترتيب ما قبل القتال', backTo: 't55-62-open-pre-combat' },
  't72-open-pre-combat': { title: 'الفتح من ترتيب ما قبل القتال', backLabel: 'T72', backTo: 't72' },
  't72-open-pre-combat-فصيلة': { title: 'الفصيلة', backLabel: 'الفتح من ترتيب ما قبل القتال', backTo: 't72-open-pre-combat' },
  't72-open-pre-combat-سرية': { title: 'السرية', backLabel: 'الفتح من ترتيب ما قبل القتال', backTo: 't72-open-pre-combat' },
  't72-open-pre-combat-كتيبة': { title: 'الكتيبة', backLabel: 'الفتح من ترتيب ما قبل القتال', backTo: 't72-open-pre-combat' },
  sports: { title: 'الرياضة', backLabel: 'الرئيسية', backTo: 'home' },
  armored: { title: 'أسلحة ورمي', backLabel: 'الرئيسية', backTo: 'home' },
  t72: { title: 'T72', backLabel: 'أسلحة ورمي', backTo: 'armored' },
  't72-boarding': { title: 'ركوب الطواقم في الدبابة', backLabel: 'T72', backTo: 't72' },
  't72-طاقم': { title: 'الطاقم', backLabel: 'ركوب الطواقم في الدبابة', backTo: 't72-boarding' },
  't72-فصيلة': { title: 'الفصيلة', backLabel: 'ركوب الطواقم في الدبابة', backTo: 't72-boarding' },
  't72-سرية': { title: 'السرية', backLabel: 'ركوب الطواقم في الدبابة', backTo: 't72-boarding' },
  't72-disembarking': { title: 'نزول الطواقم من الدبابة', backLabel: 'T72', backTo: 't72' },
  't72-disembarking-طاقم': { title: 'الطاقم', backLabel: 'نزول الطواقم من الدبابة', backTo: 't72-disembarking' },
  't72-disembarking-فصيلة': { title: 'الفصيلة', backLabel: 'نزول الطواقم من الدبابة', backTo: 't72-disembarking' },
  't72-disembarking-سرية': { title: 'السرية', backLabel: 'نزول الطواقم من الدبابة', backTo: 't72-disembarking' },
  't72-pre-combat': { title: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', backLabel: 'T72', backTo: 't72' },
  't72-combat-to-pre-combat': { title: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال', backLabel: 'T72', backTo: 't72' },
  't72-combat-to-pre-combat-فصيلة': { title: 'الفصيلة', backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال', backTo: 't72-combat-to-pre-combat' },
  't72-combat-to-pre-combat-سرية': { title: 'السرية', backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال', backTo: 't72-combat-to-pre-combat' },
  't72-combat-to-pre-combat-كتيبة': { title: 'الكتيبة', backLabel: 'الانتقال من ترتيب القتال الى ترتيب ما قبل القتال', backTo: 't72-combat-to-pre-combat' },
  't72-pre-combat-سرية': { title: 'السرية', backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', backTo: 't72-pre-combat' },
  't72-pre-combat-كتيبة': { title: 'الكتيبة', backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', backTo: 't72-pre-combat' },
  't55-62': { title: 'T55+62', backLabel: 'أسلحة ورمي', backTo: 'armored' },
  't55-62-boarding': { title: 'ركوب الطواقم في الدبابة', backLabel: 'T55+62', backTo: 't55-62' },
  't55-62-طاقم': { title: 'الطاقم', backLabel: 'ركوب الطواقم في الدبابة', backTo: 't55-62-boarding' },
  't55-62-فصيلة': { title: 'الفصيلة', backLabel: 'ركوب الطواقم في الدبابة', backTo: 't55-62-boarding' },
  't55-62-سرية': { title: 'السرية', backLabel: 'ركوب الطواقم في الدبابة', backTo: 't55-62-boarding' },
  't55-62-disembarking': { title: 'نزول الطواقم من الدبابة', backLabel: 'T55+62', backTo: 't55-62' },
  't55-62-disembarking-طاقم': { title: 'الطاقم', backLabel: 'نزول الطواقم من الدبابة', backTo: 't55-62-disembarking' },
  't55-62-disembarking-فصيلة': { title: 'الفصيلة', backLabel: 'نزول الطواقم من الدبابة', backTo: 't55-62-disembarking' },
  't55-62-disembarking-سرية': { title: 'السرية', backLabel: 'نزول الطواقم من الدبابة', backTo: 't55-62-disembarking' },
  't55-62-pre-combat': { title: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', backLabel: 'T55+62', backTo: 't55-62' },
  't55-62-pre-combat-سرية': { title: 'السرية', backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', backTo: 't55-62-pre-combat' },
  't55-62-pre-combat-كتيبة': { title: 'الكتيبة', backLabel: 'الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال', backTo: 't55-62-pre-combat' },
  stomach: { title: stomachTitle, backLabel: 'الرياضة', backTo: 'sports' },
  'stomach-category-one': { title: 'الفئة الأولى', backLabel: stomachTitle, backTo: 'stomach' },
  'stomach-category-two': { title: 'الفئة الثانية', backLabel: stomachTitle, backTo: 'stomach' },
  'stomach-category-three': { title: 'الفئة الثالثة', backLabel: stomachTitle, backTo: 'stomach' },
  'stomach-category-four': { title: 'الفئة الرابعة', backLabel: stomachTitle, backTo: 'stomach' },
  'stomach-category-five': { title: 'الفئة الخامسة', backLabel: stomachTitle, backTo: 'stomach' },
  'stomach-category-six': { title: 'الفئة السادسة', backLabel: stomachTitle, backTo: 'stomach' },
  'stomach-category-seven': { title: 'الفئة السابعة', backLabel: stomachTitle, backTo: 'stomach' },
  pushups: { title: 'التمرين السادس', backLabel: 'الرياضة', backTo: 'sports' },
  'pushups-category-one': { title: 'الفئة الأولى', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'pushups-category-two': { title: 'الفئة الثانية', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'pushups-category-three': { title: 'الفئة الثالثة', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'pushups-category-four': { title: 'الفئة الرابعة', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'pushups-category-five': { title: 'الفئة الخامسة', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'pushups-category-six': { title: 'الفئة السادسة', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'pushups-category-seven': { title: 'الفئة السابعة', backLabel: 'التمرين السادس', backTo: 'pushups' },
  'compound-strength': { title: 'القوة المركبة', backLabel: 'الرياضة', backTo: 'sports' },
  'compound-strength-category-one': { title: 'الفئة الأولى', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  'compound-strength-category-two': { title: 'الفئة الثانية', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  'compound-strength-category-three': { title: 'الفئة الثالثة', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  'compound-strength-category-four': { title: 'الفئة الرابعة', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  'compound-strength-category-five': { title: 'الفئة الخامسة', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  'compound-strength-category-six': { title: 'الفئة السادسة', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  'compound-strength-category-seven': { title: 'الفئة السابعة', backLabel: 'القوة المركبة', backTo: 'compound-strength' },
  pullups: { title: 'تمرين سحب الجسم على الثابت', backLabel: 'الرياضة', backTo: 'sports' },
  'pullups-category-one': { title: 'الفئة الأولى', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  'pullups-category-two': { title: 'الفئة الثانية', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  'pullups-category-three': { title: 'الفئة الثالثة', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  'pullups-category-four': { title: 'الفئة الرابعة', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  'pullups-category-five': { title: 'الفئة الخامسة', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  'pullups-category-six': { title: 'الفئة السادسة', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  'pullups-category-seven': { title: 'الفئة السابعة', backLabel: 'تمرين سحب الجسم على الثابت', backTo: 'pullups' },
  hundred: { title: '100 متر', backLabel: 'الرياضة', backTo: 'sports' },
  'one-km': { title: '1 كم', backLabel: 'الرياضة', backTo: 'sports' },
  'one-km-category-one': { title: 'الفئة الأولى', backLabel: '1 كم', backTo: 'one-km' },
  'one-km-category-two': { title: 'الفئة الثانية', backLabel: '1 كم', backTo: 'one-km' },
  'one-km-category-three': { title: 'الفئة الثالثة', backLabel: '1 كم', backTo: 'one-km' },
  'one-km-category-four': { title: 'الفئة الرابعة', backLabel: '1 كم', backTo: 'one-km' },
  'one-km-category-five': { title: 'الفئة الخامسة', backLabel: '1 كم', backTo: 'one-km' },
  'one-km-category-six': { title: 'الفئة السادسة', backLabel: '1 كم', backTo: 'one-km' },
  'one-km-category-seven': { title: 'الفئة السابعة', backLabel: '1 كم', backTo: 'one-km' },
  'two-km': { title: '2 كم', backLabel: 'الرياضة', backTo: 'sports' },
  'two-km-category-one': { title: 'الفئة الأولى', backLabel: '2 كم', backTo: 'two-km' },
  'two-km-category-two': { title: 'الفئة الثانية', backLabel: '2 كم', backTo: 'two-km' },
  'two-km-category-three': { title: 'الفئة الثالثة', backLabel: '2 كم', backTo: 'two-km' },
  'two-km-category-four': { title: 'الفئة الرابعة', backLabel: '2 كم', backTo: 'two-km' },
  'three-km': { title: '3 كم', backLabel: 'الرياضة', backTo: 'sports' },
  'three-km-category-one': { title: 'الفئة الأولى', backLabel: '3 كم', backTo: 'three-km' },
  'three-km-category-two': { title: 'الفئة الثانية', backLabel: '3 كم', backTo: 'three-km' },
  'three-km-category-three': { title: 'الفئة الثالثة', backLabel: '3 كم', backTo: 'three-km' },
  'five-km': { title: '5 كم', backLabel: 'الرياضة', backTo: 'sports' },
  'five-km-category-one': { title: 'الفئة الأولى', backLabel: '5 كم', backTo: 'five-km' },
  'five-km-category-two': { title: 'الفئة الثانية', backLabel: '5 كم', backTo: 'five-km' },
  'five-km-category-three': { title: 'الفئة الثالثة', backLabel: '5 كم', backTo: 'five-km' },
  '4x100': { title: '4×100 متر', backLabel: 'الرياضة', backTo: 'sports' },
  '4x100-category-one': { title: 'الفئة الأولى', backLabel: '4×100 متر', backTo: '4x100' },
  '4x100-category-two': { title: 'الف��ة الثانية', backLabel: '4×100 متر', backTo: '4x100' },
  '4x100-category-three': { title: 'الفئة الثالثة', backLabel: '4×100 متر', backTo: '4x100' },
  '4x100-category-four': { title: 'الفئة الرابعة', backLabel: '4×100 متر', backTo: '4x100' },
  '4x100-category-five': { title: 'الفئة الخامسة', backLabel: '4×100 متر', backTo: '4x100' },
  '4x100-category-six': { title: 'الفئة السادسة', backLabel: '4×100 متر', backTo: '4x100' },
  'category-one': { title: 'الفئة الأولى', backLabel: '100 متر', backTo: 'hundred' },
  'category-two': { title: 'الفئة الثانية', backLabel: '100 متر', backTo: 'hundred' },
  'category-three': { title: 'الفئة الثالثة', backLabel: '100 متر', backTo: 'hundred' },
  'category-four': { title: 'الفئة الرابعة', backLabel: '100 متر', backTo: 'hundred' },
  'category-five': { title: 'الفئة الخامسة', backLabel: '100 متر', backTo: 'hundred' },
  'category-six': { title: 'الفئة السادسة', backLabel: '100 متر', backTo: 'hundred' },
  'category-seven': { title: 'الفئة السابعة', backLabel: '100 متر', backTo: 'hundred' },
}

const hundredMeterCategoryViews = [
  'category-one',
  'category-two',
  'category-three',
  'category-four',
  'category-five',
  'category-six',
  'category-seven',
] as const satisfies readonly HundredMeterViewId[]

const twoKilometerCategoryViews = ['two-km-category-one', 'two-km-category-two', 'two-km-category-three', 'two-km-category-four'] as const satisfies readonly TwoKilometerViewId[]
const threeKilometerCategoryViews = ['three-km-category-one', 'three-km-category-two', 'three-km-category-three'] as const satisfies readonly ThreeKilometerViewId[]
const fiveKilometerCategoryViews = ['five-km-category-one', 'five-km-category-two', 'five-km-category-three'] as const satisfies readonly FiveKilometerViewId[]
const fourXHundredMeterCategoryViews = [
  '4x100-category-one',
  '4x100-category-two',
  '4x100-category-three',
  '4x100-category-four',
  '4x100-category-five',
  '4x100-category-six',
] as const satisfies readonly FourXHundredMeterViewId[]
function isFourXHundredMeterCategoryView(view: View): view is FourXHundredMeterViewId {
  return (fourXHundredMeterCategoryViews as readonly View[]).includes(view)
}

function isFiveKilometerCategoryView(view: View): view is FiveKilometerViewId {
  return (fiveKilometerCategoryViews as readonly View[]).includes(view)
}

function isThreeKilometerCategoryView(view: View): view is ThreeKilometerViewId {
  return (threeKilometerCategoryViews as readonly View[]).includes(view)
}

function isTwoKilometerCategoryView(view: View): view is TwoKilometerViewId {
  return (twoKilometerCategoryViews as readonly View[]).includes(view)
}

function isHundredMeterCategoryView(view: View): view is HundredMeterViewId {
  return (hundredMeterCategoryViews as readonly View[]).includes(view)
}

export default function Page() {
  const [activeView, setActiveView] = useState<View>('home')

  useEffect(() => {
    window.history.replaceState({ view: 'home' satisfies View }, '', window.location.href)

    const handlePopState = (event: PopStateEvent) => {
      const view = event.state?.view as View | undefined
      if (view) {
        setActiveView(view)
        return
      }

      window.history.pushState({ view: 'home' satisfies View }, '', window.location.href)
      setActiveView('home')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openView = (view: View) => {
    window.history.pushState({ view }, '', window.location.href)
    setActiveView(view)
  }
  const currentSection = activeView === 'home' || activeView === 'guide' ? null : viewContent[activeView]

  return (
    <main dir="rtl" className="min-h-svh w-full max-w-full overflow-x-hidden bg-green-950 text-white">
      <div className="relative flex min-h-svh w-full max-w-full flex-col">

        <header className="relative flex w-full max-w-full items-center justify-between gap-3 px-3 pb-4 pt-5 sm:gap-4 sm:px-10 sm:pt-10">
          {currentSection ? (
<div className="flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
  <div className="flex min-w-0 items-center gap-3">
                <Button type="button" variant="ghost" size="icon" aria-label={`رجوع إلى ${currentSection.backLabel}`} onClick={() => window.history.back()} className="order-first size-11 shrink-0 rounded-full border border-white/10 bg-[#101216] text-white shadow-lg shadow-black/25 hover:bg-[#17191f]">
                  <ArrowRight className="size-5" aria-hidden="true" />
                </Button>
                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-white/50">رجوع إلى {currentSection.backLabel}</p>
                  <h1 className="mt-1 line-clamp-2 break-words text-base font-bold leading-tight tracking-tight text-white sm:text-xl">{currentSection.title}</h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] shadow-lg shadow-black/10">
                <Sparkles className="size-5 text-rose-200" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-medium tracking-[0.18em] text-white/45">مساحتك اليومية</p>
                <h1 className="mt-1 truncate text-lg font-semibold tracking-tight text-white">ابدأ من هنا</h1>
              </div>
            </div>
          )}
          {!currentSection && <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-white/55">يعمل دون إنترنت</span>}
        </header>

        <section className="relative flex min-w-0 flex-1 flex-col px-3 pb-32 pt-7 sm:px-10 sm:pb-36 sm:pt-10">
          {activeView === 'home' && (
            <div className="mx-auto w-full max-w-2xl">
              <div className="grid gap-4">
                {sectionCards.map(({ view, label, description, icon: Icon, eyebrow }) => (
                  <Button key={view} type="button" variant="ghost" onClick={() => openView(view)} className="group h-auto min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] p-4 text-right text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-[#17191f] sm:p-6">
                    <span className="flex items-center gap-4">
                      <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 ring-1 ring-inset ring-rose-100/10"><Icon className="size-6" aria-hidden="true" /></span>
                      <span className="flex flex-col items-start gap-1"><span className="text-xs text-white/40">{eyebrow}</span><span className="text-lg font-semibold">{label}</span><span className="text-xs font-normal text-white/50">{description}</span></span>
                    </span>
                    <ChevronLeft className="size-5 text-white/35 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                  </Button>
                ))}
              </div>
            </div>
          )}

          {activeView === 'guide' && <InfoPanel title="التعليمات" text="است��دم البطاقات للتنقل بين الأقسام. جميع البيانات مضمّنة داخل التطبيق، لذلك يمكنك استخدامه حتى عند عدم توفر الإنترنت." icon={BookOpen} />}

          {currentSection && (
            <div className="mx-auto w-full max-w-2xl">
              {activeView === 'armored' && <div className="grid gap-4"><SectionButton label="T72" description="اختبار ركوب الطواقم في الدبابة" icon={Medal} onClick={() => openView('t72')} /><SectionButton label="T55+62" description="اختبار ركوب الطواقم في الدبابة" icon={Medal} onClick={() => openView('t55-62')} /></div>}
              {activeView === 't72' && <div className="grid gap-4"><SectionButton label="ركوب الطواقم في الدبابة" description="الطاقم والفصيلة والسرية" icon={Medal} onClick={() => openView('t72-boarding')} /><SectionButton label="نزول الطواقم من الدبابة" description="الطاقم والفصيلة والسرية" icon={Medal} onClick={() => openView('t72-disembarking')} /><SectionButton label="الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال" description="السرية والكتيبة" icon={Medal} onClick={() => openView('t72-pre-combat')} /><SectionButton label="الانتقال من ترتيب القتال الى ترتيب ما قبل القتال" description="الفصيلة والسرية والكتيبة" icon={Medal} onClick={() => openView('t72-combat-to-pre-combat')} /><SectionButton label="الفتح من ترتيب ما قبل القتال" description="الفصيلة والسرية والكتيبة" icon={Medal} onClick={() => openView('t72-open-pre-combat')} /></div>}
              {activeView === 't55-62' && <div className="grid gap-4"><SectionButton label="ركوب الطواقم في الدبابة" description="الطاقم والفصيلة والسرية" icon={Medal} onClick={() => openView('t55-62-boarding')} /><SectionButton label="نزول الطواقم من الدبابة" description="الطاقم والفصيلة والسرية" icon={Medal} onClick={() => openView('t55-62-disembarking')} /><SectionButton label="الانتقال من تشكيلة الرتل إلى ترتيب ما قبل القتال" description="السرية والكتيبة" icon={Medal} onClick={() => openView('t55-62-pre-combat')} /><SectionButton label="الفتح من ترتيب ما قبل القتال" description="الفصيلة والسرية والكتيبة" icon={Medal} onClick={() => openView('t55-62-open-pre-combat')} /></div>}
              {activeView === 'sports' && <div className="grid gap-4"><SectionButton label="تمرين المعدة" description="اختبار التكرارات مع إدخال النتائج" icon={Dumbbell} onClick={() => openView('stomach')} /><SectionButton label="التمرين السادس" description="ثني ومد الذراعين" icon={Dumbbell} onClick={() => openView('pushups')} /><SectionButton label="القوة المركبة" description="اختبار القوة المركبة" icon={Dumbbell} onClick={() => openView('compound-strength')} /><SectionButton label="سحب الجسم على الثابت" description="اختبار العقلة والتكرارات" icon={Dumbbell} onClick={() => openView('pullups')} /><SectionButton label="100 متر" description="سباق السرعة لمسافة مئة متر" icon={Timer} onClick={() => openView('hundred')} /><SectionButton label="1 كم" description="سباق الجري لمسافة كيلومتر واحد" icon={Timer} onClick={() => openView('one-km')} /><SectionButton label="2 كم" description="سباق الجري لمسافة كيلومترين اثنين" icon={Timer} onClick={() => openView('two-km')} /><SectionButton label="3 كم" description="سباق الجري لمسافة ثلاثة كيلومترات" icon={Timer} onClick={() => openView('three-km')} /><SectionButton label="5 كم" description="سباق الجري لمسافة خمسة كيلومترات" icon={Timer} onClick={() => openView('five-km')} /><SectionButton label="4×100 متر" description="سباق التتابع لمسافة 4×100 متر" icon={Timer} onClick={() => openView('4x100')} /></div>}
              {activeView === 'stomach' && <StomachCategories openView={openView} />}
              {activeView === 'pushups' && <PushupsCategories openView={openView} />}
              {activeView === 'pushups-category-one' && <PushupsView categoryId="pushups-category-one" />}
              {activeView === 'pushups-category-two' && <PushupsView categoryId="pushups-category-two" />}
              {activeView === 'pushups-category-three' && <PushupsView categoryId="pushups-category-three" />}
              {activeView === 'pushups-category-four' && <PushupsView categoryId="pushups-category-four" />}
              {activeView === 'pushups-category-five' && <PushupsView categoryId="pushups-category-five" />}
              {activeView === 'pushups-category-six' && <PushupsView categoryId="pushups-category-six" />}
              {activeView === 'pushups-category-seven' && <PushupsView categoryId="pushups-category-seven" />}
              {activeView === 'compound-strength' && <CompoundStrengthCategories openView={openView} />}
              {activeView === 'compound-strength-category-one' && <CompoundStrengthView categoryId="compound-strength-category-one" />}
              {activeView === 'compound-strength-category-two' && <CompoundStrengthView categoryId="compound-strength-category-two" />}
              {activeView === 'compound-strength-category-three' && <CompoundStrengthView categoryId="compound-strength-category-three" />}
              {activeView === 'compound-strength-category-four' && <CompoundStrengthView categoryId="compound-strength-category-four" />}
              {activeView === 'compound-strength-category-five' && <CompoundStrengthView categoryId="compound-strength-category-five" />}
              {activeView === 'compound-strength-category-six' && <CompoundStrengthView categoryId="compound-strength-category-six" />}
              {activeView === 'compound-strength-category-seven' && <CompoundStrengthView categoryId="compound-strength-category-seven" />}
              {activeView === 'pullups' && <PullupsCategories openView={openView} />}
              {activeView === 'pullups-category-one' && <PullupsView categoryId="pullups-category-one" />}
              {activeView === 'pullups-category-two' && <PullupsView categoryId="pullups-category-two" />}
              {activeView === 'pullups-category-three' && <PullupsView categoryId="pullups-category-three" />}
              {activeView === 'pullups-category-four' && <PullupsView categoryId="pullups-category-four" />}
              {activeView === 'pullups-category-five' && <PullupsView categoryId="pullups-category-five" />}
              {activeView === 'pullups-category-six' && <PullupsView categoryId="pullups-category-six" />}
              {activeView === 'pullups-category-seven' && <PullupsView categoryId="pullups-category-seven" />}
              {(activeView === 't72-boarding' || activeView === 't72-طاقم' || activeView === 't72-فصيلة' || activeView === 't72-سرية') && <T72View activeView={activeView} openView={openView} />}
              {(activeView === 't72-disembarking' || activeView === 't72-disembarking-طاقم' || activeView === 't72-disembarking-فصيلة' || activeView === 't72-disembarking-سرية') && <T72DisembarkingView activeView={activeView as T72DisembarkingViewId} openView={openView as (view: T72DisembarkingViewId) => void} />}
              {(activeView === 't72-pre-combat' || activeView === 't72-pre-combat-سرية' || activeView === 't72-pre-combat-كتيبة') && <T72PreCombatView activeView={activeView as T72PreCombatViewId} openView={openView as (view: T72PreCombatViewId) => void} />}
              {(activeView === 't72-combat-to-pre-combat' || activeView === 't72-combat-to-pre-combat-فصيلة' || activeView === 't72-combat-to-pre-combat-سرية' || activeView === 't72-combat-to-pre-combat-كتيبة') && <T72CombatToPreCombatView activeView={activeView as T72CombatToPreCombatViewId} openView={openView as (view: T72CombatToPreCombatViewId) => void} />}
              {(activeView === 't72-open-pre-combat' || activeView === 't72-open-pre-combat-فصيلة' || activeView === 't72-open-pre-combat-سرية' || activeView === 't72-open-pre-combat-كتيبة') && <T72OpenPreCombatView activeView={activeView as T72OpenPreCombatViewId} openView={openView as (view: T72OpenPreCombatViewId) => void} />}
              {(activeView === 't55-62-boarding' || activeView === 't55-62-طاقم' || activeView === 't55-62-فصيلة' || activeView === 't55-62-سرية') && <T55_62View activeView={activeView as T55_62ViewId} openView={openView as (view: T55_62ViewId) => void} />}
              {(activeView === 't55-62-disembarking' || activeView === 't55-62-disembarking-طاقم' || activeView === 't55-62-disembarking-فصيلة' || activeView === 't55-62-disembarking-سرية') && <T55_62DisembarkingView activeView={activeView as T55_62DisembarkingViewId} openView={openView as (view: T55_62DisembarkingViewId) => void} />}
              {(activeView === 't55-62-pre-combat' || activeView === 't55-62-pre-combat-سرية' || activeView === 't55-62-pre-combat-كتيبة') && <T55_62PreCombatView activeView={activeView as T55_62PreCombatViewId} openView={openView as (view: T55_62PreCombatViewId) => void} />}
              {(activeView === 't55-62-open-pre-combat' || activeView === 't55-62-open-pre-combat-فصيلة' || activeView === 't55-62-open-pre-combat-سرية' || activeView === 't55-62-open-pre-combat-كتيبة') && <T55_62OpenPreCombatView activeView={activeView as T55_62OpenPreCombatViewId} openView={openView as (view: T55_62OpenPreCombatViewId) => void} />}
              {activeView === 'hundred' && <HundredMeterCategories openView={openView} />}
              {(activeView === 'stomach-category-one' || activeView === 'stomach-category-two' || activeView === 'stomach-category-three' || activeView === 'stomach-category-four' || activeView === 'stomach-category-five' || activeView === 'stomach-category-six' || activeView === 'stomach-category-seven') && <StomachView activeView={activeView} />}
              {activeView === 'one-km' && <OneKilometerCategories openView={openView} />}
              {activeView === 'two-km' && <TwoKilometerCategories openView={openView} />}
              {activeView === 'three-km' && <ThreeKilometerCategories openView={openView} />}
              {activeView === 'five-km' && <FiveKilometerCategories openView={openView} />}
              {activeView === '4x100' && <FourXHundredMeterCategories openView={openView} />}
              {(activeView === 'one-km-category-one' || activeView === 'one-km-category-two' || activeView === 'one-km-category-three' || activeView === 'one-km-category-four' || activeView === 'one-km-category-five' || activeView === 'one-km-category-six' || activeView === 'one-km-category-seven') && <OneKilometerView activeView={activeView} openView={openView} />}
              {isHundredMeterCategoryView(activeView) && <HundredMeterView activeView={activeView} openView={openView} />}
              {isTwoKilometerCategoryView(activeView) && <TwoKilometerView activeView={activeView} />}
              {isThreeKilometerCategoryView(activeView) && <ThreeKilometerView activeView={activeView} />}
              {isFiveKilometerCategoryView(activeView) && <FiveKilometerView activeView={activeView} />}
              {isFourXHundredMeterCategoryView(activeView) && <FourXHundredMeterView activeView={activeView} />}

            </div>
          )}
        </section>

        <nav aria-label="التنقل الرئيسي" className="fixed inset-x-0 bottom-0 z-10 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-8"><div className="mx-auto flex max-w-lg items-center gap-2 rounded-[1.75rem] border border-white/10 bg-[#101216]/95 p-2 shadow-[0_-10px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl">{navigationItems.map(({ id, label, icon: Icon }) => { const isActive = activeView === id; return <Button key={id} type="button" variant="ghost" aria-current={isActive ? 'page' : undefined} onClick={() => openView(id)} className={`h-16 flex-1 rounded-2xl text-sm font-semibold transition-all duration-300 sm:h-[4.5rem] ${isActive ? 'bg-[#101216] text-white shadow-lg shadow-black/20 hover:bg-[#17191f]' : 'text-white/55 hover:bg-white/[0.07] hover:text-white'}`}><Icon data-icon="inline-start" aria-hidden="true" /><span>{label}</span></Button> })}</div></nav>
      </div>
    </main>
  )
}

function SectionButton({ label, description, icon: Icon, onClick }: { label: string; description: string; icon: typeof Timer; onClick: () => void }) {
  return <Button type="button" variant="ghost" onClick={onClick} className="group h-auto w-full min-w-0 justify-between rounded-3xl border border-white/10 bg-[#101216] px-3 py-4 text-right text-white hover:bg-[#17191f] sm:p-5"><span className="flex min-w-0 flex-1 items-center gap-3"><span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Icon className="size-6" aria-hidden="true" /></span><span className="flex min-w-0 flex-1 flex-col items-start gap-1"><span className="block text-sm font-semibold leading-7 whitespace-normal break-words sm:text-lg sm:leading-normal">{label}</span><span className="block text-xs font-normal leading-5 text-white/50 whitespace-normal break-words">{description}</span></span></span><ChevronLeft className="size-5 shrink-0 text-white/35 group-hover:-translate-x-1" aria-hidden="true" /></Button>
}

function InfoPanel({ title, text, icon: Icon }: { title: string; text: string; icon: typeof BookOpen }) {
  return <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center py-16 text-center"><div className="mb-6 flex size-20 items-center justify-center rounded-[2rem] bg-rose-200/10 text-rose-200"><Icon className="size-9" aria-hidden="true" /></div><h2 className="text-3xl font-semibold">{title}</h2><p className="mt-5 max-w-md text-sm leading-8 text-white/55">{text}</p></div>
}
