'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62PartialDisassemblyAAMachineGunEvent,
  T62_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS,
  T62_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t62/partial-disassembly-aa-machine-gun'

export function T62PartialDisassemblyAAMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62PartialDisassemblyAAMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T62_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T62_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
