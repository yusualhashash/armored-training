import type { ReactNode } from 'react'

import {
  T55_62View,
  type T55_62ViewId,
} from '@/components/armored/t55-62/boarding/view'

import {
  T55_62DisembarkingView,
  type T55_62DisembarkingViewId,
} from '@/components/armored/t55-62/disembarking/view'

import {
  T55_62OpenPreCombatView,
  type T55_62OpenPreCombatViewId,
} from '@/components/armored/t55-62/open-pre-combat/view'

import {
  T55_62PreCombatView,
  type T55_62PreCombatViewId,
} from '@/components/armored/t55-62/pre-combat/view'

import {
  T55_62CombatToPreCombatView,
  type T55_62CombatToPreCombatViewId,
} from '@/components/armored/t55-62/combat-to-pre-combat/view'



import { T72View } from '@/components/armored/t72/boarding/view'

import {
  T72DisembarkingView,
  type T72DisembarkingViewId,
} from '@/components/armored/t72/disembarking/view'

import {
  T72OpenPreCombatView,
  type T72OpenPreCombatViewId,
} from '@/components/armored/t72/open-pre-combat/view'

import {
  T72PreCombatView,
  type T72PreCombatViewId,
} from '@/components/armored/t72/pre-combat/view'

import {
  T72CombatToPreCombatView,
  type T72CombatToPreCombatViewId,
} from '@/components/armored/t72/combat-to-pre-combat/view'

import { T72AmmunitionStackingView } from '@/components/armored/t72/ammunition-stacking/view'
import { T72CarouselAmmunitionStackingView } from '@/components/armored/t72/carousel-ammunition-stacking/view'
import { T72TransferRoundsToCarouselView } from '@/components/armored/t72/transfer-rounds-to-carousel/view'
import { T72TravelToCombatView } from '@/components/armored/t72/travel-to-combat-without-stabilizer/view'
import { T72TravelToCombatWithStabilizerView } from '@/components/armored/t72/travel-to-combat-with-stabilizer/view'
import { T72TravelToCombatWithStabilizerAndNightVisionView } from '@/components/armored/t72/travel-to-combat-with-stabilizer-and-night-vision/view'
import { T72CombatToTravelWithStabilizerOffView } from '@/components/armored/t72/combat-to-travel-with-stabilizer-off/view'
import { T72CombatToTravelWithStabilizerView } from '@/components/armored/t72/combat-to-travel-with-stabilizer/view'
import { T72CombatToTravelWithStabilizerAndNightVisionView } from '@/components/armored/t72/combat-to-travel-with-stabilizer-and-night-vision/view'
import { T72ReplaceFiringPinView } from '@/components/armored/t72/replace-firing-pin/view'
import { T72ReplaceSpringView } from '@/components/armored/t72/replace-spring/view'
import { T72ReplaceMachineGunBarrelView } from '@/components/armored/t72/replace-machine-gun-barrel/view'
import { T72ReplaceHeavyMachineGunBarrelView } from '@/components/armored/t72/replace-heavy-machine-gun-barrel/view'
import { T72PartialDisassemblyMachineGunView } from '@/components/armored/t72/partial-disassembly-machine-gun/view'
import { T72PartialDisassemblyAAMachineGunView } from '@/components/armored/t72/partial-disassembly-aa-machine-gun/view'
import { T72AssemblyMachineGunView } from '@/components/armored/t72/assembly-machine-gun/view'
import { T72AssemblyAAMachineGunView } from '@/components/armored/t72/assembly-aa-machine-gun/view'
import { T55AmmunitionStackingView } from '@/components/armored/t55/ammunition-stacking/view'
import { T55TravelToCombatView } from '@/components/armored/t55/travel-to-combat-without-stabilizer/view'
import { T55TravelToCombatWithStabilizerView } from '@/components/armored/t55/travel-to-combat-with-stabilizer/view'
import { T55TravelToCombatWithStabilizerAndNightVisionView } from '@/components/armored/t55/travel-to-combat-with-stabilizer-and-night-vision/view'
import { T55CombatToTravelWithStabilizerOffView } from '@/components/armored/t55/combat-to-travel-with-stabilizer-off/view'
import { T55CombatToTravelWithStabilizerView } from '@/components/armored/t55/combat-to-travel-with-stabilizer/view'
import { T55CombatToTravelWithStabilizerAndNightVisionView } from '@/components/armored/t55/combat-to-travel-with-stabilizer-and-night-vision/view'
import { T55ReplaceSpringView } from '@/components/armored/t55/replace-spring/view'
import { T55ReplaceMachineGunBarrelView } from '@/components/armored/t55/replace-machine-gun-barrel/view'
import { T55ReplaceHeavyMachineGunBarrelView } from '@/components/armored/t55/replace-heavy-machine-gun-barrel/view'
import { T55PartialDisassemblyMachineGunView } from '@/components/armored/t55/partial-disassembly-machine-gun/view'
import { T55PartialDisassemblyAAMachineGunView } from '@/components/armored/t55/partial-disassembly-aa-machine-gun/view'
import { T55AssemblyMachineGunView } from '@/components/armored/t55/assembly-machine-gun/view'
import { T55AssemblyAAMachineGunView } from '@/components/armored/t55/assembly-aa-machine-gun/view'
import { T62AmmunitionStackingView } from '@/components/armored/t62/ammunition-stacking/view'
import { T62TravelToCombatView } from '@/components/armored/t62/travel-to-combat-without-stabilizer/view'
import { T62TravelToCombatWithStabilizerView } from '@/components/armored/t62/travel-to-combat-with-stabilizer/view'
import { T62TravelToCombatWithStabilizerAndNightVisionView } from '@/components/armored/t62/travel-to-combat-with-stabilizer-and-night-vision/view'
import { T62CombatToTravelWithStabilizerOffView } from '@/components/armored/t62/combat-to-travel-with-stabilizer-off/view'
import { T62CombatToTravelWithStabilizerView } from '@/components/armored/t62/combat-to-travel-with-stabilizer/view'
import { T62CombatToTravelWithStabilizerAndNightVisionView } from '@/components/armored/t62/combat-to-travel-with-stabilizer-and-night-vision/view'
import { T62ReplaceFiringPinView } from '@/components/armored/t62/replace-firing-pin/view'
import { T62ReplaceSpringView } from '@/components/armored/t62/replace-spring/view'
import { T62ReplaceMachineGunBarrelView } from '@/components/armored/t62/replace-machine-gun-barrel/view'
import { T62ReplaceHeavyMachineGunBarrelView } from '@/components/armored/t62/replace-heavy-machine-gun-barrel/view'
import { T62PartialDisassemblyMachineGunView } from '@/components/armored/t62/partial-disassembly-machine-gun/view'
import { T62PartialDisassemblyAAMachineGunView } from '@/components/armored/t62/partial-disassembly-aa-machine-gun/view'
import { T62AssemblyMachineGunView } from '@/components/armored/t62/assembly-machine-gun/view'
import { T62AssemblyAAMachineGunView } from '@/components/armored/t62/assembly-aa-machine-gun/view'
import { T55_62AmmunitionStackingView } from '@/components/armored/t55-62/ammunition-stacking/view'



