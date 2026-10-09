'use client'

import { Medal } from 'lucide-react';

import { TimedTestPanel } from '@/components/timer/timed-distance-panel';
import { Button } from '@/components/ui/button';
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
  return <div className="mx-auto grid w-full max-w-2xl gap-4">{categories.map(([id, label, birthYears]) => <Button key={id} type="button" variant="ghost" onClick={() => openView(id)} className="group h-auto w-full justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"><span className="flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Medal className="size-6" aria-hidden="true" /></span><span className="flex flex-col items-start gap-1"><span className="text-lg font-semibold">{label}</span><span className="text-xs font-normal text-white/50">{birthYears}</span></span></span></Button>)}</div>
}
