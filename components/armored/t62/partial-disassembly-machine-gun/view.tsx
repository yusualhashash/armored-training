'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62PartialDisassemblyMachineGunEvent,
  T62_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS,
  T62_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t62/partial-disassembly-machine-gun'

export function T62PartialDisassemblyMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62PartialDisassemblyMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T62_PARTIAL_DISASSEMBLY_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T62_PARTIAL_DISASSEMBLY_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
