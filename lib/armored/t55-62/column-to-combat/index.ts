import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62ColumnToCombatUnit = 'سرية' | 'كتيبة'

export const T55_62_COLUMN_TO_COMBAT_UNITS: Array<{ id: T55_62ColumnToCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'سرية', label: 'السرية', thresholds: [180, 200, 240] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [385, 420, 500] },
]

export function createT55_62ColumnToCombatEvent(unit: T55_62ColumnToCombatUnit): SportEvent {
  const thresholds = T55_62_COLUMN_TO_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [180, 200, 240]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-column-to-combat-${unit}`,
    name: `الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
