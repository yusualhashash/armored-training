'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, Shield } from 'lucide-react'
import {
  createT55_62CombatToPreCombatEvent,
  type T55_62CombatToPreCombatUnit,
  T55_62_COMBAT_TO_PRE_COMBAT_UNITS,
} from '@/lib/armored/t55-62/combat-to-pre-combat'
import { TimerPanel } from '@/components/timer/timer-panel'

export type T55_62CombatToPreCombatViewId =
  | 't55-62-combat-to-pre-combat'
  | 't55-62-combat-to-pre-combat-فصيلة'
  | 't55-62-combat-to-pre-combat-سرية'
  | 't55-62-combat-to-pre-combat-كتيبة'

export function T55_62CombatToPreCombatView({
  activeView,
  openView,
}: {
  activeView: T55_62CombatToPreCombatViewId
  openView: (view: T55_62CombatToPreCombatViewId) => void
}) {
  if (activeView === 't55-62-combat-to-pre-combat') {
    return (
      <div className="grid gap-4">
        {T55_62_COMBAT_TO_PRE_COMBAT_UNITS.map((unit) => (
          <Button
            key={unit.id}
            type="button"
            variant="ghost"
            onClick={() =>
              openView(`t55-62-combat-to-pre-combat-${unit.id}` as T55_62CombatToPreCombatViewId)
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

  const unit = activeView.replace('t55-62-combat-to-pre-combat-', '') as T55_62CombatToPreCombatUnit

  return <TimerPanel event={createT55_62CombatToPreCombatEvent(unit)} showRecord={false} />
}
