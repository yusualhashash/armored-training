import { OneKilometerCategories, OneKilometerView } from '@/components/sports/1-km/one-km-view';
import { HundredMeterCategories, HundredMeterView, type HundredMeterViewId } from '@/components/sports/100-meter/100-meter-view';
import { TwoKilometerCategories, TwoKilometerView, type TwoKilometerViewId } from '@/components/sports/2-km/two-km-view';
import { ThreeKilometerCategories, ThreeKilometerView, type ThreeKilometerViewId } from '@/components/sports/3-km/three-km-view';
import { FourXHundredMeterCategories, FourXHundredMeterView, type FourXHundredMeterViewId } from '@/components/sports/4x100-meter/four-x-hundred-meter-view';
import { FiveKilometerCategories, FiveKilometerView, type FiveKilometerViewId } from '@/components/sports/5-km/five-km-view';
import { CompoundStrengthCategories, CompoundStrengthView } from '@/components/sports/compound-strength/compound-strength-view';
import { PullupsCategories, PullupsView } from '@/components/sports/pullups/pullups-view';
import { PushupsCategories, PushupsView } from '@/components/sports/pushups/pushups-view';
import { StomachCategories, StomachView } from '@/components/sports/stomach/stomach-view';
import type { NavigationProps, View } from '@/lib/training/navigation'

const hundredMeterCategoryViews = [
  'category-one',
  'category-two',
  'category-three',
  'category-four',
  'category-five',
  'category-six',
  'category-seven',
] as const satisfies readonly HundredMeterViewId[]

const twoKilometerCategoryViews = ['two-km-category-one', 'two-km-category-two', 'two-km-category-three', 'two-km-category-four'] as const satisfies readonly TwoKilometerViewId[]
const threeKilometerCategoryViews = ['three-km-category-one', 'three-km-category-two', 'three-km-category-three'] as const satisfies readonly ThreeKilometerViewId[]
const fiveKilometerCategoryViews = ['five-km-category-one', 'five-km-category-two', 'five-km-category-three'] as const satisfies readonly FiveKilometerViewId[]
const fourXHundredMeterCategoryViews = [
  '4x100-category-one',
  '4x100-category-two',
  '4x100-category-three',
  '4x100-category-four',
  '4x100-category-five',
  '4x100-category-six',
] as const satisfies readonly FourXHundredMeterViewId[]
function isFourXHundredMeterCategoryView(view: View): view is FourXHundredMeterViewId {
  return (fourXHundredMeterCategoryViews as readonly View[]).includes(view)
}

function isFiveKilometerCategoryView(view: View): view is FiveKilometerViewId {
  return (fiveKilometerCategoryViews as readonly View[]).includes(view)
}

function isThreeKilometerCategoryView(view: View): view is ThreeKilometerViewId {
  return (threeKilometerCategoryViews as readonly View[]).includes(view)
}

function isTwoKilometerCategoryView(view: View): view is TwoKilometerViewId {
  return (twoKilometerCategoryViews as readonly View[]).includes(view)
}

function isHundredMeterCategoryView(view: View): view is HundredMeterViewId {
  return (hundredMeterCategoryViews as readonly View[]).includes(view)
}

