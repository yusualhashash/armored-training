'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55PartialDisassemblyAAMachineGunEvent,
  T55_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS,
  T55_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t55/partial-disassembly-aa-machine-gun'

export function T55PartialDisassemblyAAMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55PartialDisassemblyAAMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T55_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T55_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
