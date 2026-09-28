'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72PreCombatToColumnUnit } from '@/lib/armored/t72/pre-combat-to-column'
import {
  createT72PreCombatToColumnEvent,
  T72_PRE_COMBAT_TO_COLUMN_UNITS,
} from '@/lib/armored/t72/pre-combat-to-column'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72PreCombatToColumnViewId =
  | 't72-pre-combat-to-column'
  | 't72-pre-combat-to-column-سرية'
  | 't72-pre-combat-to-column-كتيبة'

const UNIT_SUBJECT: Record<T72PreCombatToColumnUnit, string> = {
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T72PreCombatToColumnUnit, Array<{ score: string; rating: string }>> = {
  سرية: [
    { score: '1:40 دقيقة', rating: 'ممتاز' },
    { score: '1:50 دقيقة', rating: 'جيد' },
    { score: '2:10 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '3:00 دقيقة', rating: 'ممتاز' },
    { score: '3:20 دقيقة', rating: 'جيد' },
    { score: '4:00 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72PreCombatToColumnUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب ما قبل القتال. وبإيعاز (إشارة) تغيّر الوحدات ترتيبها إلى الرتل وتتابع الحركة.`
}

export function T72PreCombatToColumnView({
  activeView,
  openView,
}: {
  activeView: T72PreCombatToColumnViewId
  openView: (view: T72PreCombatToColumnViewId) => void
}) {
  if (activeView === 't72-pre-combat-to-column') {
    return (
      <div className="grid gap-4">
        {T72_PRE_COMBAT_TO_COLUMN_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(
                `t72-pre-combat-to-column-${unit.id}` as T72PreCombatToColumnViewId,
              )
            }
            dir="ltr"
            className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"
          >
            <ChevronLeft
              className="order-1 text-white/40 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />

            <span dir="rtl" className="order-2 flex items-center gap-4">
              <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                <Shield aria-hidden="true" />
              </span>

              <span className="flex flex-col items-start gap-1">
                <span className="text-lg font-semibold">{unit.label}</span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-pre-combat-to-column-',
    '',
  ) as T72PreCombatToColumnUnit

  return (
    <TimerPanel
      event={createT72PreCombatToColumnEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}