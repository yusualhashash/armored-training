'use client'

import { Medal } from 'lucide-react';

import { SectionButton } from '@/components/app/section-button';
import { TimedTestPanel } from '@/components/timer/timed-distance-panel';
import { RUN_2KM_CATEGORY_ONE_DEFAULT, RUN_2KM_CATEGORY_ONE_EVENT } from '@/lib/sports/2-km/1';
import { RUN_2KM_CATEGORY_TWO_DEFAULT, RUN_2KM_CATEGORY_TWO_EVENT } from '@/lib/sports/2-km/2';
import { RUN_2KM_CATEGORY_THREE_DEFAULT, RUN_2KM_CATEGORY_THREE_EVENT } from '@/lib/sports/2-km/3';
import { RUN_2KM_CATEGORY_FOUR_DEFAULT, RUN_2KM_CATEGORY_FOUR_EVENT } from '@/lib/sports/2-km/4';

export type TwoKilometerViewId = 'two-km-category-one' | 'two-km-category-two' | 'two-km-category-three' | 'two-km-category-four'

const categoryEvents = {
  'two-km-category-one': { event: RUN_2KM_CATEGORY_ONE_EVENT, category: RUN_2KM_CATEGORY_ONE_DEFAULT },
  'two-km-category-two': { event: RUN_2KM_CATEGORY_TWO_EVENT, category: RUN_2KM_CATEGORY_TWO_DEFAULT },
  'two-km-category-three': { event: RUN_2KM_CATEGORY_THREE_EVENT, category: RUN_2KM_CATEGORY_THREE_DEFAULT },
  'two-km-category-four': { event: RUN_2KM_CATEGORY_FOUR_EVENT, category: RUN_2KM_CATEGORY_FOUR_DEFAULT },
} as const

export function TwoKilometerView({ activeView }: { activeView: TwoKilometerViewId }) {
  const selected = categoryEvents[activeView]
  return <div className="mx-auto w-full max-w-2xl"><TimedTestPanel event={selected.event} category={selected.category} /></div>
}

export function TwoKilometerCategories({ openView }: { openView: (view: TwoKilometerViewId) => void }) {
  return (
    <div className="mx-auto grid w-full max-w-2xl gap-3 sm:gap-4">
      {[
        ['two-km-category-one', 'الفئة الأولى', 'مواليد 2001 – 2008'],
        ['two-km-category-two', 'الفئة الثانية', 'مواليد 1996 – 2000'],
        ['two-km-category-three', 'الفئة الثالثة', 'مواليد 1991 – 1995'],
        ['two-km-category-four', 'الفئة الرابعة', 'مواليد 1986 – 1990'],
      ].map(([id, label, birthYears]) => (
        <SectionButton
          key={id}
          label={label}
          description={birthYears}
          icon={Medal}
          onClick={() => openView(id as TwoKilometerViewId)}
        />
      ))}
    </div>
  )
}
