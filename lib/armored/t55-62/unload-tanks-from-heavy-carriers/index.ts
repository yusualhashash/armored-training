import type { PerformanceStandard, SportEvent } from '@/lib/types'

export type T55_62UnloadTanksFromHeavyCarriersUnit = 'طاقم' | 'فصيلة' | 'سرية'

export const T55_62_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS: Array<{ id: T55_62UnloadTanksFromHeavyCarriersUnit; label: string; thresholds: [number, number, number] }> = [
  { id: 'طاقم', label: 'الطاقم', thresholds: [300, 360, 420] },
  { id: 'فصيلة', label: 'الفصيلة', thresholds: [300, 360, 420] },
  { id: 'سرية', label: 'السرية', thresholds: [360, 420, 480] },
]

export function createT55_62UnloadTanksFromHeavyCarriersEvent(unit: T55_62UnloadTanksFromHeavyCarriersUnit): SportEvent {
  const thresholds = T55_62_UNLOAD_TANKS_FROM_HEAVY_CARRIERS_UNITS.find((entry) => entry.id === unit)?.thresholds ?? [300, 360, 420]
  const standards: PerformanceStandard[] = [
    { time: thresholds[0], level: 'excellent' },
    { time: thresholds[1], level: 'good' },
    { time: thresholds[2], level: 'acceptable' },
    { time: Number.POSITIVE_INFINITY, level: 'poor' },
  ]
  return {
    id: `t55-62-unload-tanks-from-heavy-carriers-${unit}`,
    name: `تنزيل الدبابات عن الحاملات ذات الحمولة الكبيرة (50 طن) - ${unit}`,
    description: 'قياس الزمن وفق معايير الأداء المعتمدة',
    maxScore: 0,
    categories: [],
    standards,
    scores: [],
  }
}
