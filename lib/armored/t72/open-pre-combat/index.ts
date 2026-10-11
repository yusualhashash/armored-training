import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72OpenPreCombatUnit = 'فصيلة' | 'سرية' | 'كتيبة'

export const T72_OPEN_PRE_COMBAT_UNITS: Array<{ id: T72OpenPreCombatUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [35, 40, 50] },
  { id: 'سرية', label: 'السرية', thresholds: [55, 60, 70] },
  { id: 'كتيبة', label: 'الكتيبة', thresholds: [165, 180, 210] },
]

export function createT72OpenPreCombatEvent(unit: T72OpenPreCombatUnit): SportEvent {
  const thresholds = T72_OPEN_PRE_COMBAT_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [35, 40, 50]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-open-pre-combat-${unit}`,
    name: `الفتح من ترتيب ما قبل القتال - ${unit} - T72`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
