'use client'

import { Timer } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { SportsCategoryCard, SportsTestHeroHeader } from '@/components/sports/sports-category-card'
import { RUN_2KM_CATEGORY_ONE_DEFAULT, RUN_2KM_CATEGORY_ONE_EVENT } from '@/lib/sports/2-km/1'
import { RUN_2KM_CATEGORY_TWO_DEFAULT, RUN_2KM_CATEGORY_TWO_EVENT } from '@/lib/sports/2-km/2'
import { RUN_2KM_CATEGORY_THREE_DEFAULT, RUN_2KM_CATEGORY_THREE_EVENT } from '@/lib/sports/2-km/3'
import { RUN_2KM_CATEGORY_FOUR_DEFAULT, RUN_2KM_CATEGORY_FOUR_EVENT } from '@/lib/sports/2-km/4'

export type TwoKilometerViewId =
  | 'two-km-category-one'
  | 'two-km-category-two'
  | 'two-km-category-three'
  | 'two-km-category-four'

const categoryEvents = {
  'two-km-category-one': { event: RUN_2KM_CATEGORY_ONE_EVENT, category: RUN_2KM_CATEGORY_ONE_DEFAULT },
  'two-km-category-two': { event: RUN_2KM_CATEGORY_TWO_EVENT, category: RUN_2KM_CATEGORY_TWO_DEFAULT },
  'two-km-category-three': { event: RUN_2KM_CATEGORY_THREE_EVENT, category: RUN_2KM_CATEGORY_THREE_DEFAULT },
  'two-km-category-four': { event: RUN_2KM_CATEGORY_FOUR_EVENT, category: RUN_2KM_CATEGORY_FOUR_DEFAULT },
} as const

export function TwoKilometerView({ activeView }: { activeView: TwoKilometerViewId }) {
  const selected = categoryEvents[activeView]
  return (
    <div className="mx-auto w-full max-w-2xl">
      <TimedTestPanel event={selected.event} category={selected.category} />
    </div>
  )
}

export function TwoKilometerCategories({ openView }: { openView: (view: TwoKilometerViewId) => void }) {
  const categories = [
    { id: 'two-km-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'two-km-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'two-km-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: 'two-km-category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
  ] as const

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <SportsTestHeroHeader
        title="سباق الجري 2 كم"
      />

      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            subtitle="اختبار الجري مسافة 2000 متر"
            birthYears={cat.birthYears}
            categoryNumber={cat.num}
            icon={Timer}
            onClick={() => openView(cat.id as TwoKilometerViewId)}
          />
        ))}
      </div>
    </div>
  )
}
