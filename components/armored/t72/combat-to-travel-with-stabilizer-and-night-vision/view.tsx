'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72CombatToTravelWithStabilizerAndNightVisionEvent,
  T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS,
  T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS,
} from '@/lib/armored/t72/combat-to-travel-with-stabilizer-and-night-vision'

export function T72CombatToTravelWithStabilizerAndNightVisionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72CombatToTravelWithStabilizerAndNightVisionEvent()}
        showRecord={false}
        trainerInstructions={T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_INSTRUCTIONS}
        trainerRatings={T72_COMBAT_TO_TRAVEL_WITH_STABILIZER_AND_NIGHT_VISION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
