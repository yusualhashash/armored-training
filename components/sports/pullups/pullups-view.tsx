'use client'

import { Dumbbell } from 'lucide-react'

import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { SportsCategoryCard, SportsTestHeroHeader } from '@/components/sports/sports-category-card'
import { PULL_UPS_CATEGORY_ONE_DEFAULT } from '@/lib/sports/pullups/1/categories'
import { PULL_UPS_CATEGORY_ONE_EVENT } from '@/lib/sports/pullups/1'
import { PULL_UPS_CATEGORY_TWO_DEFAULT } from '@/lib/sports/pullups/2/categories'
import { PULL_UPS_CATEGORY_TWO_EVENT } from '@/lib/sports/pullups/2'
import { PULL_UPS_CATEGORY_THREE_DEFAULT } from '@/lib/sports/pullups/3/categories'
import { PULL_UPS_CATEGORY_THREE_EVENT } from '@/lib/sports/pullups/3'
import { PULL_UPS_CATEGORY_FOUR_DEFAULT } from '@/lib/sports/pullups/4/categories'
import { PULL_UPS_CATEGORY_FOUR_EVENT } from '@/lib/sports/pullups/4'
import { PULL_UPS_CATEGORY_FIVE_DEFAULT } from '@/lib/sports/pullups/5/categories'
import { PULL_UPS_CATEGORY_FIVE_EVENT } from '@/lib/sports/pullups/5'
import { PULL_UPS_CATEGORY_SIX_DEFAULT } from '@/lib/sports/pullups/6/categories'
import { PULL_UPS_CATEGORY_SIX_EVENT } from '@/lib/sports/pullups/6'
import { PULL_UPS_CATEGORY_SEVEN_DEFAULT } from '@/lib/sports/pullups/7/categories'
import { PULL_UPS_CATEGORY_SEVEN_EVENT } from '@/lib/sports/pullups/7'

const pullupEvents = {
  'pullups-category-one': { event: PULL_UPS_CATEGORY_ONE_EVENT, category: PULL_UPS_CATEGORY_ONE_DEFAULT },
  'pullups-category-two': { event: PULL_UPS_CATEGORY_TWO_EVENT, category: PULL_UPS_CATEGORY_TWO_DEFAULT },
  'pullups-category-three': { event: PULL_UPS_CATEGORY_THREE_EVENT, category: PULL_UPS_CATEGORY_THREE_DEFAULT },
  'pullups-category-four': { event: PULL_UPS_CATEGORY_FOUR_EVENT, category: PULL_UPS_CATEGORY_FOUR_DEFAULT },
  'pullups-category-five': { event: PULL_UPS_CATEGORY_FIVE_EVENT, category: PULL_UPS_CATEGORY_FIVE_DEFAULT },
  'pullups-category-six': { event: PULL_UPS_CATEGORY_SIX_EVENT, category: PULL_UPS_CATEGORY_SIX_DEFAULT },
  'pullups-category-seven': { event: PULL_UPS_CATEGORY_SEVEN_EVENT, category: PULL_UPS_CATEGORY_SEVEN_DEFAULT },
} as const

export function PullupsCategories({ openView }: { openView: (view: keyof typeof pullupEvents) => void }) {
  const categories = [
    { id: 'pullups-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'pullups-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'pullups-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: 'pullups-category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
    { id: 'pullups-category-five', title: 'الفئة الخامسة', birthYears: 'مواليد 1981 – 1985', num: 5 },
    { id: 'pullups-category-six', title: 'الفئة السادسة', birthYears: 'مواليد 1976 – 1980', num: 6 },
    { id: 'pullups-category-seven', title: 'الفئة السابعة', birthYears: 'مواليد 1971 – 1975', num: 7 },
  ] as const

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <SportsTestHeroHeader
        title="سحب الجسم على الثابت"
      />

      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            birthYears={cat.birthYears}
            icon={Dumbbell}
            onClick={() => openView(cat.id as keyof typeof pullupEvents)}
          />
        ))}
      </div>
    </div>
  )
}

export function PullupsView({ categoryId = 'pullups-category-one' }: { categoryId?: keyof typeof pullupEvents }) {
  const { event, category } = pullupEvents[categoryId]
  return (
    <RepetitionTestPanel
      eventName={event.name}
      category={category}
      standards={event.standards}
      scoreResolver={(count) =>
        event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0
      }
      showTimer={false}
    />
  )
}