import {
  OneKilometerCategories,
  OneKilometerView,
} from '@/components/sports/1-km/one-km-view'

import {
  HundredMeterCategories,
  HundredMeterView,
  type HundredMeterViewId,
} from '@/components/sports/100-meter/100-meter-view'

import {
  TwoKilometerCategories,
  TwoKilometerView,
  type TwoKilometerViewId,
} from '@/components/sports/2-km/two-km-view'

import {
  ThreeKilometerCategories,
  ThreeKilometerView,
  type ThreeKilometerViewId,
} from '@/components/sports/3-km/three-km-view'

import {
  FourXHundredMeterCategories,
  FourXHundredMeterView,
  type FourXHundredMeterViewId,
} from '@/components/sports/4x100-meter/four-x-hundred-meter-view'

import {
  FiveKilometerCategories,
  FiveKilometerView,
  type FiveKilometerViewId,
} from '@/components/sports/5-km/five-km-view'

import {
  CompoundStrengthCategories,
  CompoundStrengthView,
} from '@/components/sports/compound-strength/compound-strength-view'

import {
  PullupsCategories,
  PullupsView,
} from '@/components/sports/pullups/pullups-view'

import {
  PushupsCategories,
  PushupsView,
} from '@/components/sports/pushups/pushups-view'

import {
  StomachCategories,
  StomachView,
} from '@/components/sports/stomach/stomach-view'

import type { OpenView, View } from './types'
import { T72PreCombatToColumnView, T72PreCombatToColumnViewId } from '@/components/armored/t72/pre-combat-to-column/view';
import { T55_62PreCombatToColumnView, T55_62PreCombatToColumnViewId } from '@/components/armored/t55-62/pre-combat-to-column/view';
import { T72ColumnToCombatView, T72ColumnToCombatViewId } from '@/components/armored/t72/column-to-combat/view';
import { T55_62ColumnToCombatView, T55_62ColumnToCombatViewId } from '@/components/armored/t55-62/column-to-combat/view';
import { T55_62ColumnToCombatFlankView, T55_62ColumnToCombatFlankViewId } from '@/components/armored/t55-62/column-to-combat-flank/view';
import { T72ColumnToCombatFlankView, T72ColumnToCombatFlankViewId } from '@/components/armored/t72/column-to-combat-flank/view';
import { T55_62MoveAndOccupyFiringLineView, T55_62MoveAndOccupyFiringLineViewId } from '@/components/armored/t55-62/move-and-occupy-firing-line/view';
import { T72MoveAndOccupyFiringLineView, T72MoveAndOccupyFiringLineViewId } from '@/components/armored/t72/move-and-occupy-firing-line/view';
import { T72LoadTanksOnHeavyCarriersView, T72LoadTanksOnHeavyCarriersViewId } from '@/components/armored/t72/load-tanks-on-heavy-carriers/view';
import { T55_62LoadTanksOnHeavyCarriersView, T55_62LoadTanksOnHeavyCarriersViewId } from '@/components/armored/t55-62/load-tanks-on-heavy-carriers/view';
import { T55_62UnloadTanksFromHeavyCarriersView, T55_62UnloadTanksFromHeavyCarriersViewId } from '@/components/armored/t55-62/unload-tanks-from-heavy-carriers/view';
import { T72UnloadTanksFromHeavyCarriersView, T72UnloadTanksFromHeavyCarriersViewId } from '@/components/armored/t72/unload-tanks-from-heavy-carriers/view';

