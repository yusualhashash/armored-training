'use client'

import { Dumbbell } from 'lucide-react'

import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { Button } from '@/components/ui/button'
import { COMPOUND_STRENGTH_CATEGORY_ONE_DEFAULT } from '@/lib/sports/compound-strength/1/categories'
import { COMPOUND_STRENGTH_CATEGORY_ONE_EVENT } from '@/lib/sports/compound-strength/1'
import { COMPOUND_STRENGTH_CATEGORY_TWO_DEFAULT } from '@/lib/sports/compound-strength/2/categories'
import { COMPOUND_STRENGTH_CATEGORY_TWO_EVENT } from '@/lib/sports/compound-strength/2'
import { COMPOUND_STRENGTH_CATEGORY_THREE_DEFAULT } from '@/lib/sports/compound-strength/3/categories'
import { COMPOUND_STRENGTH_CATEGORY_THREE_EVENT } from '@/lib/sports/compound-strength/3'
import { COMPOUND_STRENGTH_CATEGORY_FOUR_DEFAULT } from '@/lib/sports/compound-strength/4/categories'
import { COMPOUND_STRENGTH_CATEGORY_FOUR_EVENT } from '@/lib/sports/compound-strength/4'
import { COMPOUND_STRENGTH_CATEGORY_FIVE_DEFAULT } from '@/lib/sports/compound-strength/5/categories'
import { COMPOUND_STRENGTH_CATEGORY_FIVE_EVENT } from '@/lib/sports/compound-strength/5'
import { COMPOUND_STRENGTH_CATEGORY_SIX_DEFAULT } from '@/lib/sports/compound-strength/6/categories'
import { COMPOUND_STRENGTH_CATEGORY_SIX_EVENT } from '@/lib/sports/compound-strength/6'
import { COMPOUND_STRENGTH_CATEGORY_SEVEN_DEFAULT } from '@/lib/sports/compound-strength/7/categories'
import { COMPOUND_STRENGTH_CATEGORY_SEVEN_EVENT } from '@/lib/sports/compound-strength/7'

const compoundEvents = {
  'compound-strength-category-one': { event: COMPOUND_STRENGTH_CATEGORY_ONE_EVENT, category: COMPOUND_STRENGTH_CATEGORY_ONE_DEFAULT },
  'compound-strength-category-two': { event: COMPOUND_STRENGTH_CATEGORY_TWO_EVENT, category: COMPOUND_STRENGTH_CATEGORY_TWO_DEFAULT },
  'compound-strength-category-three': { event: COMPOUND_STRENGTH_CATEGORY_THREE_EVENT, category: COMPOUND_STRENGTH_CATEGORY_THREE_DEFAULT },
  'compound-strength-category-four': { event: COMPOUND_STRENGTH_CATEGORY_FOUR_EVENT, category: COMPOUND_STRENGTH_CATEGORY_FOUR_DEFAULT },
  'compound-strength-category-five': { event: COMPOUND_STRENGTH_CATEGORY_FIVE_EVENT, category: COMPOUND_STRENGTH_CATEGORY_FIVE_DEFAULT },
  'compound-strength-category-six': { event: COMPOUND_STRENGTH_CATEGORY_SIX_EVENT, category: COMPOUND_STRENGTH_CATEGORY_SIX_DEFAULT },
  'compound-strength-category-seven': { event: COMPOUND_STRENGTH_CATEGORY_SEVEN_EVENT, category: COMPOUND_STRENGTH_CATEGORY_SEVEN_DEFAULT },
} as const

export function CompoundStrengthCategories({ openView }: { openView: (view: keyof typeof compoundEvents) => void }) {
  return <div className="grid gap-4">
    {Object.entries(compoundEvents).map(([view, { category }]) => <Button key={view} type="button" variant="ghost" onClick={() => openView(view as keyof typeof compoundEvents)} className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"><span className="flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Dumbbell aria-hidden="true" /></span><span className="flex flex-col items-start gap-1"><span className="text-lg font-semibold">{category.name.replace('العمرية ', '')} <span className="text-sm font-normal text-white/60">(القوة المركبة)</span></span><span className="text-xs text-white/50">مواليد {category.birthYears}</span></span></span></Button>)}
  </div>
}

export function CompoundStrengthView({ categoryId = 'compound-strength-category-one' }: { categoryId?: keyof typeof compoundEvents }) {
  const { event, category } = compoundEvents[categoryId]
  return <RepetitionTestPanel eventName={event.name} category={category} standards={event.standards} scoreResolver={(count) => event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0} />
}
