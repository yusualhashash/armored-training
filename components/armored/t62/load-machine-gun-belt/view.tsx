'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62LoadMachineGunBeltEvent,
  T62_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS,
  T62_LOAD_MACHINE_GUN_BELT_RATINGS,
} from '@/lib/armored/t62/load-machine-gun-belt'

export function T62LoadMachineGunBeltView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62LoadMachineGunBeltEvent()}
        showRecord={false}
        trainerInstructions={T62_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS}
        trainerRatings={T62_LOAD_MACHINE_GUN_BELT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
