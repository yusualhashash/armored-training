'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72CombatToTravelWithStabilizerOffEvent,
  T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS,
  T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS,
} from '@/lib/armored/t72/combat-to-travel-with-stabilizer-off'

export function T72CombatToTravelWithStabilizerOffView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72CombatToTravelWithStabilizerOffEvent()}
        showRecord={false}
        trainerInstructions={T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_INSTRUCTIONS}
        trainerRatings={T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_OFF_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
