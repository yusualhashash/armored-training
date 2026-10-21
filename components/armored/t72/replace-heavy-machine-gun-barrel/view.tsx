'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72ReplaceHeavyMachineGunBarrelEvent,
  T72_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS,
  T72_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS,
} from '@/lib/armored/t72/replace-heavy-machine-gun-barrel'

export function T72ReplaceHeavyMachineGunBarrelView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72ReplaceHeavyMachineGunBarrelEvent()}
        showRecord={false}
        trainerInstructions={T72_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS}
        trainerRatings={T72_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
