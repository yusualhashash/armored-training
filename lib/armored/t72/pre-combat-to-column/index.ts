import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72PreCombatToColumnUnit = 'سرية' | 'كتيبة'

export const T72_PRE_COMBAT_TO_COLUMN_UNITS: Array<{ id: T72PreCombatToColumnUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'سرية', label: 'السرية', thresholds: [100, 110, 130] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [180, 200, 240] },
]

export function createT72PreCombatToColumnEvent(unit: T72PreCombatToColumnUnit): SportEvent {
  const thresholds = T72_PRE_COMBAT_TO_COLUMN_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [100, 110, 130]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-pre-combat-to-column-${unit}`,
    name: `الانتقال من ترتيب ما قبل القتال الى الرتل - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
