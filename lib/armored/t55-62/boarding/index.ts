import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62Unit = 'طاقم' | 'فصيلة' | 'سرية'

export const T55_62_UNITS: Array<{ id: T55_62Unit; label: string; thresholds: [number, number, number] }> = [
  { id: 'طاقم', label: 'الطاقم', thresholds: [9, 10, 12] },
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [10, 11, 13] },
  { id: 'سرية', label: 'السرية', thresholds: [12, 13, 16] },
]

export function createT55_62Event(unit: T55_62Unit): SportEvent {
  const thresholds = T55_62_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [9, 10, 12]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-${unit}`,
    name: `ركوب ${unit} في الدبابة - T(55 + 62)`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
