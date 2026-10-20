'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72TransferRoundsEvent,
  T72_TRANSFER_ROUNDS_INSTRUCTIONS,
  T72_TRANSFER_ROUNDS_RATINGS,
} from '@/lib/armored/t72/transfer-rounds-to-carousel'

export function T72TransferRoundsToCarouselView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72TransferRoundsEvent()}
        showRecord={false}
        trainerInstructions={T72_TRANSFER_ROUNDS_INSTRUCTIONS}
        trainerRatings={T72_TRANSFER_ROUNDS_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
