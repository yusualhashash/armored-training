import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72ColumnToCombatFlankUnit = 'فصيلة' | 'سرية' | 'كتيبة'

export const T72_COLUMN_TO_COMBAT_FLANK_UNITS: Array<{ id: T72ColumnToCombatFlankUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [16, 18, 20] },
  { id: 'سرية', label: 'السرية', thresholds: [20, 25, 30] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [35, 40, 45] },
]

export function createT72ColumnToCombatFlankEvent(unit: T72ColumnToCombatFlankUnit): SportEvent {
  const thresholds = T72_COLUMN_TO_COMBAT_FLANK_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [16, 18, 20]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-column-to-combat-flank-${unit}`,
    name: `الفتح من رتل التحرك الى ترتيب القتال الصد هجوم مفاجئ معاد (باتجاه الجوانب) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
