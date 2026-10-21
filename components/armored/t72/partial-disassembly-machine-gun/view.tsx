'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72PartialDisassemblyMachineGunEvent,
  T72_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS,
  T72_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t72/partial-disassembly-machine-gun'

export function T72PartialDisassemblyMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72PartialDisassemblyMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T72_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T72_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
