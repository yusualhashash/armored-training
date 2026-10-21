'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72AssemblyMachineGunEvent,
  T72_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS,
  T72_ASSEMBLY_MACHINE_GUN_RATINGS,
} from '@/lib/armored/t72/assembly-machine-gun'

export function T72AssemblyMachineGunView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72AssemblyMachineGunEvent()}
        showRecord={false}
        trainerInstructions={T72_ASSEMBLY_MACHINE_GUN_INSTRUCTIONS}
        trainerRatings={T72_ASSEMBLY_MACHINE_GUN_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
