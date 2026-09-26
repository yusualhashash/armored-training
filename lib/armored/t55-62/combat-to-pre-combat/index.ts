import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62CombatToPreCombatUnit = 'فصيلة' | 'سرية' | 'كتيبة'

export const T55_62_COMBAT_TO_PRE_COMBAT_UNITS: Array<{ id: T55_62CombatToPreCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [40, 45, 55] },
  { id: 'سرية', label: 'السرية', thresholds: [55, 60, 130] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [190, 210, 250] },
]

export function createT55_62CombatToPreCombatEvent(unit: T55_62CombatToPreCombatUnit): SportEvent {
  const thresholds = T55_62_COMBAT_TO_PRE_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [110, 120, 145]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-combat-to-pre-combat-${unit}`,
    name: `الانتقال من ترتيب القتال الى ترتيب ما قبل القتال - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}