/**
 * Generic category configuration.
 *
 * This allows all exercises to use the same rendering mechanism
 * instead of writing one condition for every category.
 */
interface CategoryConfig {
  parent: View
  categories: readonly View[]
}

const categoryConfigs: Record<string, CategoryConfig> = {
  stomach: {
    parent: 'stomach',
    categories: [
      'stomach-category-one',
      'stomach-category-two',
      'stomach-category-three',
      'stomach-category-four',
      'stomach-category-five',
      'stomach-category-six',
      'stomach-category-seven',
    ],
  },

  pushups: {
    parent: 'pushups',
    categories: [
      'pushups-category-one',
      'pushups-category-two',
      'pushups-category-three',
      'pushups-category-four',
      'pushups-category-five',
      'pushups-category-six',
      'pushups-category-seven',
    ],
  },

  'compound-strength': {
    parent: 'compound-strength',
    categories: [
      'compound-strength-category-one',
      'compound-strength-category-two',
      'compound-strength-category-three',
      'compound-strength-category-four',
      'compound-strength-category-five',
      'compound-strength-category-six',
      'compound-strength-category-seven',
    ],
  },

  pullups: {
    parent: 'pullups',
    categories: [
      'pullups-category-one',
      'pullups-category-two',
      'pullups-category-three',
      'pullups-category-four',
      'pullups-category-five',
      'pullups-category-six',
      'pullups-category-seven',
    ],
  },

  hundred: {
    parent: 'hundred',
    categories: [
      'category-one',
      'category-two',
      'category-three',
      'category-four',
      'category-five',
      'category-six',
      'category-seven',
    ],
  },

  'one-km': {
    parent: 'one-km',
    categories: [
      'one-km-category-one',
      'one-km-category-two',
      'one-km-category-three',
      'one-km-category-four',
      'one-km-category-five',
      'one-km-category-six',
      'one-km-category-seven',
    ],
  },

  'two-km': {
    parent: 'two-km',
    categories: [
      'two-km-category-one',
      'two-km-category-two',
      'two-km-category-three',
      'two-km-category-four',
    ],
  },

  'three-km': {
    parent: 'three-km',
    categories: [
      'three-km-category-one',
      'three-km-category-two',
      'three-km-category-three',
    ],
  },

  'five-km': {
    parent: 'five-km',
    categories: [
      'five-km-category-one',
      'five-km-category-two',
      'five-km-category-three',
    ],
  },

  '4x100': {
    parent: '4x100',
    categories: [
      '4x100-category-one',
      '4x100-category-two',
      '4x100-category-three',
      '4x100-category-four',
      '4x100-category-five',
      '4x100-category-six',
    ],
  },
}

/**
 * Helper for checking whether a view belongs to a category group.
 */
function isCategoryOf(
  view: View,
  parent: View,
): boolean {
  const config = categoryConfigs[parent]

  if (!config) {
    return false
  }

  return config.categories.includes(view)
}

/**
 * Render category pages.
 *
 * Notice that we no longer have:
 *
 * activeView === "category-one"
 * activeView === "category-two"
 * activeView === "category-three"
 *
 * for every component.
 */
