'use client'

import { Medal } from 'lucide-react'

import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { Button } from '@/components/ui/button'

import { STOMACH_CATEGORY_ONE_DEFAULT } from '@/lib/sports/stomach/1/categories'
import { STOMACH_CATEGORY_ONE_EVENT } from '@/lib/sports/stomach/1'
import { STOMACH_CATEGORY_TWO_DEFAULT } from '@/lib/sports/stomach/2/categories'
import { STOMACH_CATEGORY_TWO_EVENT } from '@/lib/sports/stomach/2'
import { STOMACH_CATEGORY_THREE_DEFAULT } from '@/lib/sports/stomach/3/categories'
import { STOMACH_CATEGORY_THREE_EVENT } from '@/lib/sports/stomach/3'
import { STOMACH_CATEGORY_FOUR_DEFAULT } from '@/lib/sports/stomach/4/categories'
import { STOMACH_CATEGORY_FOUR_EVENT } from '@/lib/sports/stomach/4'
import { STOMACH_CATEGORY_FIVE_DEFAULT } from '@/lib/sports/stomach/5/categories'
import { STOMACH_CATEGORY_FIVE_EVENT } from '@/lib/sports/stomach/5'
import { STOMACH_CATEGORY_SIX_DEFAULT } from '@/lib/sports/stomach/6/categories'
import { STOMACH_CATEGORY_SIX_EVENT } from '@/lib/sports/stomach/6'
import { STOMACH_CATEGORY_SEVEN_DEFAULT } from '@/lib/sports/stomach/7/categories'
import { STOMACH_CATEGORY_SEVEN_EVENT } from '@/lib/sports/stomach/7'

export type StomachViewId =
  | 'stomach-category-one'
  | 'stomach-category-two'
  | 'stomach-category-three'
  | 'stomach-category-four'
  | 'stomach-category-five'
  | 'stomach-category-six'
  | 'stomach-category-seven'

const categoryData = {
  'stomach-category-one': {
    event: STOMACH_CATEGORY_ONE_EVENT,
    category: STOMACH_CATEGORY_ONE_DEFAULT,
  },
  'stomach-category-two': {
    event: STOMACH_CATEGORY_TWO_EVENT,
    category: STOMACH_CATEGORY_TWO_DEFAULT,
  },
  'stomach-category-three': {
    event: STOMACH_CATEGORY_THREE_EVENT,
    category: STOMACH_CATEGORY_THREE_DEFAULT,
  },
  'stomach-category-four': {
    event: STOMACH_CATEGORY_FOUR_EVENT,
    category: STOMACH_CATEGORY_FOUR_DEFAULT,
  },
  'stomach-category-five': {
    event: STOMACH_CATEGORY_FIVE_EVENT,
    category: STOMACH_CATEGORY_FIVE_DEFAULT,
  },
  'stomach-category-six': {
    event: STOMACH_CATEGORY_SIX_EVENT,
    category: STOMACH_CATEGORY_SIX_DEFAULT,
  },
  'stomach-category-seven': {
    event: STOMACH_CATEGORY_SEVEN_EVENT,
    category: STOMACH_CATEGORY_SEVEN_DEFAULT,
  },
}

export function StomachView({
  activeView,
}: {
  activeView: StomachViewId
}) {
  const { event, category } = categoryData[activeView]

  return (
    <div className="mx-auto w-full max-w-2xl">
      <RepetitionTestPanel
        eventName={event.name}
        category={category}
        standards={event.standards}
        scoreResolver={(count) =>
          event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0
        }
      />
    </div>
  )
}

export function StomachCategories({
  openView,
}: {
  openView: (view: StomachViewId) => void
}) {
  const categories = [
    [
      'stomach-category-one',
      'الفئة الأولى',
      'ثبات متوسط',
      'مواليد 2001 – 2008',
    ],
    [
      'stomach-category-two',
      'الفئة الثانية',
      'ثبات متوسط',
      'مواليد 1996 – 2000',
    ],
    [
      'stomach-category-three',
      'الفئة الثالثة',
      'ثبات متوسط',
      'مواليد 1991 – 1995',
    ],
    [
      'stomach-category-four',
      'الفئة الرابعة',
      'ثبات متوسط',
      'مواليد 1986 – 1990',
    ],
    [
      'stomach-category-five',
      'الفئة الخامسة',
      'ثبات متوسط',
      'مواليد 1981 – 1985',
    ],
    [
      'stomach-category-six',
      'الفئة السادسة',
      'ذراعين عالياً',
      'مواليد 1976 – 1980',
    ],
    [
      'stomach-category-seven',
      'الفئة السابعة',
      'ذراعين عالياً',
      'مواليد 1971 – 1975',
    ],
  ] as const

  return (
    <div className="mx-auto grid w-full max-w-2xl gap-4">
      {categories.map(([view, title, description, birthYears]) => (
        <Button
          key={view}
          type="button"
          variant="ghost"
          onClick={() => openView(view)}
          className="group h-auto w-full justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"
        >
          <span className="flex items-center gap-4">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
              <Medal className="size-6" aria-hidden="true" />
            </span>

            <span className="flex flex-col items-start gap-1">
              <span className="text-lg font-semibold">
                {title}{' '}
                <span className="text-sm font-normal text-white/60">
                  ({description})
                </span>
              </span>

              <span className="text-xs font-normal text-white/50">
                {birthYears}
              </span>
            </span>
          </span>
        </Button>
      ))}
    </div>
  )
}
