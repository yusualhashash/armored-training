import { T55_62View, type T55_62ViewId } from '@/components/armored/t55-62/boarding/view';
import { T55_62DisembarkingView, type T55_62DisembarkingViewId } from '@/components/armored/t55-62/disembarking/view';
import { T55_62OpenPreCombatView, type T55_62OpenPreCombatViewId } from '@/components/armored/t55-62/open-pre-combat/view';
import { T55_62PreCombatView, type T55_62PreCombatViewId } from '@/components/armored/t55-62/pre-combat/view';
import { T72View } from '@/components/armored/t72/boarding/view';
import { T72DisembarkingView, type T72DisembarkingViewId } from '@/components/armored/t72/disembarking/view';
import { T72OpenPreCombatView, type T72OpenPreCombatViewId } from '@/components/armored/t72/open-pre-combat/view';
import { T72PreCombatView, type T72PreCombatViewId } from '@/components/armored/t72/pre-combat/view';
import { T72CombatToPreCombatView, type T72CombatToPreCombatViewId } from '@/components/armored/t72/combat-to-pre-combat/view';
import { T55_62CombatToPreCombatView, type T55_62CombatToPreCombatViewId } from '@/components/armored/t55-62/combat-to-pre-combat/view';
import type { NavigationProps } from '@/lib/training/navigation'

export function ArmoredViews({ activeView, openView }: NavigationProps) {
  if ((activeView === 't72-boarding' || activeView === 't72-طاقم' || activeView === 't72-فصيلة' || activeView === 't72-سرية')) {
    return (<T72View activeView={activeView} openView={openView} />)
  }

  if ((activeView === 't72-disembarking' || activeView === 't72-disembarking-طاقم' || activeView === 't72-disembarking-فصيلة' || activeView === 't72-disembarking-سرية')) {
    return (<T72DisembarkingView activeView={activeView as T72DisembarkingViewId} openView={openView as (view: T72DisembarkingViewId) => void} />)
  }

  if ((activeView === 't72-pre-combat' || activeView === 't72-pre-combat-سرية' || activeView === 't72-pre-combat-كتيبة')) {
    return (<T72PreCombatView activeView={activeView as T72PreCombatViewId} openView={openView as (view: T72PreCombatViewId) => void} />)
  }

  if ((activeView === 't72-combat-to-pre-combat' || activeView === 't72-combat-to-pre-combat-فصيلة' || activeView === 't72-combat-to-pre-combat-سرية' || activeView === 't72-combat-to-pre-combat-كتيبة')) {
    return (<T72CombatToPreCombatView activeView={activeView as T72CombatToPreCombatViewId} openView={openView as (view: T72CombatToPreCombatViewId) => void} />)
  }

  if ((activeView === 't72-open-pre-combat' || activeView === 't72-open-pre-combat-فصيلة' || activeView === 't72-open-pre-combat-سرية' || activeView === 't72-open-pre-combat-كتيبة')) {
    return (<T72OpenPreCombatView activeView={activeView as T72OpenPreCombatViewId} openView={openView as (view: T72OpenPreCombatViewId) => void} />)
  }

  if ((activeView === 't55-62-boarding' || activeView === 't55-62-طاقم' || activeView === 't55-62-فصيلة' || activeView === 't55-62-سرية')) {
    return (<T55_62View activeView={activeView as T55_62ViewId} openView={openView as (view: T55_62ViewId) => void} />)
  }

  if ((activeView === 't55-62-disembarking' || activeView === 't55-62-disembarking-طاقم' || activeView === 't55-62-disembarking-فصيلة' || activeView === 't55-62-disembarking-سرية')) {
    return (<T55_62DisembarkingView activeView={activeView as T55_62DisembarkingViewId} openView={openView as (view: T55_62DisembarkingViewId) => void} />)
  }

  if ((activeView === 't55-62-pre-combat' || activeView === 't55-62-pre-combat-سرية' || activeView === 't55-62-pre-combat-كتيبة')) {
    return (<T55_62PreCombatView activeView={activeView as T55_62PreCombatViewId} openView={openView as (view: T55_62PreCombatViewId) => void} />)
  }

  if ((activeView === 't55-62-combat-to-pre-combat' || activeView === 't55-62-combat-to-pre-combat-فصيلة' || activeView === 't55-62-combat-to-pre-combat-سرية' || activeView === 't55-62-combat-to-pre-combat-كتيبة')) {
    return (<T55_62CombatToPreCombatView activeView={activeView as T55_62CombatToPreCombatViewId} openView={openView as (view: T55_62CombatToPreCombatViewId) => void} />)
  }

  if ((activeView === 't55-62-open-pre-combat' || activeView === 't55-62-open-pre-combat-فصيلة' || activeView === 't55-62-open-pre-combat-سرية' || activeView === 't55-62-open-pre-combat-كتيبة')) {
    return (<T55_62OpenPreCombatView activeView={activeView as T55_62OpenPreCombatViewId} openView={openView as (view: T55_62OpenPreCombatViewId) => void} />)
  }

  return null
}
