import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62MoveAndOccupyFiringLineUnit = 'فصيلة' | 'سرية'

export const T55_62_MOVE_AND_OCCUPY_FIRING_LINE_UNITS: Array<{ id: T55_62MoveAndOccupyFiringLineUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [390, 450, 540] },
  { id: 'سرية', label: 'السرية', thresholds: [420, 480, 600] },
]

export function createT55_62MoveAndOccupyFiringLineEvent(unit: T55_62MoveAndOccupyFiringLineUnit): SportEvent {
  const thresholds = T55_62_MOVE_AND_OCCUPY_FIRING_LINE_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [390, 450, 540]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-move-and-occupy-firing-line-${unit}`,
    name: `التحرك واحتلال خط رمي لصد هجمات العدو - ${unit} - T(55 + 62)`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