function renderCategoryView(
  activeView: View,
  openView: OpenView,
): ReactNode | null {
  // ------------------------------------------------------------
  // STOMACH
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'stomach')) {
    return (
      <StomachView
        activeView={activeView as
          | 'stomach-category-one'
          | 'stomach-category-two'
            | 'stomach-category-three'
            | 'stomach-category-four'
            | 'stomach-category-five'
            | 'stomach-category-six'
            | 'stomach-category-seven'}
      />
    )
  }

  // ------------------------------------------------------------
  // PUSHUPS
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'pushups')) {
    return (
      <PushupsView
        categoryId={activeView as
          | 'pushups-category-one'
          | 'pushups-category-two'
          | 'pushups-category-three'
          | 'pushups-category-four'
          | 'pushups-category-five'
          | 'pushups-category-six'
          | 'pushups-category-seven'}
      />
    )
  }

  // ------------------------------------------------------------
  // COMPOUND STRENGTH
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'compound-strength')) {
    return (
      <CompoundStrengthView
        categoryId={activeView as
          | 'compound-strength-category-one'
          | 'compound-strength-category-two'
          | 'compound-strength-category-three'
          | 'compound-strength-category-four'
          | 'compound-strength-category-five'
          | 'compound-strength-category-six'
          | 'compound-strength-category-seven'}
      />
    )
  }

  // ------------------------------------------------------------
  // PULLUPS
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'pullups')) {
    return (
      <PullupsView
        categoryId={activeView as
          | 'pullups-category-one'
          | 'pullups-category-two'
          | 'pullups-category-three'
          | 'pullups-category-four'
          | 'pullups-category-five'
          | 'pullups-category-six'
          | 'pullups-category-seven'}
      />
    )
  }

  // ------------------------------------------------------------
  // 100M
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'hundred')) {
    return (
      <HundredMeterView
        activeView={activeView as HundredMeterViewId}
        openView={openView}
      />
    )
  }

  // ------------------------------------------------------------
  // 1KM
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'one-km')) {
    return (
      <OneKilometerView
        activeView={activeView as
          | 'one-km-category-one'
          | 'one-km-category-two'
          | 'one-km-category-three'
          | 'one-km-category-four'
          | 'one-km-category-five'
          | 'one-km-category-six'
          | 'one-km-category-seven'}
        openView={openView}
      />
    )
  }

  // ------------------------------------------------------------
  // 2KM
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'two-km')) {
    return (
      <TwoKilometerView
        activeView={activeView as TwoKilometerViewId}
      />
    )
  }

  // ------------------------------------------------------------
  // 3KM
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'three-km')) {
    return (
      <ThreeKilometerView
        activeView={activeView as ThreeKilometerViewId}
      />
    )
  }

  // ------------------------------------------------------------
  // 5KM
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, 'five-km')) {
    return (
      <FiveKilometerView
        activeView={activeView as FiveKilometerViewId}
      />
    )
  }

  // ------------------------------------------------------------
  // 4x100
  // ------------------------------------------------------------

  if (isCategoryOf(activeView, '4x100')) {
    return (
      <FourXHundredMeterView
        activeView={activeView as FourXHundredMeterViewId}
      />
    )
  }

  return null
}

/**
 * Render the category selection pages.
 */
function renderCategorySelection(
  activeView: View,
  openView: OpenView,
): ReactNode | null {
  switch (activeView) {
    case 'stomach':
      return <StomachCategories openView={openView} />

    case 'pushups':
      return <PushupsCategories openView={openView} />

    case 'compound-strength':
      return (
        <CompoundStrengthCategories
          openView={openView}
        />
      )

    case 'pullups':
      return <PullupsCategories openView={openView} />

    case 'hundred':
      return <HundredMeterCategories openView={openView} />

    case 'one-km':
      return <OneKilometerCategories openView={openView} />

    case 'two-km':
      return <TwoKilometerCategories openView={openView} />

    case 'three-km':
      return <ThreeKilometerCategories openView={openView} />

    case 'five-km':
      return <FiveKilometerCategories openView={openView} />

    case '4x100':
      return (
        <FourXHundredMeterCategories
          openView={openView}
        />
      )

    default:
      return null
  }
}

/**
 * Render armored sections.
 */
