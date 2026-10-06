'use client'

import { Dumbbell } from 'lucide-react'

import { SectionButton } from '@/components/app/section-button'
import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
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
    <div className="mx-auto grid w-full max-w-2xl gap-3 sm:gap-4">
      {Object.entries(pullupEvents).map(([view, { category }]) => (
        <SectionButton
          key={view}
          label={category.name.replace('العمرية ', '')}
          subLabel="سحب الجسم على الثابت"
          description={`مواليد ${category.birthYears}`}
          icon={Dumbbell}
          onClick={() => openView(view as keyof typeof pullupEvents)}
        />
      ))}
    </div>
  )
}

export function PullupsView({ categoryId = 'pullups-category-one' }: { categoryId?: keyof typeof pullupEvents }) {
  const { event, category } = pullupEvents[categoryId]
  return <RepetitionTestPanel eventName={event.name} category={category} standards={event.standards} scoreResolver={(count) => event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0} showTimer={false} />
}
