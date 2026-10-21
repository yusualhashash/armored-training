'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62AssemblyMachineGunEvent,
  T62_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS,
  T62_ASSEMBLY_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t62/assembly-machine-gun'

export function T62AssemblyMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62AssemblyMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T62_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T62_ASSEMBLY_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
