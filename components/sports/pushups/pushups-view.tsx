'use client'

import { Dumbbell } from 'lucide-react'
import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { SportsCategoryCard } from '@/components/sports/sports-category-card'
import { PUSH_UPS_CATEGORY_ONE_EVENT } from '@/lib/sports/pushups/1'
import { PUSH_UPS_CATEGORY_ONE_DEFAULT } from '@/lib/sports/pushups/1/categories'
import { PUSH_UPS_CATEGORY_TWO_DEFAULT } from '@/lib/sports/pushups/2/categories'
import { PUSH_UPS_CATEGORY_TWO_EVENT } from '@/lib/sports/pushups/2'
import { PUSH_UPS_CATEGORY_THREE_DEFAULT } from '@/lib/sports/pushups/3/categories'
import { PUSH_UPS_CATEGORY_THREE_EVENT } from '@/lib/sports/pushups/3'
import { PUSH_UPS_CATEGORY_FOUR_DEFAULT } from '@/lib/sports/pushups/4/categories'
import { PUSH_UPS_CATEGORY_FOUR_EVENT } from '@/lib/sports/pushups/4'
import { PUSH_UPS_CATEGORY_FIVE_DEFAULT } from '@/lib/sports/pushups/5/categories'
import { PUSH_UPS_CATEGORY_FIVE_EVENT } from '@/lib/sports/pushups/5'
import { PUSH_UPS_CATEGORY_SIX_DEFAULT } from '@/lib/sports/pushups/6/categories'
import { PUSH_UPS_CATEGORY_SIX_EVENT } from '@/lib/sports/pushups/6'
import { PUSH_UPS_CATEGORY_SEVEN_DEFAULT } from '@/lib/sports/pushups/7/categories'
import { PUSH_UPS_CATEGORY_SEVEN_EVENT } from '@/lib/sports/pushups/7'

const pushupEvents = {
  'pushups-category-one': { event: PUSH_UPS_CATEGORY_ONE_EVENT, category: PUSH_UPS_CATEGORY_ONE_DEFAULT },
  'pushups-category-two': { event: PUSH_UPS_CATEGORY_TWO_EVENT, category: PUSH_UPS_CATEGORY_TWO_DEFAULT },
  'pushups-category-three': { event: PUSH_UPS_CATEGORY_THREE_EVENT, category: PUSH_UPS_CATEGORY_THREE_DEFAULT },
  'pushups-category-four': { event: PUSH_UPS_CATEGORY_FOUR_EVENT, category: PUSH_UPS_CATEGORY_FOUR_DEFAULT },
  'pushups-category-five': { event: PUSH_UPS_CATEGORY_FIVE_EVENT, category: PUSH_UPS_CATEGORY_FIVE_DEFAULT },
  'pushups-category-six': { event: PUSH_UPS_CATEGORY_SIX_EVENT, category: PUSH_UPS_CATEGORY_SIX_DEFAULT },
  'pushups-category-seven': { event: PUSH_UPS_CATEGORY_SEVEN_EVENT, category: PUSH_UPS_CATEGORY_SEVEN_DEFAULT },
} as const

export function PushupsView({ categoryId = 'pushups-category-one' }: { categoryId?: keyof typeof pushupEvents }) {
  const { event, category } = pushupEvents[categoryId]
  const scoreResolver = (count: number) => event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0

  return (
    <RepetitionTestPanel
      eventName={event.name}
      category={category}
      standards={event.standards}
      scoreResolver={scoreResolver}
    />
  )
}

export function PushupsCategories({ openView }: { openView: (view: 'pushups-category-one' | 'pushups-category-two' | 'pushups-category-three' | 'pushups-category-four' | 'pushups-category-five' | 'pushups-category-six' | 'pushups-category-seven') => void }) {
  const categories = [
    { id: 'pushups-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'pushups-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'pushups-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: 'pushups-category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
    { id: 'pushups-category-five', title: 'الفئة الخامسة', birthYears: 'مواليد 1981 – 1985', num: 5 },
    { id: 'pushups-category-six', title: 'الفئة السادسة', birthYears: 'مواليد 1976 – 1980', num: 6 },
    { id: 'pushups-category-seven', title: 'الفئة السابعة', birthYears: 'مواليد 1971 – 1975', num: 7 },
  ] as const

  return (
      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            birthYears={cat.birthYears}
            icon={Dumbbell}
            onClick={() => openView(cat.id as any)}
          />
        ))}
      </div>
  )
}
