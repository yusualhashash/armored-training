'use client'

import { Dumbbell } from 'lucide-react'

import { SectionButton } from '@/components/app/section-button'
import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
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
  const categoryIds = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'] as const

  return (
    <div className="mx-auto grid w-full max-w-2xl gap-3 sm:gap-4">
      {Object.values(pushupEvents).map(({ category }) => (
        <SectionButton
          key={category.id}
          label={category.name.replace('العمرية ', '')}
          subLabel="ثني ومد الذراعين"
          description={`مواليد ${category.birthYears}`}
          icon={Dumbbell}
          onClick={() =>
            openView(`pushups-category-${categoryIds[category.id - 1]}` as Parameters<typeof openView>[0])
          }
        />
      ))}
    </div>
  )
}
