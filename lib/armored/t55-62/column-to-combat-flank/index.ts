import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62ColumnToCombatFlankUnit = 'فصيلة' | 'سرية' | 'كتيبة'

export const T55_62_COLUMN_TO_COMBAT_FLANK_UNITS: Array<{ id: T55_62ColumnToCombatFlankUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [18, 20, 24] },
  { id: 'سرية', label: 'السرية', thresholds: [25, 30, 35] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [40, 50, 70] },
]

export function createT55_62ColumnToCombatFlankEvent(unit: T55_62ColumnToCombatFlankUnit): SportEvent {
  const thresholds = T55_62_COLUMN_TO_COMBAT_FLANK_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [18, 20, 24]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-column-to-combat-flank-${unit}`,
    name: `الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
