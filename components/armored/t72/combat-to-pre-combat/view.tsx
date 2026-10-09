'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72CombatToPreCombatUnit } from '@/lib/armored/t72/combat-to-pre-combat'
import {
  createT72CombatToPreCombatEvent,
  T72_COMBAT_TO_PRE_COMBAT_UNITS,
} from '@/lib/armored/t72/combat-to-pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72CombatToPreCombatViewId =
  | 't72-combat-to-pre-combat'
  | 't72-combat-to-pre-combat-فصيلة'
  | 't72-combat-to-pre-combat-سرية'
  | 't72-combat-to-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T72CombatToPreCombatUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T72CombatToPreCombatUnit, Array<{ score: string; rating: string }>> = {
  فصيلة: [
    { score: '30 ثا', rating: 'ممتاز' },
    { score: '35 ثا', rating: 'جيد' },
    { score: '42 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '50 ثا', rating: 'ممتاز' },
    { score: '55 ثا', rating: 'جيد' },
    { score: '1:05 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '2:45 دقيقة', rating: 'ممتاز' },
    { score: '3:00 دقيقة', rating: 'جيد' },
    { score: '3:30 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72CombatToPreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب القتال. وبإيعاز (إشارة) تغيّر الوحدات تشكيلها إلى ترتيب ما قبل القتال (الفصيلة إلى الرتل) وتتابع الحركة.`
}

export function T72CombatToPreCombatView({
  activeView,
  openView,
}: {
  activeView: T72CombatToPreCombatViewId
  openView: (view: T72CombatToPreCombatViewId) => void
}) {
  if (activeView === 't72-combat-to-pre-combat') {
    return (
      <div className="grid gap-4">
        {T72_COMBAT_TO_PRE_COMBAT_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(
                `t72-combat-to-pre-combat-${unit.id}` as T72CombatToPreCombatViewId,
              )
            }
            dir="rtl"
            className="group flex min-h-[86px] w-full min-w-0 max-w-full items-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-[#101216] px-3 py-3 text-right text-white hover:bg-[#17191f] sm:min-h-[96px] sm:justify-between sm:p-5"
          >
            <ChevronLeft
              className="order-2 hidden shrink-0 text-white/40 transition-transform group-hover:-translate-x-1 sm:block"
              aria-hidden="true"
            />
            <span
              dir="rtl"
              className="order-1 flex min-w-0 flex-1 items-center gap-3 sm:flex-none sm:gap-4"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                <Shield aria-hidden="true" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
                <span className="text-lg font-semibold">{unit.label}</span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace(
    't72-combat-to-pre-combat-',
    '',
  ) as T72CombatToPreCombatUnit

  return (
    <TimerPanel
      event={createT72CombatToPreCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}