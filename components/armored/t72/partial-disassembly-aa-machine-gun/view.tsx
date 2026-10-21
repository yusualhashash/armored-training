'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72PartialDisassemblyAAMachineGunEvent,
  T72_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS,
  T72_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t72/partial-disassembly-aa-machine-gun'

export function T72PartialDisassemblyAAMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72PartialDisassemblyAAMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T72_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T72_PARTIAL_DISASSEMBLY_AA_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
