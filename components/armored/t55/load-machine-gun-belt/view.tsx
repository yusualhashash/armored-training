'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55LoadMachineGunBeltEvent,
  T55_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS,
  T55_LOAD_MACHINE_GUN_BELT_RATINGS,
} from '@/lib/armored/t55/load-machine-gun-belt'

export function T55LoadMachineGunBeltView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55LoadMachineGunBeltEvent()}
        showRecord={false}
        trainerInstructions={T55_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS}
        trainerRatings={T55_LOAD_MACHINE_GUN_BELT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
