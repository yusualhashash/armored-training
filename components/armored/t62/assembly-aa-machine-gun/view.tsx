'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62AssemblyAAMachineGunEvent,
  T62_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS,
  T62_ASSEMBLY_AA_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t62/assembly-aa-machine-gun'

export function T62AssemblyAAMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62AssemblyAAMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T62_ASSEMBLY_AA_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T62_ASSEMBLY_AA_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
