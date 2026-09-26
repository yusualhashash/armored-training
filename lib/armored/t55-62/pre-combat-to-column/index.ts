import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62PreCombatToColumnUnit = 'سرية' | 'كتيبة'

export const T55_62_PRE_COMBAT_TO_COLUMN_UNITS: Array<{ id: T55_62PreCombatToColumnUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'سرية', label: 'السرية', thresholds: [110, 120, 145] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [205, 230, 275] },
]

export function createT55_62PreCombatToColumnEvent(unit: T55_62PreCombatToColumnUnit): SportEvent {
  const thresholds = T55_62_PRE_COMBAT_TO_COLUMN_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [110, 120, 145]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-pre-combat-to-column-${unit}`,
    name: `الانتقال من ترتيب ما قبل القتال الى الرتل - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
