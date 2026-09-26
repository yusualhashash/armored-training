'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import type { T72PreCombatUnit } from '@/lib/armored/t72/pre-combat'
import { createT72PreCombatEvent, T72_PRE_COMBAT_UNITS } from '@/lib/armored/t72/pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T72PreCombatViewId =
  | 't72-pre-combat'
  | 't72-pre-combat-فصيلة'
  | 't72-pre-combat-سرية'
  | 't72-pre-combat-كتيبة'

export function T72PreCombatView({
  activeView,
  openView,
}: {
  activeView: T72PreCombatViewId
  openView: (view: T72PreCombatViewId) => void
}) {
  if (activeView === 't72-pre-combat') {
    return (
      <div className="grid gap-4">
        {T72_PRE_COMBAT_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t72-pre-combat-${unit.id}` as T72PreCombatViewId)
            }
            dir="ltr"
            className="group flex h-auto w-full items-center justify-between rounded-3xl border border-white/10 bg-[#101216] p-5 text-right text-white hover:bg-[#17191f]"
          >
            <ChevronLeft
              className="order-1 text-white/40 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />

            <span
              dir="rtl"
              className="order-2 flex items-center gap-4"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200">
                <Shield aria-hidden="true" />
              </span>

              <span className="flex flex-col items-start gap-1">
                <span className="text-lg font-semibold">
                  {unit.label}
                </span>

                <span className="text-xs text-white/50">
                  الانتقال من ترتيب القتال الى ترتيب ما قبل القتال — {unit.label}
                </span>
              </span>
            </span>
          </Button>
        ))}
      </div>
    )
  }

  const unit = activeView.replace('t72-pre-combat-', '') as T72PreCombatUnit

  return (
    <TimerPanel
      event={createT72PreCombatEvent(unit)}
      showRecord={false}
    />
  )
}
