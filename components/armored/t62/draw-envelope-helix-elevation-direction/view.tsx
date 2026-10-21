'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT62DrawEnvelopeHelixElevationDirectionEvent,
  T62_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS,
  T62_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS,
} from '@/lib/armored/t62/draw-envelope-helix-elevation-direction'

export function T62DrawEnvelopeHelixElevationDirectionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT62DrawEnvelopeHelixElevationDirectionEvent()}
        showRecord={false}
        trainerInstructions={T62_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS}
        trainerRatings={T62_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