function renderArmoredView(
  activeView: View,
  openView: OpenView,
): ReactNode | null {
  // ============================================================
  // T72
  // ============================================================

  if (
    activeView === 't72-boarding' ||
    activeView === 't72-طاقم' ||
    activeView === 't72-فصيلة' ||
    activeView === 't72-سرية'
  ) {
    return (
      <T72View
        activeView={activeView}
        openView={openView}
      />
    )
  }

  if (
    activeView === 't72-disembarking' ||
    activeView === 't72-disembarking-طاقم' ||
    activeView === 't72-disembarking-فصيلة' ||
    activeView === 't72-disembarking-سرية'
  ) {
    return (
      <T72DisembarkingView
        activeView={activeView as T72DisembarkingViewId}
        openView={
          openView as (
            view: T72DisembarkingViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't72-pre-combat' ||
    activeView === 't72-pre-combat-سرية' ||
    activeView === 't72-pre-combat-كتيبة'
  ) {
    return (
      <T72PreCombatView
        activeView={activeView as T72PreCombatViewId}
        openView={
          openView as (
            view: T72PreCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't72-combat-to-pre-combat' ||
    activeView === 't72-combat-to-pre-combat-فصيلة' ||
    activeView === 't72-combat-to-pre-combat-سرية' ||
    activeView === 't72-combat-to-pre-combat-كتيبة'
  ) {
    return (
      <T72CombatToPreCombatView
        activeView={
          activeView as T72CombatToPreCombatViewId
        }
        openView={
          openView as (
            view: T72CombatToPreCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't72-open-pre-combat' ||
    activeView === 't72-open-pre-combat-فصيلة' ||
    activeView === 't72-open-pre-combat-سرية' ||
    activeView === 't72-open-pre-combat-كتيبة'
  ) {
    return (
      <T72OpenPreCombatView
        activeView={
          activeView as T72OpenPreCombatViewId
        }
        openView={
          openView as (
            view: T72OpenPreCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't72-pre-combat-to-column' ||
    activeView === 't72-pre-combat-to-column-سرية' ||
    activeView === 't72-pre-combat-to-column-كتيبة'
  ) {
    return (
      <T72PreCombatToColumnView
        activeView={
          activeView as T72PreCombatToColumnViewId
        }
        openView={
          openView as (
            view: T72PreCombatToColumnViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't72-column-to-combat' ||
    activeView === 't72-column-to-combat-سرية' ||
    activeView === 't72-column-to-combat-كتيبة'
  ) {
    return (
      <T72ColumnToCombatView
        activeView={
          activeView as T72ColumnToCombatViewId
        }
        openView={
          openView as (
            view: T72ColumnToCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't72-column-to-combat-flank' ||
    activeView === 't72-column-to-combat-flank-فصيلة' ||
    activeView === 't72-column-to-combat-flank-سرية' ||
    activeView === 't72-column-to-combat-flank-كتيبة'
  ) {
    return (
      <T72ColumnToCombatFlankView
        activeView={activeView as T72ColumnToCombatFlankViewId}
        openView={openView as (view: T72ColumnToCombatFlankViewId) => void}
      />
    )
  }

  if (
    activeView === 't72-move-and-occupy-firing-line' ||
    activeView === 't72-move-and-occupy-firing-line-فصيلة' ||
    activeView === 't72-move-and-occupy-firing-line-سرية'
  ) {
    return (
      <T72MoveAndOccupyFiringLineView
        activeView={activeView as T72MoveAndOccupyFiringLineViewId}
        openView={openView as (view: T72MoveAndOccupyFiringLineViewId) => void}
      />
    )
  }

  if (
    activeView === 't72-load-tanks-on-heavy-carriers' ||
    activeView === 't72-load-tanks-on-heavy-carriers-طاقم' ||
    activeView === 't72-load-tanks-on-heavy-carriers-فصيلة' ||
    activeView === 't72-load-tanks-on-heavy-carriers-سرية'
  ) {
    return (
      <T72LoadTanksOnHeavyCarriersView
        activeView={activeView as T72LoadTanksOnHeavyCarriersViewId}
        openView={openView as (view: T72LoadTanksOnHeavyCarriersViewId) => void}
      />
    )
  }
  
  if (
    activeView === 't72-unload-tanks-from-heavy-carriers' ||
    activeView === 't72-unload-tanks-from-heavy-carriers-طاقم' ||
    activeView === 't72-unload-tanks-from-heavy-carriers-فصيلة' ||
    activeView === 't72-unload-tanks-from-heavy-carriers-سرية'
  ) {
    return (
      <T72UnloadTanksFromHeavyCarriersView
        activeView={activeView as T72UnloadTanksFromHeavyCarriersViewId}
        openView={openView as (view: T72UnloadTanksFromHeavyCarriersViewId) => void}
      />
    )
  }

  if (
    activeView === 't72-ammunition-stacking' ||
    activeView === 't72-ammunition-stacking-طاقم'
  ) {
    return <T72AmmunitionStackingView />
  }

  if (
    activeView === 't72-carousel-ammunition-stacking' ||
    activeView === 't72-carousel-ammunition-stacking-طاقم'
  ) {
    return <T72CarouselAmmunitionStackingView />
  }

  if (
    activeView === 't72-transfer-rounds-to-carousel' ||
    activeView === 't72-transfer-rounds-to-carousel-طاقم'
  ) {
    return <T72TransferRoundsToCarouselView />
  }

  if (
    activeView === 't72-travel-to-combat-without-stabilizer' ||
    activeView === 't72-travel-to-combat-without-stabilizer-طاقم'
  ) {
    return <T72TravelToCombatView />
  }

  if (
    activeView === 't72-travel-to-combat-with-stabilizer' ||
    activeView === 't72-travel-to-combat-with-stabilizer-طاقم'
  ) {
    return <T72TravelToCombatWithStabilizerView />
  }

  if (
    activeView === 't72-travel-to-combat-with-stabilizer-and-night-vision' ||
    activeView === 't72-travel-to-combat-with-stabilizer-and-night-vision-طاقم'
  ) {
    return <T72TravelToCombatWithStabilizerAndNightVisionView />
  }

  if (
    activeView === 't72-combat-to-travel-with-stabilizer-off' ||
    activeView === 't72-combat-to-travel-with-stabilizer-off-طاقم'
  ) {
    return <T72CombatToTravelWithStabilizerOffView />
  }

  if (
    activeView === 't72-combat-to-travel-with-stabilizer' ||
    activeView === 't72-combat-to-travel-with-stabilizer-طاقم'
  ) {
    return <T72CombatToTravelWithStabilizerView />
  }

  if (
    activeView === 't72-combat-to-travel-with-stabilizer-and-night-vision' ||
    activeView === 't72-combat-to-travel-with-stabilizer-and-night-vision-طاقم'
  ) {
    return <T72CombatToTravelWithStabilizerAndNightVisionView />
  }

  if (
    activeView === 't72-replace-firing-pin' ||
    activeView === 't72-replace-firing-pin-طاقم'
  ) {
    return <T72ReplaceFiringPinView />
  }

  if (
    activeView === 't72-replace-spring' ||
    activeView === 't72-replace-spring-طاقم'
  ) {
    return <T72ReplaceSpringView />
  }

  if (
    activeView === 't72-replace-machine-gun-barrel' ||
    activeView === 't72-replace-machine-gun-barrel-طاقم'
  ) {
    return <T72ReplaceMachineGunBarrelView />
  }

  if (
    activeView === 't72-replace-heavy-machine-gun-barrel' ||
    activeView === 't72-replace-heavy-machine-gun-barrel-طاقم'
  ) {
    return <T72ReplaceHeavyMachineGunBarrelView />
  }

  if (
    activeView === 't72-partial-disassembly-machine-gun' ||
    activeView === 't72-partial-disassembly-machine-gun-طاقم'
  ) {
    return <T72PartialDisassemblyMachineGunView />
  }

  if (
    activeView === 't72-partial-disassembly-aa-machine-gun' ||
    activeView === 't72-partial-disassembly-aa-machine-gun-طاقم'
  ) {
    return <T72PartialDisassemblyAAMachineGunView />
  }

  if (
    activeView === 't72-assembly-machine-gun' ||
    activeView === 't72-assembly-machine-gun-طاقم'
  ) {
    return <T72AssemblyMachineGunView />
  }

  if (
    activeView === 't72-assembly-aa-machine-gun' ||
    activeView === 't72-assembly-aa-machine-gun-طاقم'
  ) {
    return <T72AssemblyAAMachineGunView />
  }







  // ============================================================
  // T(55 + 62)
  // ============================================================

  if (
    activeView === 't55-62-boarding' ||
    activeView === 't55-62-طاقم' ||
    activeView === 't55-62-فصيلة' ||
    activeView === 't55-62-سرية'
  ) {
    return (
      <T55_62View
        activeView={activeView as T55_62ViewId}
        openView={
          openView as (
            view: T55_62ViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't55-62-disembarking' ||
    activeView === 't55-62-disembarking-طاقم' ||
    activeView === 't55-62-disembarking-فصيلة' ||
    activeView === 't55-62-disembarking-سرية'
  ) {
    return (
      <T55_62DisembarkingView
        activeView={
          activeView as T55_62DisembarkingViewId
        }
        openView={
          openView as (
            view: T55_62DisembarkingViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't55-62-pre-combat' ||
    activeView === 't55-62-pre-combat-سرية' ||
    activeView === 't55-62-pre-combat-كتيبة'
  ) {
    return (
      <T55_62PreCombatView
        activeView={
          activeView as T55_62PreCombatViewId
        }
        openView={
          openView as (
            view: T55_62PreCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't55-62-combat-to-pre-combat' ||
    activeView === 't55-62-combat-to-pre-combat-فصيلة' ||
    activeView === 't55-62-combat-to-pre-combat-سرية' ||
    activeView === 't55-62-combat-to-pre-combat-كتيبة'
  ) {
    return (
      <T55_62CombatToPreCombatView
        activeView={
          activeView as T55_62CombatToPreCombatViewId
        }
        openView={
          openView as (
            view: T55_62CombatToPreCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't55-62-open-pre-combat' ||
    activeView === 't55-62-open-pre-combat-فصيلة' ||
    activeView === 't55-62-open-pre-combat-سرية' ||
    activeView === 't55-62-open-pre-combat-كتيبة'
  ) {
    return (
      <T55_62OpenPreCombatView
        activeView={
          activeView as T55_62OpenPreCombatViewId
        }
        openView={
          openView as (
            view: T55_62OpenPreCombatViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't55-62-pre-combat-to-column' ||
    activeView === 't55-62-pre-combat-to-column-سرية' ||
    activeView === 't55-62-pre-combat-to-column-كتيبة'
  ) {
    return (
      <T55_62PreCombatToColumnView
        activeView={
          activeView as T55_62PreCombatToColumnViewId
        }
        openView={
          openView as (
            view: T55_62PreCombatToColumnViewId
          ) => void
        }
      />
    )
  }

  if (
    activeView === 't55-62-column-to-combat' ||
    activeView === 't55-62-column-to-combat-سرية' ||
    activeView === 't55-62-column-to-combat-كتيبة'
  ) {
    return (
      <T55_62ColumnToCombatView
        activeView={
          activeView as T55_62ColumnToCombatViewId
        }
        openView={
          openView as (
            view: T55_62ColumnToCombatViewId
          ) => void
        }
      />
    )
  }

  if (
      activeView === 't55-62-column-to-combat-flank' ||
      activeView === 't55-62-column-to-combat-flank-فصيلة' ||
      activeView === 't55-62-column-to-combat-flank-سرية' ||
      activeView === 't55-62-column-to-combat-flank-كتيبة'
    ) {
      return (
        <T55_62ColumnToCombatFlankView
          activeView={activeView as T55_62ColumnToCombatFlankViewId}
          openView={openView as (view: T55_62ColumnToCombatFlankViewId) => void}
        />
      )
    }

  if (
    activeView === 't55-62-move-and-occupy-firing-line' ||
    activeView === 't55-62-move-and-occupy-firing-line-فصيلة' ||
    activeView === 't55-62-move-and-occupy-firing-line-سرية'
  ) {
    return (
      <T55_62MoveAndOccupyFiringLineView
        activeView={activeView as T55_62MoveAndOccupyFiringLineViewId}
        openView={openView as (view: T55_62MoveAndOccupyFiringLineViewId) => void}
      />
    )
  }

  if (
    activeView === 't55-62-load-tanks-on-heavy-carriers' ||
    activeView === 't55-62-load-tanks-on-heavy-carriers-طاقم' ||
    activeView === 't55-62-load-tanks-on-heavy-carriers-فصيلة' ||
    activeView === 't55-62-load-tanks-on-heavy-carriers-سرية'
  ) {
    return (
      <T55_62LoadTanksOnHeavyCarriersView
        activeView={activeView as T55_62LoadTanksOnHeavyCarriersViewId}
        openView={openView as (view: T55_62LoadTanksOnHeavyCarriersViewId) => void}
      />
    )
  }

  if (
    activeView === 't55-62-unload-tanks-from-heavy-carriers' ||
    activeView === 't55-62-unload-tanks-from-heavy-carriers-طاقم' ||
    activeView === 't55-62-unload-tanks-from-heavy-carriers-فصيلة' ||
    activeView === 't55-62-unload-tanks-from-heavy-carriers-سرية'
  ) {
    return (
      <T55_62UnloadTanksFromHeavyCarriersView
        activeView={activeView as T55_62UnloadTanksFromHeavyCarriersViewId}
        openView={openView as (view: T55_62UnloadTanksFromHeavyCarriersViewId) => void}
      />
    )
  }

  // ============================================================
  // T55 & T62 Ammunition Stacking
  // ============================================================

  if (
    activeView === 't55-ammunition-stacking' ||
    activeView === 't55-ammunition-stacking-طاقم'
  ) {
    return <T55AmmunitionStackingView />
  }

  if (
    activeView === 't62-ammunition-stacking' ||
    activeView === 't62-ammunition-stacking-طاقم'
  ) {
    return <T62AmmunitionStackingView />
  }

  if (
    activeView === 't55-travel-to-combat-without-stabilizer' ||
    activeView === 't55-travel-to-combat-without-stabilizer-طاقم'
  ) {
    return <T55TravelToCombatView />
  }

  if (
    activeView === 't62-travel-to-combat-without-stabilizer' ||
    activeView === 't62-travel-to-combat-without-stabilizer-طاقم'
  ) {
    return <T62TravelToCombatView />
  }

  if (
    activeView === 't55-travel-to-combat-with-stabilizer' ||
    activeView === 't55-travel-to-combat-with-stabilizer-طاقم'
  ) {
    return <T55TravelToCombatWithStabilizerView />
  }

  if (
    activeView === 't55-travel-to-combat-with-stabilizer-and-night-vision' ||
    activeView === 't55-travel-to-combat-with-stabilizer-and-night-vision-طاقم'
  ) {
    return <T55TravelToCombatWithStabilizerAndNightVisionView />
  }

  if (
    activeView === 't55-combat-to-travel-with-stabilizer-off' ||
    activeView === 't55-combat-to-travel-with-stabilizer-off-طاقم'
  ) {
    return <T55CombatToTravelWithStabilizerOffView />
  }

  if (
    activeView === 't55-combat-to-travel-with-stabilizer' ||
    activeView === 't55-combat-to-travel-with-stabilizer-طاقم'
  ) {
    return <T55CombatToTravelWithStabilizerView />
  }

  if (
    activeView === 't55-combat-to-travel-with-stabilizer-and-night-vision' ||
    activeView === 't55-combat-to-travel-with-stabilizer-and-night-vision-طاقم'
  ) {
    return <T55CombatToTravelWithStabilizerAndNightVisionView />
  }

  if (
    activeView === 't55-replace-spring' ||
    activeView === 't55-replace-spring-طاقم'
  ) {
    return <T55ReplaceSpringView />
  }

  if (
    activeView === 't55-replace-machine-gun-barrel' ||
    activeView === 't55-replace-machine-gun-barrel-طاقم'
  ) {
    return <T55ReplaceMachineGunBarrelView />
  }

  if (
    activeView === 't55-replace-heavy-machine-gun-barrel' ||
    activeView === 't55-replace-heavy-machine-gun-barrel-طاقم'
  ) {
    return <T55ReplaceHeavyMachineGunBarrelView />
  }

  if (
    activeView === 't55-partial-disassembly-machine-gun' ||
    activeView === 't55-partial-disassembly-machine-gun-طاقم'
  ) {
    return <T55PartialDisassemblyMachineGunView />
  }

  if (
    activeView === 't55-partial-disassembly-aa-machine-gun' ||
    activeView === 't55-partial-disassembly-aa-machine-gun-طاقم'
  ) {
    return <T55PartialDisassemblyAAMachineGunView />
  }

  if (
    activeView === 't55-assembly-machine-gun' ||
    activeView === 't55-assembly-machine-gun-طاقم'
  ) {
    return <T55AssemblyMachineGunView />
  }

  if (
    activeView === 't55-assembly-aa-machine-gun' ||
    activeView === 't55-assembly-aa-machine-gun-طاقم'
  ) {
    return <T55AssemblyAAMachineGunView />
  }





  if (
    activeView === 't62-travel-to-combat-with-stabilizer' ||
    activeView === 't62-travel-to-combat-with-stabilizer-طاقم'
  ) {
    return <T62TravelToCombatWithStabilizerView />
  }

  if (
    activeView === 't62-travel-to-combat-with-stabilizer-and-night-vision' ||
    activeView === 't62-travel-to-combat-with-stabilizer-and-night-vision-طاقم'
  ) {
    return <T62TravelToCombatWithStabilizerAndNightVisionView />
  }

  if (
    activeView === 't62-combat-to-travel-with-stabilizer-off' ||
    activeView === 't62-combat-to-travel-with-stabilizer-off-طاقم'
  ) {
    return <T62CombatToTravelWithStabilizerOffView />
  }

  if (
    activeView === 't62-combat-to-travel-with-stabilizer' ||
    activeView === 't62-combat-to-travel-with-stabilizer-طاقم'
  ) {
    return <T62CombatToTravelWithStabilizerView />
  }

  if (
    activeView === 't62-combat-to-travel-with-stabilizer-and-night-vision' ||
    activeView === 't62-combat-to-travel-with-stabilizer-and-night-vision-طاقم'
  ) {
    return <T62CombatToTravelWithStabilizerAndNightVisionView />
  }

  if (
    activeView === 't62-replace-firing-pin' ||
    activeView === 't62-replace-firing-pin-طاقم'
  ) {
    return <T62ReplaceFiringPinView />
  }

  if (
    activeView === 't62-replace-spring' ||
    activeView === 't62-replace-spring-طاقم'
  ) {
    return <T62ReplaceSpringView />
  }

  if (
    activeView === 't62-replace-machine-gun-barrel' ||
    activeView === 't62-replace-machine-gun-barrel-طاقم'
  ) {
    return <T62ReplaceMachineGunBarrelView />
  }

  if (
    activeView === 't62-replace-heavy-machine-gun-barrel' ||
    activeView === 't62-replace-heavy-machine-gun-barrel-طاقم'
  ) {
    return <T62ReplaceHeavyMachineGunBarrelView />
  }

  if (
    activeView === 't62-partial-disassembly-machine-gun' ||
    activeView === 't62-partial-disassembly-machine-gun-طاقم'
  ) {
    return <T62PartialDisassemblyMachineGunView />
  }

  if (
    activeView === 't62-partial-disassembly-aa-machine-gun' ||
    activeView === 't62-partial-disassembly-aa-machine-gun-طاقم'
  ) {
    return <T62PartialDisassemblyAAMachineGunView />
  }

  if (
    activeView === 't62-assembly-machine-gun' ||
    activeView === 't62-assembly-machine-gun-طاقم'
  ) {
    return <T62AssemblyMachineGunView />
  }

  if (
    activeView === 't62-assembly-aa-machine-gun' ||
    activeView === 't62-assembly-aa-machine-gun-طاقم'
  ) {
    return <T62AssemblyAAMachineGunView />
  }





  if (activeView === 't55-62-ammunition-stacking') {
    return <T55_62AmmunitionStackingView openView={openView} />
  }

  return null
}

/**
 * Generic application content renderer.
 */
export function renderView(
  activeView: View,
  openView: OpenView,
): ReactNode | null {
  // Category pages
  const categoryView = renderCategoryView(
    activeView,
    openView,
  )

  if (categoryView) {
    return categoryView
  }

  // Category selection
  const categorySelection = renderCategorySelection(
    activeView,
    openView,
  )

  if (categorySelection) {
    return categorySelection
  }

  // Armored pages
  const armoredView = renderArmoredView(
    activeView,
    openView,
  )

  if (armoredView) {
    return armoredView
  }

  return null
}