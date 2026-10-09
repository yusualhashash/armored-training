'use client'

import { Dumbbell } from 'lucide-react'

import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { Button } from '@/components/ui/button'
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
  return (
    <div className="grid gap-4">
      {Object.values(pushupEvents).map(({ category }) => (
        <Button key={category.id} type="button" variant="ghost" onClick={() => openView(`pushups-category-${['one', 'two', 'three', 'four', 'five', 'six', 'seven'][category.id - 1]}` as 'pushups-category-one' | 'pushups-category-two' | 'pushups-category-three' | 'pushups-category-four' | 'pushups-category-five' | 'pushups-category-six' | 'pushups-category-seven')} className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]">
          <span className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Dumbbell aria-hidden="true" /></span>
            <span className="flex flex-col items-start gap-1"><span className="text-lg font-semibold">{category.name.replace('العمرية ', '')} <span className="text-sm font-normal text-white/60">(ثني ومد الذراعين)</span></span><span className="text-xs text-white/50">مواليد {category.birthYears}</span></span>
          </span>
        </Button>
      ))}
    </div>
  )
}
