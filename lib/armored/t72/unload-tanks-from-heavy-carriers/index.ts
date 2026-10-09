import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T72UnloadTanksFromHeavyCarriersUnit = 'طاقم' | 'فصيلة' | 'سرية'

export const T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS: Array<{ id: T72UnloadTanksFromHeavyCarriersUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'طاقم', label: 'الطاقم', thresholds: [480, 540, 600] },
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [480, 540, 600] },
  { id: 'سرية', label: 'السرية', thresholds: [540, 600, 660] },
]

export function createT72UnloadTanksFromHeavyCarriersEvent(unit: T72UnloadTanksFromHeavyCarriersUnit): SportEvent {
  const thresholds = T72_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [480, 540, 600]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t72-unload-tanks-from-heavy-carriers-${unit}`,
    name: `تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
