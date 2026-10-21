'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72LoadMachineGunBeltRakovaEvent,
  T72_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS,
  T72_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS,
} from '@/lib/armored/t72/load-machine-gun-belt-rakova'

export function T72LoadMachineGunBeltRakovaView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72LoadMachineGunBeltRakovaEvent()}
        showRecord={false}
        trainerInstructions={T72_LOAD_MACHINE_GUN_BELT_RAKOVA_INSTRUCTIONS}
        trainerRatings={T72_LOAD_MACHINE_GUN_BELT_RAKOVA_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
