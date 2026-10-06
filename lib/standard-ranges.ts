import { roundToTenth, TENTHS_PER_SECOND } from '@/lib/performance'
import type { PerformanceLevel, PerformanceStandard } from '@/lib/types'

/** نطاق زمني واحد لعرضه في جدول معايير الأداء. */
export interface StandardRange {
  level: PerformanceLevel
  lowerSeconds: number
  upperSeconds: number
}

/**
 * يحوّل المعايير إلى نطاقات زمنية متتابعة دون فراغات:
 * بداية كل نطاق هي نهاية النطاق الذي قبله زائد خطوة الجدول
 * (عُشر الثانية للاختبارات القصيرة، وثانية واحدة لما يزيد عن دقيقة).
 */
export function buildStandardRanges(standards: PerformanceStandard[]): StandardRange[] {
  const step = resolveStep(standards)

  return standards.map((standard, index) => ({
    level: standard.level,
    lowerSeconds: index === 0 ? 0 : roundToTenth(standards[index - 1].time + step),
    upperSeconds: standard.time,
  }))
}

/** نصّ عربي مقروء لنطاق معيار واحد، مثل «13.4 – 14.0 ثانية» أو «12:01 – 12:15 دقيقة». */
export function formatStandardRange(range: StandardRange): string {
  const isMinute = range.upperSeconds >= 60 || range.lowerSeconds >= 60

  if (isMinute) {
    const formatMin = (sec: number) => {
      const m = Math.floor(sec / 60)
      const s = sec % 60
      const sStr = s % 1 === 0 ? String(s).padStart(2, '0') : s.toFixed(1).padStart(4, '0')
      return `${String(m).padStart(2, '0')}:${sStr}`
    }

    const lower = range.lowerSeconds === 0 ? '00:00' : formatMin(roundToTenth(range.lowerSeconds))

    if (!Number.isFinite(range.upperSeconds)) {
      return `${lower} دقيقة فأكثر`
    }

    return `${lower} – ${formatMin(roundToTenth(range.upperSeconds))} دقيقة`
  }

  const lower = roundToTenth(range.lowerSeconds).toFixed(1)

  if (!Number.isFinite(range.upperSeconds)) return `${lower} ثانية فأكثر`

  return `${lower} – ${roundToTenth(range.upperSeconds).toFixed(1)} ثانية`
}

function resolveStep(standards: PerformanceStandard[]): number {
  const finiteTimes = standards.filter((standard) => Number.isFinite(standard.time)).map((standard) => standard.time)
  const slowestStandard = Math.max(0, ...finiteTimes)

  return slowestStandard < 60 ? 1 / TENTHS_PER_SECOND : 1
}
