'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72LoadMachineGunBeltEvent,
  T72_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS,
  T72_LOAD_MACHINE_GUN_BELT_RATINGS,
} from '@/lib/armored/t72/load-machine-gun-belt'

export function T72LoadMachineGunBeltView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72LoadMachineGunBeltEvent()}
        showRecord={false}
        trainerInstructions={T72_LOAD_MACHINE_GUN_BELT_INSTRUCTIONS}
        trainerRatings={T72_LOAD_MACHINE_GUN_BELT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
