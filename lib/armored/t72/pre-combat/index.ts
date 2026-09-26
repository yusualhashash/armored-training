import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72PreCombatUnit = 'فصيلة' | 'سرية' | 'كتيبة'

export const T72_PRE_COMBAT_UNITS: Array<{ id: T72PreCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [30, 35, 42] },
  { id: 'سرية', label: 'السرية', thresholds: [50, 55, 65] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [165, 180, 210] },
]

export function createT72PreCombatEvent(unit: T72PreCombatUnit): SportEvent {
  const thresholds = T72_PRE_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [8, 9, 10]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-pre-combat-${unit}`,
    name: `الانتقال من ترتيب القتال إلى ترتيب ما قبل القتال - T72`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
