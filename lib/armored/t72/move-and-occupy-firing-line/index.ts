import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72MoveAndOccupyFiringLineUnit = 'فصيلة' | 'سرية'

export const T72_MOVE_AND_OCCUPY_FIRING_LINE_UNITS: Array<{ id: T72MoveAndOccupyFiringLineUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [360, 420, 480] },
  { id: 'سرية', label: 'السرية', thresholds: [390, 450, 540] },
]

export function createT72MoveAndOccupyFiringLineEvent(unit: T72MoveAndOccupyFiringLineUnit): SportEvent {
  const thresholds = T72_MOVE_AND_OCCUPY_FIRING_LINE_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [360, 420, 480]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-move-and-occupy-firing-line-${unit}`,
    name: `التحرك واحتلال خط رمي لصد هجمات العدو - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
