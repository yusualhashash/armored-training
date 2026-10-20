'use client'

import { TimerPanel } from '@/components/timer/timer-panel'
import {
  createT72CarouselAmmunitionEvent,
  T72_CAROUSEL_AMMUNITION_INSTRUCTIONS,
  T72_CAROUSEL_AMMUNITION_RATINGS,
} from '@/lib/armored/t72/carousel-ammunition-stacking'

export function T72CarouselAmmunitionStackingView() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <TimerPanel
        event={createT72CarouselAmmunitionEvent()}
        showRecord={false}
        trainerInstructions={T72_CAROUSEL_AMMUNITION_INSTRUCTIONS}
        trainerRatings={T72_CAROUSEL_AMMUNITION_RATINGS}
        ratingsTitle="التقدير حسب الزمن"
      />
    </div>
  )
}
