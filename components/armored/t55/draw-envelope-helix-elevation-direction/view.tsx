'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT55DrawEnvelopeHelixElevationDirectionEvent,
  T55_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS,
  T55_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS,
} from '@/lib/armored/t55/draw-envelope-helix-elevation-direction'

export function T55DrawEnvelopeHelixElevationDirectionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT55DrawEnvelopeHelixElevationDirectionEvent()}
        showRecord={false}
        trainerInstructions={T55_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS}
        trainerRatings={T55_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
