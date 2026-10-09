'use client'

import { Timer } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { SportsCategoryCard, SportsTestHeroHeader } from '@/components/sports/sports-category-card'
import { RUN_100M_CATEGORY_ONE_DEFAULT, RUN_100M_CATEGORY_ONE_EVENT } from '@/lib/sports/100-meter/1'
import { RUN_100M_CATEGORY_TWO_DEFAULT, RUN_100M_CATEGORY_TWO_EVENT } from '@/lib/sports/100-meter/2'
import { RUN_100M_CATEGORY_THREE_DEFAULT, RUN_100M_CATEGORY_THREE_EVENT } from '@/lib/sports/100-meter/3'
import { RUN_100M_CATEGORY_FOUR_DEFAULT, RUN_100M_CATEGORY_FOUR_EVENT } from '@/lib/sports/100-meter/4'
import { RUN_100M_CATEGORY_FIVE_DEFAULT, RUN_100M_CATEGORY_FIVE_EVENT } from '@/lib/sports/100-meter/5'
import { RUN_100M_CATEGORY_SIX_DEFAULT, RUN_100M_CATEGORY_SIX_EVENT } from '@/lib/sports/100-meter/6'
import { RUN_100M_CATEGORY_SEVEN_DEFAULT, RUN_100M_CATEGORY_SEVEN_EVENT } from '@/lib/sports/100-meter/7'

export type HundredMeterViewId =
  | 'category-one'
  | 'category-two'
  | 'category-three'
  | 'category-four'
  | 'category-five'
  | 'category-six'
  | 'category-seven'

export function HundredMeterView({ activeView }: { activeView: HundredMeterViewId; openView?: (view: HundredMeterViewId) => void }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {activeView === 'category-one' && <TimedTestPanel event={RUN_100M_CATEGORY_ONE_EVENT} category={RUN_100M_CATEGORY_ONE_DEFAULT} />}
      {activeView === 'category-two' && <TimedTestPanel event={RUN_100M_CATEGORY_TWO_EVENT} category={RUN_100M_CATEGORY_TWO_DEFAULT} />}
      {activeView === 'category-three' && <TimedTestPanel event={RUN_100M_CATEGORY_THREE_EVENT} category={RUN_100M_CATEGORY_THREE_DEFAULT} />}
      {activeView === 'category-four' && <TimedTestPanel event={RUN_100M_CATEGORY_FOUR_EVENT} category={RUN_100M_CATEGORY_FOUR_DEFAULT} />}
      {activeView === 'category-five' && <TimedTestPanel event={RUN_100M_CATEGORY_FIVE_EVENT} category={RUN_100M_CATEGORY_FIVE_DEFAULT} />}
      {activeView === 'category-six' && <TimedTestPanel event={RUN_100M_CATEGORY_SIX_EVENT} category={RUN_100M_CATEGORY_SIX_DEFAULT} />}
      {activeView === 'category-seven' && <TimedTestPanel event={RUN_100M_CATEGORY_SEVEN_EVENT} category={RUN_100M_CATEGORY_SEVEN_DEFAULT} />}
    </div>
  )
}

export function HundredMeterCategories({ openView }: { openView: (view: HundredMeterViewId) => void }) {
  const categories = [
    { id: 'category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: 'category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
    { id: 'category-five', title: 'الفئة الخامسة', birthYears: 'مواليد 1981 – 1985', num: 5 },
    { id: 'category-six', title: 'الفئة السادسة', birthYears: 'مواليد 1976 – 1980', num: 6 },
    { id: 'category-seven', title: 'الفئة السابعة', birthYears: 'مواليد 1971 – 1975', num: 7 },
  ] as const

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <SportsTestHeroHeader
        title="سباق الجري 100 متر (سرعة انفجارية)"
        subtitle="اختر الفئة العمرية للبدء في تشغيل ساعة التوقيت وتسجيل أزمنة المتدربين والنتائج التقديرية."
        unitBadge="اختبار السرعة"
      />

      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            subtitle="اختبار السرعة القصوى (100م)"
            birthYears={cat.birthYears}
            categoryNumber={cat.num}
            icon={Timer}
            onClick={() => openView(cat.id as HundredMeterViewId)}
          />
        ))}
      </div>
    </div>
  )
}
