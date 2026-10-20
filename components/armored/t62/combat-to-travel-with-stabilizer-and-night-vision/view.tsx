'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62CombatToTravelWithStabilizerAndNightVisionEvent,
  T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS,
  T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS,
} from '@/lib/armored/t62/combat-to-travel-with-stabilizer-and-night-vision'

export function T62CombatToTravelWithStabilizerAndNightVisionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62CombatToTravelWithStabilizerAndNightVisionEvent()}
        showRecord={false}
        trainerInstructions={T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS}
        trainerRatings={T62_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
