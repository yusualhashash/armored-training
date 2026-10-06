'use client'

import { Medal } from 'lucide-react';

import { SectionButton } from '@/components/app/section-button';
import { TimedTestPanel } from '@/components/timer/timed-distance-panel';
import { RUN_3KM_CATEGORY_ONE_DEFAULT, RUN_3KM_CATEGORY_ONE_EVENT } from '@/lib/sports/3-km/1';
import { RUN_3KM_CATEGORY_TWO_DEFAULT, RUN_3KM_CATEGORY_TWO_EVENT } from '@/lib/sports/3-km/2';
import { RUN_3KM_CATEGORY_THREE_DEFAULT, RUN_3KM_CATEGORY_THREE_EVENT } from '@/lib/sports/3-km/3';

export type ThreeKilometerViewId = 'three-km-category-one' | 'three-km-category-two' | 'three-km-category-three'

const categoryData = {
  'three-km-category-one': { event: RUN_3KM_CATEGORY_ONE_EVENT, category: RUN_3KM_CATEGORY_ONE_DEFAULT },
  'three-km-category-two': { event: RUN_3KM_CATEGORY_TWO_EVENT, category: RUN_3KM_CATEGORY_TWO_DEFAULT },
  'three-km-category-three': { event: RUN_3KM_CATEGORY_THREE_EVENT, category: RUN_3KM_CATEGORY_THREE_DEFAULT },
} as const

const categories = [
  ['three-km-category-one', 'الفئة الأولى', 'مواليد 2001 – 2008'],
  ['three-km-category-two', 'الفئة الثانية', 'مواليد 1996 – 2000'],
  ['three-km-category-three', 'الفئة الثالثة', 'مواليد 1991 – 1995'],
] as const satisfies readonly [ThreeKilometerViewId, string, string][]

export function ThreeKilometerView({ activeView }: { activeView: ThreeKilometerViewId }) {
  const { event, category } = categoryData[activeView]
  return <div className="mx-auto w-full max-w-2xl"><TimedTestPanel event={event} category={category} /></div>
}

export function ThreeKilometerCategories({ openView }: { openView: (view: ThreeKilometerViewId) => void }) {
  return (
    <div className="mx-auto grid w-full max-w-2xl gap-3 sm:gap-4">
      {categories.map(([id, label, birthYears]) => (
        <SectionButton
          key={id}
          label={label}
          description={birthYears}
          icon={Medal}
          onClick={() => openView(id)}
        />
      ))}
    </div>
  )
}
