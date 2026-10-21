'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72AssemblyAAMachineGunEvent,
  T72_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS,
  T72_ASSEMBLY_AA_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t72/assembly-aa-machine-gun'

export function T72AssemblyAAMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72AssemblyAAMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T72_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T72_ASSEMBLY_AA_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
