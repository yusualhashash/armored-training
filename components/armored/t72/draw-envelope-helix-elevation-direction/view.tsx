'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72DrawEnvelopeHelixElevationDirectionEvent,
  T72_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS,
  T72_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS,
} from '@/lib/armored/t72/draw-envelope-helix-elevation-direction'

export function T72DrawEnvelopeHelixElevationDirectionView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72DrawEnvelopeHelixElevationDirectionEvent()}
        showRecord={false}
        trainerInstructions={T72_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_INSTRUCTIONS}
        trainerRatings={T72_DRAW_ENVELOPE_HELIX_ELEVATION_DIRECTION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
