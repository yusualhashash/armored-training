'use client'

import { Medal } from 'lucide-react'

import { TimerPanel } from '@/components/timer/timer-panel'
import { Button } from '@/components/ui/button'
import { RUN_5KM_CATEGORY_ONE_DEFAULT, RUN_5KM_CATEGORY_ONE_EVENT } from '@/lib/sports/5-km/1'
import { RUN_5KM_CATEGORY_TWO_DEFAULT, RUN_5KM_CATEGORY_TWO_EVENT } from '@/lib/sports/5-km/2'
import { RUN_5KM_CATEGORY_THREE_DEFAULT, RUN_5KM_CATEGORY_THREE_EVENT } from '@/lib/sports/5-km/3'

export type FiveKilometerViewId = 'five-km-category-one' | 'five-km-category-two' | 'five-km-category-three'

const categoryData = {
  'five-km-category-one': { event: RUN_5KM_CATEGORY_ONE_EVENT, category: RUN_5KM_CATEGORY_ONE_DEFAULT },
  'five-km-category-two': { event: RUN_5KM_CATEGORY_TWO_EVENT, category: RUN_5KM_CATEGORY_TWO_DEFAULT },
  'five-km-category-three': { event: RUN_5KM_CATEGORY_THREE_EVENT, category: RUN_5KM_CATEGORY_THREE_DEFAULT },
} satisfies Record<FiveKilometerViewId, { event: typeof RUN_5KM_CATEGORY_ONE_EVENT; category: typeof RUN_5KM_CATEGORY_ONE_DEFAULT }>

export function FiveKilometerView({ activeView }: { activeView: FiveKilometerViewId }) {
  const { event, category } = categoryData[activeView]
  return <div className="mx-auto w-full max-w-2xl"><TimerPanel event={event} category={category} /></div>
}

export function FiveKilometerCategories({ openView }: { openView: (view: FiveKilometerViewId) => void }) {
  const categories = [
    ['five-km-category-one', 'الفئة الأولى', 'مواليد 2001 – 2008'],
    ['five-km-category-two', 'الفئة الثانية', 'مواليد 1996 – 2000'],
    ['five-km-category-three', 'الفئة الثالثة', 'مواليد 1991 – 1995'],
  ] as const

  return <div className="mx-auto grid w-full max-w-2xl gap-4">{categories.map(([view, title, birthYears]) => <Button key={view} type="button" variant="ghost" onClick={() => openView(view)} className="group h-auto w-full justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"><span className="flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Medal className="size-6" aria-hidden="true" /></span><span className="flex flex-col items-start gap-1"><span className="text-lg font-semibold">{title}</span><span className="text-xs font-normal text-white/50">{birthYears}</span></span></span></Button>)}</div>
}
