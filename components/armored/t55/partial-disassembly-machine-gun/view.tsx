'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55PartialDisassemblyMachineGunEvent,
  T55_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS,
  T55_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t55/partial-disassembly-machine-gun'

export function T55PartialDisassemblyMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55PartialDisassemblyMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T55_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T55_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
