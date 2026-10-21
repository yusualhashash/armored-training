'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62ReplaceHeavyMachineGunBarrelEvent,
  T62_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS,
  T62_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS,
} from '@/lib/armored/t62/replace-heavy-machine-gun-barrel'

export function T62ReplaceHeavyMachineGunBarrelView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62ReplaceHeavyMachineGunBarrelEvent()}
        showRecord={false}
        trainerInstructions={T62_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS}
        trainerRatings={T62_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
