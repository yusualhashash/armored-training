'use client'

import { Timer } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { SportsCategoryCard } from '@/components/sports/sports-category-card'
import { RUN_3KM_CATEGORY_ONE_DEFAULT, RUN_3KM_CATEGORY_ONE_EVENT } from '@/lib/sports/3-km/1'
import { RUN_3KM_CATEGORY_TWO_DEFAULT, RUN_3KM_CATEGORY_TWO_EVENT } from '@/lib/sports/3-km/2'
import { RUN_3KM_CATEGORY_THREE_DEFAULT, RUN_3KM_CATEGORY_THREE_EVENT } from '@/lib/sports/3-km/3'

export type ThreeKilometerViewId =
  | 'three-km-category-one'
  | 'three-km-category-two'
  | 'three-km-category-three'

const categoryData = {
  'three-km-category-one': { event: RUN_3KM_CATEGORY_ONE_EVENT, category: RUN_3KM_CATEGORY_ONE_DEFAULT },
  'three-km-category-two': { event: RUN_3KM_CATEGORY_TWO_EVENT, category: RUN_3KM_CATEGORY_TWO_DEFAULT },
  'three-km-category-three': { event: RUN_3KM_CATEGORY_THREE_EVENT, category: RUN_3KM_CATEGORY_THREE_DEFAULT },
} as const

const categories = [
  { id: 'three-km-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
  { id: 'three-km-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
  { id: 'three-km-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
] as const

export function ThreeKilometerView({ activeView }: { activeView: ThreeKilometerViewId }) {
  const { event, category } = categoryData[activeView]
  return (
    <div className="mx-auto w-full max-w-2xl">
      <TimedTestPanel event={event} category={category} />
    </div>
  )
}

export function ThreeKilometerCategories({ openView }: { openView: (view: ThreeKilometerViewId) => void }) {
  return (
      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            birthYears={cat.birthYears}
            icon={Timer}
            onClick={() => openView(cat.id as ThreeKilometerViewId)}
          />
        ))}
      </div>
  )
}
