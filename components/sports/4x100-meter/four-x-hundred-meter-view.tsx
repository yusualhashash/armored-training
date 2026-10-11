'use client'

import { Timer } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { SportsCategoryCard } from '@/components/sports/sports-category-card'
import { SPRINT_4X100M_CATEGORY_ONE_DEFAULT, SPRINT_4X100M_CATEGORY_ONE_EVENT } from '@/lib/sports/4x100-meter/1'
import { SPRINT_4X100M_CATEGORY_TWO_DEFAULT, SPRINT_4X100M_CATEGORY_TWO_EVENT } from '@/lib/sports/4x100-meter/2'
import { SPRINT_4X100M_CATEGORY_THREE_DEFAULT, SPRINT_4X100M_CATEGORY_THREE_EVENT } from '@/lib/sports/4x100-meter/3'
import { SPRINT_4X100M_CATEGORY_FOUR_DEFAULT, SPRINT_4X100M_CATEGORY_FOUR_EVENT } from '@/lib/sports/4x100-meter/4'
import { SPRINT_4X100M_CATEGORY_FIVE_DEFAULT, SPRINT_4X100M_CATEGORY_FIVE_EVENT } from '@/lib/sports/4x100-meter/5'
import { SPRINT_4X100M_CATEGORY_SIX_DEFAULT, SPRINT_4X100M_CATEGORY_SIX_EVENT } from '@/lib/sports/4x100-meter/6'

export type FourXHundredMeterViewId =
  | '4x100-category-one'
  | '4x100-category-two'
  | '4x100-category-three'
  | '4x100-category-four'
  | '4x100-category-five'
  | '4x100-category-six'

const categoryEvents = {
  '4x100-category-one': {
    event: SPRINT_4X100M_CATEGORY_ONE_EVENT,
    category: SPRINT_4X100M_CATEGORY_ONE_DEFAULT,
  },
  '4x100-category-two': {
    event: SPRINT_4X100M_CATEGORY_TWO_EVENT,
    category: SPRINT_4X100M_CATEGORY_TWO_DEFAULT,
  },
  '4x100-category-three': {
    event: SPRINT_4X100M_CATEGORY_THREE_EVENT,
    category: SPRINT_4X100M_CATEGORY_THREE_DEFAULT,
  },
  '4x100-category-four': {
    event: SPRINT_4X100M_CATEGORY_FOUR_EVENT,
    category: SPRINT_4X100M_CATEGORY_FOUR_DEFAULT,
  },
  '4x100-category-five': {
    event: SPRINT_4X100M_CATEGORY_FIVE_EVENT,
    category: SPRINT_4X100M_CATEGORY_FIVE_DEFAULT,
  },
  '4x100-category-six': {
    event: SPRINT_4X100M_CATEGORY_SIX_EVENT,
    category: SPRINT_4X100M_CATEGORY_SIX_DEFAULT,
  },
} as const

export function FourXHundredMeterView({
  activeView,
}: {
  activeView: FourXHundredMeterViewId
}) {
  const selected = categoryEvents[activeView]

  return (
    <div className="mx-auto w-full max-w-2xl">
      <TimedTestPanel event={selected.event} category={selected.category} />
    </div>
  )
}

export function FourXHundredMeterCategories({
  openView,
}: {
  openView: (view: FourXHundredMeterViewId) => void
}) {
  const categories = [
    { id: '4x100-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: '4x100-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: '4x100-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: '4x100-category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
    { id: '4x100-category-five', title: 'الفئة الخامسة', birthYears: 'مواليد 1981 – 1985', num: 5 },
    { id: '4x100-category-six', title: 'الفئة السادسة', birthYears: 'مواليد 1976 – 1980', num: 6 },
  ] as const

  return (
      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            birthYears={cat.birthYears}
            icon={Timer}
            onClick={() => openView(cat.id as FourXHundredMeterViewId)}
          />
        ))}
      </div>
  )
}
