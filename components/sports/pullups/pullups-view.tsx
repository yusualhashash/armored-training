'use client'

import { Dumbbell } from 'lucide-react'

import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { Button } from '@/components/ui/button'
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
  return (
    <div className="grid gap-4">
      {Object.entries(pullupEvents).map(([view, { category }]) => (
        <Button key={view} type="button" variant="ghost" onClick={() => openView(view as keyof typeof pullupEvents)} className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]">
          <span className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Dumbbell aria-hidden="true" /></span>
            <span className="flex flex-col items-start gap-1"><span className="text-lg font-semibold">{category.name.replace('العمرية ', '')} <span className="text-sm font-normal text-white/60">(سحب الجسم على الثابت)</span></span><span className="text-xs text-white/50">مواليد {category.birthYears}</span></span>
          </span>
        </Button>
      ))}
    </div>
  )
}

export function PullupsView({ categoryId = 'pullups-category-one' }: { categoryId?: keyof typeof pullupEvents }) {
  const { event, category } = pullupEvents[categoryId]
  return <RepetitionTestPanel eventName={event.name} category={category} standards={event.standards} scoreResolver={(count) => event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0} showTimer={false} />
}
