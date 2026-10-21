'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55ReplaceHeavyMachineGunBarrelEvent,
  T55_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS,
  T55_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS,
} from '@/lib/armored/t55/replace-heavy-machine-gun-barrel'

export function T55ReplaceHeavyMachineGunBarrelView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55ReplaceHeavyMachineGunBarrelEvent()}
        showRecord={false}
        trainerInstructions={T55_REPLACE_HEAVY_MACHINE_GUN_BARREL_INSTRUCTIONS}
        trainerRatings={T55_REPLACE_HEAVY_MACHINE_GUN_BARREL_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
