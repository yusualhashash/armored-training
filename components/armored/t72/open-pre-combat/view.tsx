'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72OpenPreCombatUnit } from '@/lib/armored/t72/open-pre-combat'
import {
  createT72OpenPreCombatEvent,
  T72_OPEN_PRE_COMBAT_UNITS,
} from '@/lib/armored/t72/open-pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72OpenPreCombatViewId =
  | 't72-open-pre-combat'
  | 't72-open-pre-combat-فصيلة'
  | 't72-open-pre-combat-سرية'
  | 't72-open-pre-combat-كتيبة'

const UNIT_SUBJECT: Record<T72OpenPreCombatUnit, string> = {
  فصيلة: 'الفصيلة',
  سرية: 'السرية',
  كتيبة: 'الكتيبة',
}

const UNIT_RATINGS: Record <T72OpenPreCombatUnit, { score: string; rating: string }[]> = {
  فصيلة: [
    { score: '35 ثا', rating: 'ممتاز' },
    { score: '40 ثا', rating: 'جيد' },
    { score: '50 ثا', rating: 'مقبول' },
  ],
  سرية: [
    { score: '55 ثا', rating: 'ممتاز' },
    { score: '1:00 دقيقة', rating: 'جيد' },
    { score: '1:10 دقيقة', rating: 'مقبول' },
  ],
  كتيبة: [
    { score: '2:45 دقيقة', rating: 'ممتاز' },
    { score: '3:00 دقيقة', rating: 'جيد' },
    { score: '3:30 دقيقة', rating: 'مقبول' },
  ],
}

function getInstructions(unit: T72OpenPreCombatUnit) {
  const subject = UNIT_SUBJECT[unit]
  if (!subject) return 'لا يوجد تعليمات خاصة بهذا القسم'

  return `${subject} تهاجم بترتيب ما قبل القتال (الفصيلة بالرتل)، وبإيعاز (إشارة) تنفتح الوحدات بترتيب القتال وتتابع الحركة.`
}

export function T72OpenPreCombatView({
  activeView,
  openView,
}: {
  activeView: T72OpenPreCombatViewId
  openView: (view: T72OpenPreCombatViewId) => void
}) {
  if (activeView === 't72-open-pre-combat') {
    return (
      <div className="grid gap-4">
        {T72_OPEN_PRE_COMBAT_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(
                `t72-open-pre-combat-${unit.id}` as T72OpenPreCombatViewId,
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
    't72-open-pre-combat-',
    '',
  ) as T72OpenPreCombatUnit

  return (
    <TimerPanel
      event={createT72OpenPreCombatEvent(unit)}
      showRecord={false}
      trainerInstructions={getInstructions(unit)}
      trainerRatings={UNIT_RATINGS[unit]}
      ratingsTitle="التقدير حسب الزمن"
    />
  )
}