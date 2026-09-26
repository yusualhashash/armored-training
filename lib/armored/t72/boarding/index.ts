import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72Unit = 'طاقم' | 'فصيلة' | 'سرية'

export const T72_UNITS: Array<{ id: T72Unit; label: string; thresholds: [number, number, number] }> = [
  { id: 'طاقم', label: 'الطاقم', thresholds: [8, 9, 10] },
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [9, 10, 12] },
  { id: 'سرية', label: 'السرية', thresholds: [11, 12, 14] },
]

export function createT72Event(unit: T72Unit): SportEvent {
  const thresholds = T72_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [8, 9, 10]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-${unit}`,
    name: `ركوب ${unit} في الدبابة - T72`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
