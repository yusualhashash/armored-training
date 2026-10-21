'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62LoadAAMachineGunBeltEvent,
  T62_LOAD_AA_MACHINE_GUN_BELT_INSTRUCTIONS,
  T62_LOAD_AA_MACHINE_GUN_BELT_RATINGS,
} from '@/lib/armored/t62/load-aa-machine-gun-belt'

export function T62LoadAAMachineGunBeltView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62LoadAAMachineGunBeltEvent()}
        showRecord={false}
        trainerInstructions={T62_LOAD_AA_MACHINE_GUN_BELT_INSTRUCTIONS}
        trainerRatings={T62_LOAD_AA_MACHINE_GUN_BELT_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
