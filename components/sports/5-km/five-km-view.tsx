'use client'

import { Timer } from 'lucide-react'

import { TimedTestPanel } from '@/components/timer/timed-distance-panel'
import { SportsCategoryCard, SportsTestHeroHeader } from '@/components/sports/sports-category-card'
import { RUN_5KM_CATEGORY_ONE_DEFAULT, RUN_5KM_CATEGORY_ONE_EVENT } from '@/lib/sports/5-km/1'
import { RUN_5KM_CATEGORY_TWO_DEFAULT, RUN_5KM_CATEGORY_TWO_EVENT } from '@/lib/sports/5-km/2'
import { RUN_5KM_CATEGORY_THREE_DEFAULT, RUN_5KM_CATEGORY_THREE_EVENT } from '@/lib/sports/5-km/3'

export type FiveKilometerViewId =
  | 'five-km-category-one'
  | 'five-km-category-two'
  | 'five-km-category-three'

const categoryData = {
  'five-km-category-one': { event: RUN_5KM_CATEGORY_ONE_EVENT, category: RUN_5KM_CATEGORY_ONE_DEFAULT },
  'five-km-category-two': { event: RUN_5KM_CATEGORY_TWO_EVENT, category: RUN_5KM_CATEGORY_TWO_DEFAULT },
  'five-km-category-three': { event: RUN_5KM_CATEGORY_THREE_EVENT, category: RUN_5KM_CATEGORY_THREE_DEFAULT },
} satisfies Record<FiveKilometerViewId, { event: typeof RUN_5KM_CATEGORY_ONE_EVENT; category: typeof RUN_5KM_CATEGORY_ONE_DEFAULT }>

export function FiveKilometerView({ activeView }: { activeView: FiveKilometerViewId }) {
  const { event, category } = categoryData[activeView]
  return (
    <div className="mx-auto w-full max-w-2xl">
      <TimedTestPanel event={event} category={category} />
    </div>
  )
}

export function FiveKilometerCategories({ openView }: { openView: (view: FiveKilometerViewId) => void }) {
  const categories = [
    { id: 'five-km-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'five-km-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'five-km-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
  ] as const

  return (
    <div className="mx-auto w-full max-w-2xl space-y-4">
      <SportsTestHeroHeader
        title="سباق الجري 5 كم (التحمل العالي والجلد)"
        subtitle="اختر الفئة العمرية للبدء في توقيت الجري واحتساب الدرجات التقديرية بدقة."
        unitBadge="اختبار التحمل الأقصى"
      />

      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            subtitle="اختبار الجري مسافة 5000 متر"
            birthYears={cat.birthYears}
            categoryNumber={cat.num}
            icon={Timer}
            onClick={() => openView(cat.id as FiveKilometerViewId)}
          />
        ))}
      </div>
    </div>
  )
}
