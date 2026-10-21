'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62ReplaceMachineGunBarrelEvent,
  T62_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS,
  T62_REPLACE_MACHINE_GUN_BARREL_RATINGS,
} from '@/lib/armored/t62/replace-machine-gun-barrel'

export function T62ReplaceMachineGunBarrelView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62ReplaceMachineGunBarrelEvent()}
        showRecord={false}
        trainerInstructions={T62_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS}
        trainerRatings={T62_REPLACE_MACHINE_GUN_BARREL_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
