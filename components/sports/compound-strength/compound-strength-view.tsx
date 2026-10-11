'use client'

import { Dumbbell } from 'lucide-react'
import { RepetitionTestPanel } from '@/components/timer/repetition-test-panel'
import { SportsCategoryCard } from '@/components/sports/sports-category-card'
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
  const categories = [
    { id: 'compound-strength-category-one', title: 'الفئة الأولى', birthYears: 'مواليد 2001 – 2008', num: 1 },
    { id: 'compound-strength-category-two', title: 'الفئة الثانية', birthYears: 'مواليد 1996 – 2000', num: 2 },
    { id: 'compound-strength-category-three', title: 'الفئة الثالثة', birthYears: 'مواليد 1991 – 1995', num: 3 },
    { id: 'compound-strength-category-four', title: 'الفئة الرابعة', birthYears: 'مواليد 1986 – 1990', num: 4 },
    { id: 'compound-strength-category-five', title: 'الفئة الخامسة', birthYears: 'مواليد 1981 – 1985', num: 5 },
    { id: 'compound-strength-category-six', title: 'الفئة السادسة', birthYears: 'مواليد 1976 – 1980', num: 6 },
    { id: 'compound-strength-category-seven', title: 'الفئة السابعة', birthYears: 'مواليد 1971 – 1975', num: 7 },
  ] as const

  return (
      <div className="grid gap-3.5 sm:gap-4">
        {categories.map((cat) => (
          <SportsCategoryCard
            key={cat.id}
            title={cat.title}
            birthYears={cat.birthYears}
            icon={Dumbbell}
            onClick={() => openView(cat.id as keyof typeof compoundEvents)}
          />
        ))}
      </div>
  )
}

export function CompoundStrengthView({ categoryId = 'compound-strength-category-one' }: { categoryId?: keyof typeof compoundEvents }) {
  const { event, category } = compoundEvents[categoryId]
  return (
    <RepetitionTestPanel
      eventName={event.name}
      category={category}
      standards={event.standards}
      scoreResolver={(count) =>
        event.scores.find((entry) => entry.count !== undefined && count >= entry.count)?.score ?? 0
      }
    />
  )
}
