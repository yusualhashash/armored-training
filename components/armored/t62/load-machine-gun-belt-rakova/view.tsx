'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62LoadMachineGunBeltRakovaEvent,
  T62_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS,
  T62_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS,
} from '@/lib/armored/t62/load-machine-gun-belt-rakova'

export function T62LoadMachineGunBeltRakovaView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62LoadMachineGunBeltRakovaEvent()}
        showRecord={false}
        trainerInstructions={T62_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS}
        trainerRatings={T62_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
