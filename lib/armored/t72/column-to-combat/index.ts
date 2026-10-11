import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72ColumnToCombatUnit = 'سرية' | 'كتيبة'

export const T72_COLUMN_TO_COMBAT_UNITS: Array<{ id: T72ColumnToCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'سرية', label: 'السرية', thresholds: [155, 170, 200] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [330, 360, 430] },
]

export function createT72ColumnToCombatEvent(unit: T72ColumnToCombatUnit): SportEvent {
  const thresholds = T72_COLUMN_TO_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [155, 170, 200]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-column-to-combat-${unit}`,
    name: `الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجبهة) - ${unit} - T72`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
