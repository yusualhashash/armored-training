'use client'

import { Medal } from 'lucide-react';

import { SectionButton } from '@/components/app/section-button';

import { TimedTestPanel } from '@/components/timer/timed-distance-panel';
import {
    SPRINT_4X100M_CATEGORY_ONE_DEFAULT,
    SPRINT_4X100M_CATEGORY_ONE_EVENT,
} from '@/lib/sports/4x100-meter/1';
import {
    SPRINT_4X100M_CATEGORY_TWO_DEFAULT,
    SPRINT_4X100M_CATEGORY_TWO_EVENT,
} from '@/lib/sports/4x100-meter/2';
import {
    SPRINT_4X100M_CATEGORY_THREE_DEFAULT,
    SPRINT_4X100M_CATEGORY_THREE_EVENT,
} from '@/lib/sports/4x100-meter/3';
import {
    SPRINT_4X100M_CATEGORY_FOUR_DEFAULT,
    SPRINT_4X100M_CATEGORY_FOUR_EVENT,
} from '@/lib/sports/4x100-meter/4';
import {
    SPRINT_4X100M_CATEGORY_FIVE_DEFAULT,
    SPRINT_4X100M_CATEGORY_FIVE_EVENT,
} from '@/lib/sports/4x100-meter/5';
import {
    SPRINT_4X100M_CATEGORY_SIX_DEFAULT,
    SPRINT_4X100M_CATEGORY_SIX_EVENT,
} from '@/lib/sports/4x100-meter/6';

export type FourXHundredMeterViewId =
  | '4x100-category-one'
  | '4x100-category-two'
  | '4x100-category-three'
  | '4x100-category-four'
  | '4x100-category-five'
  | '4x100-category-six'

const categoryData = {
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
}

export function FourXHundredMeterView({
  activeView,
}: {
  activeView: FourXHundredMeterViewId
}) {
  const { event, category } = categoryData[activeView]

  return (
    <div className="mx-auto w-full max-w-2xl">
      <TimedTestPanel event={event} category={category} />
    </div>
  )
}

export function FourXHundredMeterCategories({
  openView,
}: {
  openView: (view: FourXHundredMeterViewId) => void
}) {
  const categories = [
    ['4x100-category-one', 'الفئة الأولى', 'مواليد 2001 – 2008'],
    ['4x100-category-two', 'الفئة الثانية', 'مواليد 1996 – 2000'],
    ['4x100-category-three', 'الفئة الثالثة', 'مواليد 1991 – 1995'],
    ['4x100-category-four', 'الفئة الرابعة', 'مواليد 1986 – 1990'],
    ['4x100-category-five', 'الفئة الخامسة', 'مواليد 1981 – 1985'],
    ['4x100-category-six', 'الفئة السادسة', 'مواليد 1976 – 1980'],
  ] as const

  return (
    <div className="mx-auto grid w-full max-w-2xl gap-3 sm:gap-4">
      {categories.map(([view, title, birthYears]) => (
        <SectionButton
          key={view}
          label={title}
          description={birthYears}
          icon={Medal}
          onClick={() => openView(view)}
        />
      ))}
    </div>
  )
}