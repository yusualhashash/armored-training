import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62PreCombatUnit = 'سرية' | 'كتيبة'

export const T55_62_PRE_COMBAT_UNITS: Array<{ id: T55_62PreCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'سرية', label: 'السرية', thresholds: [120, 135, 165] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [210, 240, 290] },
]

export function createT55_62PreCombatEvent(unit: T55_62PreCombatUnit): SportEvent {
  const thresholds = T55_62_PRE_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [9, 10, 12]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-pre-combat-${unit}`,
    name: `الانتقال إلى ترتيب ما قبل القتال - T55-62`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
