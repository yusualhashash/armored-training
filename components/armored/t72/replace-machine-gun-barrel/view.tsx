'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72ReplaceMachineGunBarrelEvent,
  T72_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS,
  T72_REPLACE_MACHINE_GUN_BARREL_RATINGS,
} from '@/lib/armored/t72/replace-machine-gun-barrel'

export function T72ReplaceMachineGunBarrelView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72ReplaceMachineGunBarrelEvent()}
        showRecord={false}
        trainerInstructions={T72_REPLACE_MACHINE_GUN_BARREL_INSTRUCTIONS}
        trainerRatings={T72_REPLACE_MACHINE_GUN_BARREL_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