export function SportsViews({ activeView, openView }: NavigationProps) {
  if (activeView === 'stomach') {
    return (<StomachCategories openView={openView} />)
  }

  if (activeView === 'pushups') {
    return (<PushupsCategories openView={openView} />)
  }

  if (activeView === 'pushups-category-one') {
    return (<PushupsView categoryId="pushups-category-one" />)
  }

  if (activeView === 'pushups-category-two') {
    return (<PushupsView categoryId="pushups-category-two" />)
  }

  if (activeView === 'pushups-category-three') {
    return (<PushupsView categoryId="pushups-category-three" />)
  }

  if (activeView === 'pushups-category-four') {
    return (<PushupsView categoryId="pushups-category-four" />)
  }

  if (activeView === 'pushups-category-five') {
    return (<PushupsView categoryId="pushups-category-five" />)
  }

  if (activeView === 'pushups-category-six') {
    return (<PushupsView categoryId="pushups-category-six" />)
  }

  if (activeView === 'pushups-category-seven') {
    return (<PushupsView categoryId="pushups-category-seven" />)
  }

  if (activeView === 'compound-strength') {
    return (<CompoundStrengthCategories openView={openView} />)
  }

  if (activeView === 'compound-strength-category-one') {
    return (<CompoundStrengthView categoryId="compound-strength-category-one" />)
  }

  if (activeView === 'compound-strength-category-two') {
    return (<CompoundStrengthView categoryId="compound-strength-category-two" />)
  }

  if (activeView === 'compound-strength-category-three') {
    return (<CompoundStrengthView categoryId="compound-strength-category-three" />)
  }

  if (activeView === 'compound-strength-category-four') {
    return (<CompoundStrengthView categoryId="compound-strength-category-four" />)
  }

  if (activeView === 'compound-strength-category-five') {
    return (<CompoundStrengthView categoryId="compound-strength-category-five" />)
  }

  if (activeView === 'compound-strength-category-six') {
    return (<CompoundStrengthView categoryId="compound-strength-category-six" />)
  }

  if (activeView === 'compound-strength-category-seven') {
    return (<CompoundStrengthView categoryId="compound-strength-category-seven" />)
  }

  if (activeView === 'pullups') {
    return (<PullupsCategories openView={openView} />)
  }

  if (activeView === 'pullups-category-one') {
    return (<PullupsView categoryId="pullups-category-one" />)
  }

  if (activeView === 'pullups-category-two') {
    return (<PullupsView categoryId="pullups-category-two" />)
  }

  if (activeView === 'pullups-category-three') {
    return (<PullupsView categoryId="pullups-category-three" />)
  }

  if (activeView === 'pullups-category-four') {
    return (<PullupsView categoryId="pullups-category-four" />)
  }

  if (activeView === 'pullups-category-five') {
    return (<PullupsView categoryId="pullups-category-five" />)
  }

  if (activeView === 'pullups-category-six') {
    return (<PullupsView categoryId="pullups-category-six" />)
  }

  if (activeView === 'pullups-category-seven') {
    return (<PullupsView categoryId="pullups-category-seven" />)
  }

  if (activeView === 'hundred') {
    return (<HundredMeterCategories openView={openView} />)
  }

  if ((activeView === 'stomach-category-one' || activeView === 'stomach-category-two' || activeView === 'stomach-category-three' || activeView === 'stomach-category-four' || activeView === 'stomach-category-five' || activeView === 'stomach-category-six' || activeView === 'stomach-category-seven')) {
    return (<StomachView activeView={activeView} />)
  }

  if (activeView === 'one-km') {
    return (<OneKilometerCategories openView={openView} />)
  }

  if (activeView === 'two-km') {
    return (<TwoKilometerCategories openView={openView} />)
  }

  if (activeView === 'three-km') {
    return (<ThreeKilometerCategories openView={openView} />)
  }

  if (activeView === 'five-km') {
    return (<FiveKilometerCategories openView={openView} />)
  }

  if (activeView === '4x100') {
    return (<FourXHundredMeterCategories openView={openView} />)
  }

  if ((activeView === 'one-km-category-one' || activeView === 'one-km-category-two' || activeView === 'one-km-category-three' || activeView === 'one-km-category-four' || activeView === 'one-km-category-five' || activeView === 'one-km-category-six' || activeView === 'one-km-category-seven')) {
    return (<OneKilometerView activeView={activeView} openView={openView} />)
  }

  if (isHundredMeterCategoryView(activeView)) {
    return (<HundredMeterView activeView={activeView} openView={openView} />)
  }

  if (isTwoKilometerCategoryView(activeView)) {
    return (<TwoKilometerView activeView={activeView} />)
  }

  if (isThreeKilometerCategoryView(activeView)) {
    return (<ThreeKilometerView activeView={activeView} />)
  }

  if (isFiveKilometerCategoryView(activeView)) {
    return (<FiveKilometerView activeView={activeView} />)
  }

  if (isFourXHundredMeterCategoryView(activeView)) {
    return (<FourXHundredMeterView activeView={activeView} />)
  }

  return null
}
