'use client'

import { Medal } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { Button } from '@/components/ui/button'
import { RUN_100M_CATEGORY_TWO_DEFAULT, RUN_100M_CATEGORY_TWO_EVENT } from '@/lib/sports/100-meter/2'
import { RUN_100M_CATEGORY_THREE_DEFAULT, RUN_100M_CATEGORY_THREE_EVENT } from '@/lib/sports/100-meter/3'
import { RUN_100M_CATEGORY_FOUR_DEFAULT, RUN_100M_CATEGORY_FOUR_EVENT } from '@/lib/sports/100-meter/4'
import { RUN_100M_CATEGORY_FIVE_DEFAULT, RUN_100M_CATEGORY_FIVE_EVENT } from '@/lib/sports/100-meter/5'
import { RUN_100M_CATEGORY_SIX_DEFAULT, RUN_100M_CATEGORY_SIX_EVENT } from '@/lib/sports/100-meter/6'
import { RUN_100M_CATEGORY_SEVEN_DEFAULT, RUN_100M_CATEGORY_SEVEN_EVENT } from '@/lib/sports/100-meter/7'
import { RUN_100M_CATEGORY_ONE_DEFAULT, RUN_100M_CATEGORY_ONE_EVENT } from '@/lib/sports/100-meter/1';

export type HundredMeterViewId = 'category-one' | 'category-two' | 'category-three' | 'category-four' | 'category-five' | 'category-six' | 'category-seven'

export function HundredMeterView({ activeView, openView }: { activeView: HundredMeterViewId; openView: (view: HundredMeterViewId) => void }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {activeView === 'category-one' && <TimedTestPanel event={RUN_100M_CATEGORY_ONE_EVENT} category={RUN_100M_CATEGORY_ONE_DEFAULT} />}
      {activeView === 'category-two' && <TimedTestPanel event={RUN_100M_CATEGORY_TWO_EVENT} category={RUN_100M_CATEGORY_TWO_DEFAULT} />}
      {activeView === 'category-three' && <TimedTestPanel event={RUN_100M_CATEGORY_THREE_EVENT} category={RUN_100M_CATEGORY_THREE_DEFAULT} />}
      {activeView === 'category-four' && <TimedTestPanel event={RUN_100M_CATEGORY_FOUR_EVENT} category={RUN_100M_CATEGORY_FOUR_DEFAULT} />}
      {activeView === 'category-five' && <TimedTestPanel event={RUN_100M_CATEGORY_FIVE_EVENT} category={RUN_100M_CATEGORY_FIVE_DEFAULT} />}
      {activeView === 'category-six' && <TimedTestPanel event={RUN_100M_CATEGORY_SIX_EVENT} category={RUN_100M_CATEGORY_SIX_DEFAULT} />}
      {activeView === 'category-seven' && <TimedTestPanel event={RUN_100M_CATEGORY_SEVEN_EVENT} category={RUN_100M_CATEGORY_SEVEN_DEFAULT} />}
    </div>
  )
}

export function HundredMeterCategories({ openView }: { openView: (view: HundredMeterViewId) => void }) {
  return (
    <div className="mx-auto grid w-full max-w-2xl gap-4">
      <SectionButton label="الفئة الأولى" description="مواليد 2001 – 2008" onClick={() => openView('category-one')} />
      <SectionButton label="الفئة الثانية" description="مواليد 1996 – 2000" onClick={() => openView('category-two')} />
      <SectionButton label="الفئة الثالثة" description="مواليد 1991 – 1995" onClick={() => openView('category-three')} />
      <SectionButton label="الفئة الرابعة" description="مواليد 1986 – 1990" onClick={() => openView('category-four')} />
      <SectionButton label="الفئة الخامسة" description="مواليد 1981 – 1985" onClick={() => openView('category-five')} />
      <SectionButton label="الفئة السادسة" description="مواليد 1976 – 1980" onClick={() => openView('category-six')} />
      <SectionButton label="الفئة السابعة" description="مواليد 1971 – 1975" onClick={() => openView('category-seven')} />
    </div>
  )
}

function SectionButton({ label, description, onClick }: { label: string; description: string; onClick: () => void }) {
  return <Button type="button" variant="ghost" onClick={onClick} className="group h-auto w-full justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"><span className="flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200"><Medal className="size-6" aria-hidden="true" /></span><span className="flex flex-col items-start gap-1"><span className="text-lg font-semibold">{label}</span><span className="text-xs font-normal text-white/50">{description}</span></span></span></Button>
}
