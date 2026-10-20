'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55CombatToTravelWithStabilizerAndNightVisionEvent,
  T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS,
  T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS,
} from '@/lib/armored/t55/combat-to-travel-with-stabilizer-and-night-vision'

export function T55CombatToTravelWithStabilizerAndNightVisionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55CombatToTravelWithStabilizerAndNightVisionEvent()}
        showRecord={false}
        trainerInstructions={T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS}
        trainerRatings={T55_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
