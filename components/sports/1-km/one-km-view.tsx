'use client'

import { Medal } from 'lucide-react';

import { SectionButton } from '@/components/app/section-button';
import { TimedTestPanel } from '@/components/timer/timed-distance-panel';
import { RUN_1KM_CATEGORY_ONE_DEFAULT, RUN_1KM_CATEGORY_ONE_EVENT } from '@/lib/sports/1-km/1';
import { RUN_1KM_CATEGORY_TWO_DEFAULT, RUN_1KM_CATEGORY_TWO_EVENT } from '@/lib/sports/1-km/2';
import { RUN_1KM_CATEGORY_THREE_DEFAULT, RUN_1KM_CATEGORY_THREE_EVENT } from '@/lib/sports/1-km/3';
import { RUN_1KM_CATEGORY_FOUR_DEFAULT, RUN_1KM_CATEGORY_FOUR_EVENT } from '@/lib/sports/1-km/4';
import { RUN_1KM_CATEGORY_FIVE_DEFAULT, RUN_1KM_CATEGORY_FIVE_EVENT } from '@/lib/sports/1-km/5';
import { RUN_1KM_CATEGORY_SIX_DEFAULT, RUN_1KM_CATEGORY_SIX_EVENT } from '@/lib/sports/1-km/6';
import { RUN_1KM_CATEGORY_SEVEN_DEFAULT, RUN_1KM_CATEGORY_SEVEN_EVENT } from '@/lib/sports/1-km/7';

export type OneKilometerViewId = 'one-km-category-one' | 'one-km-category-two' | 'one-km-category-three' | 'one-km-category-four' | 'one-km-category-five' | 'one-km-category-six' | 'one-km-category-seven'

export function OneKilometerView({ activeView, openView }: { activeView: OneKilometerViewId; openView: (view: OneKilometerViewId) => void }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {activeView === 'one-km-category-one' && <TimedTestPanel event={RUN_1KM_CATEGORY_ONE_EVENT} category={RUN_1KM_CATEGORY_ONE_DEFAULT} />}
      {activeView === 'one-km-category-two' && <TimedTestPanel event={RUN_1KM_CATEGORY_TWO_EVENT} category={RUN_1KM_CATEGORY_TWO_DEFAULT} />}
      {activeView === 'one-km-category-three' && <TimedTestPanel event={RUN_1KM_CATEGORY_THREE_EVENT} category={RUN_1KM_CATEGORY_THREE_DEFAULT} />}
      {activeView === 'one-km-category-four' && <TimedTestPanel event={RUN_1KM_CATEGORY_FOUR_EVENT} category={RUN_1KM_CATEGORY_FOUR_DEFAULT} />}
      {activeView === 'one-km-category-five' && <TimedTestPanel event={RUN_1KM_CATEGORY_FIVE_EVENT} category={RUN_1KM_CATEGORY_FIVE_DEFAULT} />}
      {activeView === 'one-km-category-six' && <TimedTestPanel event={RUN_1KM_CATEGORY_SIX_EVENT} category={RUN_1KM_CATEGORY_SIX_DEFAULT} />}
      {activeView === 'one-km-category-seven' && <TimedTestPanel event={RUN_1KM_CATEGORY_SEVEN_EVENT} category={RUN_1KM_CATEGORY_SEVEN_DEFAULT} />}
    </div>
  )
}

export function OneKilometerCategories({ openView }: { openView: (view: OneKilometerViewId) => void }) {
  return (
    <div className="mx-auto grid w-full max-w-2xl gap-3 sm:gap-4">
      <SectionButton label="الفئة الأولى" description="مواليد 2001 – 2008" icon={Medal} onClick={() => openView('one-km-category-one')} />
      <SectionButton label="الفئة الثانية" description="مواليد 1996 – 2000" icon={Medal} onClick={() => openView('one-km-category-two')} />
      <SectionButton label="الفئة الثالثة" description="مواليد 1991 – 1995" icon={Medal} onClick={() => openView('one-km-category-three')} />
      <SectionButton label="الفئة الرابعة" description="مواليد 1986 – 1990" icon={Medal} onClick={() => openView('one-km-category-four')} />
      <SectionButton label="الفئة الخامسة" description="مواليد 1981 – 1985" icon={Medal} onClick={() => openView('one-km-category-five')} />
      <SectionButton label="الفئة السادسة" description="مواليد 1976 – 1980" icon={Medal} onClick={() => openView('one-km-category-six')} />
      <SectionButton label="الفئة السابعة" description="مواليد 1971 – 1975" icon={Medal} onClick={() => openView('one-km-category-seven')} />
    </div>
  )
}
