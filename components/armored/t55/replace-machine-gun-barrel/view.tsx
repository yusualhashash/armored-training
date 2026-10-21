'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55ReplaceMachineGunBarrelEvent,
  T55_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS,
  T55_REPLACE_MACHINE_GUN_BARREL_RATINGS,
} from '@/lib/armored/t55/replace-machine-gun-barrel'

export function T55ReplaceMachineGunBarrelView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55ReplaceMachineGunBarrelEvent()}
        showRecord={false}
        trainerInstructions={T55_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS}
        trainerRatings={T55_REPLACE_MACHINE_GUN_BARREL_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
