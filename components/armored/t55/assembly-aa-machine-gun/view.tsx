'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55AssemblyAAMachineGunEvent,
  T55_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS,
  T55_ASSEMBLY_AA_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t55/assembly-aa-machine-gun'

export function T55AssemblyAAMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55AssemblyAAMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T55_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T55_ASSEMBLY_AA_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
