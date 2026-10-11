import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62OpenPreCombatUnit = 'فصيلة' | 'سرية' | 'كتيبة'

export const T55_62_OPEN_PRE_COMBAT_UNITS: Array<{ id: T55_62OpenPreCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [45, 50, 60] },
  { id: 'سرية', label: 'السرية', thresholds: [60, 70, 85] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [190, 210, 250] },
]

export function createT55_62OpenPreCombatEvent(unit: T55_62OpenPreCombatUnit): SportEvent {
  const thresholds = T55_62_OPEN_PRE_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [45, 50, 60]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-open-pre-combat-${unit}`,
    name: `الفتح من ترتيب ما قبل القتال - ${unit} - T(55 + 62)`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
