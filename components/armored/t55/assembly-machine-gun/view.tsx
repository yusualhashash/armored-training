'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55AssemblyMachineGunEvent,
  T55_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS,
  T55_ASSEMBLY_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t55/assembly-machine-gun'

export function T55AssemblyMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55AssemblyMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T55_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T55_ASSEMBLY_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
