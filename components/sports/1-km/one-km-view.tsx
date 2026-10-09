'use client'

import { Timer } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { SportsCategoryCard, SportsTestHeroHeader } from '@/components/sports/sports-category-card'
import { RUN_1KM_CATEGORY_ONE_DEFAULT, RUN_1KM_CATEGORY_ONE_EVENT } from '@/lib/sports/1-km/1'
import { RUN_1KM_CATEGORY_TWO_DEFAULT, RUN_1KM_CATEGORY_TWO_EVENT } from '@/lib/sports/1-km/2'
import { RUN_1KM_CATEGORY_THREE_DEFAULT, RUN_1KM_CATEGORY_THREE_EVENT } from '@/lib/sports/1-km/3'
import { RUN_1KM_CATEGORY_FOUR_DEFAULT, RUN_1KM_CATEGORY_FOUR_EVENT } from '@/lib/sports/1-km/4'
import { RUN_1KM_CATEGORY_FIVE_DEFAULT, RUN_1KM_CATEGORY_FIVE_EVENT } from '@/lib/sports/1-km/5'
import { RUN_1KM_CATEGORY_SIX_DEFAULT, RUN_1KM_CATEGORY_SIX_EVENT } from '@/lib/sports/1-km/6'
import { RUN_1KM_CATEGORY_SEVEN_DEFAULT, RUN_1KM_CATEGORY_SEVEN_EVENT } from '@/lib/sports/1-km/7'

export type OneKilometerViewId =
  | 'one-km-category-one'
  | 'one-km-category-two'
  | 'one-km-category-three'
  | 'one-km-category-four'
  | 'one-km-category-five'
  | 'one-km-category-six'
  | 'one-km-category-seven'

export function OneKilometerView({
  activeView,
}: {
  activeView: OneKilometerViewId
  openView?: (view: any) => void
}) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {activeView === 'one-km-category-one' && <TimedTestPanel event={RUN_1KM_CATEGORY_ONE_EVENT} category={RUN_1KM_CATEGORY_ONE_DEFAULT} />}
      {activeView === 'one-km-category-two' && <TimedTestPanel event={RUN_1KM_CATEGORY_TWO_EVENT} category={RUN_1KM_CATEGORY_TWO_DEFAULT} />}
      {activeView === 'one-km-category-three' && <TimedTestPanel event={RUN_1KM_CATEGORY_THREE_EVENT} category={RUN_1KM_CATEGORY_THREE_DEFAULT} />}
      {activeView === 'one-km-category-four' && <TimedTestPanel event={RUN_1KM_CATEGORY_FOUR_EVENT} category={RUN_1KM_CATEGORY_FOUR_DEFAULT} />}
      {activeView === 'one-km-category-five' && <TimedTestPanel event={RUN_1KM_CATEGORY_FIVE_EVENT} category={RUN_1KM_CATEGORY_FIVE_DEFAULT} />}
      {activeView === 'one-km-category-six' && <TimedTestPanel event={RUN_1KM_CATEGORY_SIX_EVENT} category={RUN_1KM_CATEGORY_SIX_DEFAULT} />}
      {activeView === 'one-km-category-seven' && <TimedTestPanel event={RUN_1KM_CATEGORY_SEVEN_EVENT} category={RUN_1KM_CATEGORY_SEVEN_DEFAULT} />}
    </div>
  )
}

export function OneKilometerCategories({ openView }: { openView: (view: OneKilometerViewId) => void }) {
  const categories = [
    { id: 'one-km-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'one-km-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'one-km-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: 'one-km-category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
    { id: 'one-km-category-five', title: 'الفئة الخامسة', birthYears: 'مواليد 1981 – 1985', num: 5 },
    { id: 'one-km-category-six', title: 'الفئة السادسة', birthYears: 'مواليد 1976 – 1980', num: 6 },
    { id: 'one-km-category-seven', title: 'الفئة السابعة', birthYears: 'مواليد 1971 – 1975', num: 7 },
  ] as const

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <SportsTestHeroHeader
        title="سباق الجري 1 كم (القدرة والتحمل)"
        subtitle="اختر الفئة العمرية للبدء في تشغيل العداد وتسجيل أزمنة المتدربين والنتائج التقديرية."
        unitBadge="اختبار التحمل السريع"
      />

      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            subtitle="اختبار الجري مسافة 1000 متر"
            birthYears={cat.birthYears}
            categoryNumber={cat.num}
            icon={Timer}
            onClick={() => openView(cat.id as OneKilometerViewId)}
          />
        ))}
      </div>
    </div>
  )
}
