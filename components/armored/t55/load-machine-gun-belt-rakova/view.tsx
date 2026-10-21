'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55LoadMachineGunBeltRakovaEvent,
  T55_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS,
  T55_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS,
} from '@/lib/armored/t55/load-machine-gun-belt-rakova'

export function T55LoadMachineGunBeltRakovaView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55LoadMachineGunBeltRakovaEvent()}
        showRecord={false}
        trainerInstructions={T55_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS}
        trainerRatings={T55_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
