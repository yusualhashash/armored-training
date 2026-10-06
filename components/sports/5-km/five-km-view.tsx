'use client'

import { Medal } from 'lucide-react';

import { SectionButton } from '@/components/app/section-button';
import { TimedTestPanel } from '@/components/timer/timed-distance-panel';
import { RUN_5KM_CATEGORY_ONE_DEFAULT, RUN_5KM_CATEGORY_ONE_EVENT } from '@/lib/sports/5-km/1';
import { RUN_5KM_CATEGORY_TWO_DEFAULT, RUN_5KM_CATEGORY_TWO_EVENT } from '@/lib/sports/5-km/2';
import { RUN_5KM_CATEGORY_THREE_DEFAULT, RUN_5KM_CATEGORY_THREE_EVENT } from '@/lib/sports/5-km/3';

export type FiveKilometerViewId = 'five-km-category-one' | 'five-km-category-two' | 'five-km-category-three'

const categoryData = {
  'five-km-category-one': { event: RUN_5KM_CATEGORY_ONE_EVENT, category: RUN_5KM_CATEGORY_ONE_DEFAULT },
  'five-km-category-two': { event: RUN_5KM_CATEGORY_TWO_EVENT, category: RUN_5KM_CATEGORY_TWO_DEFAULT },
  'five-km-category-three': { event: RUN_5KM_CATEGORY_THREE_EVENT, category: RUN_5KM_CATEGORY_THREE_DEFAULT },
} satisfies Record<FiveKilometerViewId, { event: typeof RUN_5KM_CATEGORY_ONE_EVENT; category: typeof RUN_5KM_CATEGORY_ONE_DEFAULT }>

export function FiveKilometerView({ activeView }: { activeView: FiveKilometerViewId }) {
  const { event, category } = categoryData[activeView]
  return <div className="mx-auto w-full max-w-2xl"><TimedTestPanel event={event} category={category} /></div>
}

export function FiveKilometerCategories({ openView }: { openView: (view: FiveKilometerViewId) => void }) {
  const categories = [
    ['five-km-category-one', 'الفئة الأولى', 'مواليد 2001 – 2008'],
    ['five-km-category-two', 'الفئة الثانية', 'مواليد 1996 – 2000'],
    ['five-km-category-three', 'الفئة الثالثة', 'مواليد 1991 – 1995'],
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
