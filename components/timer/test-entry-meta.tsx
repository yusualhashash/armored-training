import { formatClock, formatDate, formatDuration } from '@/lib/test-history'

interface TestEntryMetaProps {
  savedAt: string
  durationMs: number | null
  className?: string
}

/** سطر يعرض تاريخ ووقت الجلسة ومدة ساعة الإيقاف (إن وُجدت). */
export function TestEntryMeta({ savedAt, durationMs, className }: TestEntryMetaProps) {
  const values = [formatDate(savedAt), formatClock(savedAt), ...(durationMs !== null ? [formatDuration(durationMs)] : [])]

  return (
    <span className={`inline-flex flex-wrap items-center gap-x-2 gap-y-1 ${className ?? ''}`}>
      {values.map((value, index) => (
        <span key={index} className="inline-flex items-center gap-x-2">
          {index > 0 && <span aria-hidden="true" className="opacity-40">•</span>}
          <bdi dir="ltr" className="tabular-nums">{value}</bdi>
        </span>
      ))}
    </span>
  )
}
