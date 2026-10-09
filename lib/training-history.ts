import { formatDisplayTime, formatDate, formatClock, formatDuration } from '@/lib/test-history'
import { buildXlsx, type Cell, downloadBlob, shareFile } from '@/lib/xlsx-writer'

export interface UnifiedTraineeResult {
  traineeIndex: number
  valueDisplay: string
  score: number
  levelLabel?: string
}

export interface UnifiedTrainingSession {
  id: string
  type: 'timed' | 'repetition'
  eventName: string
  categoryName: string
  savedAt: string
  durationMs: number | null
  traineesCount: number
  bestDisplay: string
  averageScore: number
  results: UnifiedTraineeResult[]
}

const TIMED_STORAGE_KEY = 'timed-test-history-v1'
const REPETITION_STORAGE_KEY = 'repetition-test-history-v1'

export function getUnifiedTrainingHistory(): UnifiedTrainingSession[] {
  if (typeof window === 'undefined') return []

  const sessions: UnifiedTrainingSession[] = []

  // 1. Load timed test sessions
  try {
    const rawTimed = localStorage.getItem(TIMED_STORAGE_KEY)
    if (rawTimed) {
      const parsedTimed = JSON.parse(rawTimed)
      if (Array.isArray(parsedTimed)) {
        for (const item of parsedTimed) {
          if (!item || !item.id || !Array.isArray(item.results)) continue

          const results: UnifiedTraineeResult[] = item.results.map((r: { seconds: number; score: number }, idx: number) => ({
            traineeIndex: idx + 1,
            valueDisplay: formatDisplayTime(r.seconds),
            score: r.score ?? 0,
          }))

          const bestSeconds = item.results.length > 0 ? Math.min(...item.results.map((r: { seconds: number }) => r.seconds)) : 0
          const avgScore = item.results.length > 0
            ? Math.round(item.results.reduce((acc: number, r: { score: number }) => acc + (r.score ?? 0), 0) / item.results.length)
            : 0

          sessions.push({
            id: item.id,
            type: 'timed',
            eventName: item.eventName || 'اختبار زمني',
            categoryName: item.categoryName || '',
            savedAt: item.savedAt || new Date().toISOString(),
            durationMs: item.durationMs ?? null,
            traineesCount: results.length,
            bestDisplay: formatDisplayTime(bestSeconds),
            averageScore: avgScore,
            results,
          })
        }
      }
    }
  } catch (err) {
    console.error('Error loading timed history:', err)
  }

  // 2. Load repetition test sessions
  try {
    const rawRepetition = localStorage.getItem(REPETITION_STORAGE_KEY)
    if (rawRepetition) {
      const parsedRepetition = JSON.parse(rawRepetition)
      if (Array.isArray(parsedRepetition)) {
        for (const item of parsedRepetition) {
          if (!item || !item.id || !Array.isArray(item.results)) continue

          const results: UnifiedTraineeResult[] = item.results.map((r: { count: number; score: number }, idx: number) => ({
            traineeIndex: idx + 1,
            valueDisplay: `${r.count} تكرار`,
            score: r.score ?? 0,
          }))

          const bestCount = item.results.length > 0 ? Math.max(...item.results.map((r: { count: number }) => r.count)) : 0
          const avgScore = item.results.length > 0
            ? Math.round(item.results.reduce((acc: number, r: { score: number }) => acc + (r.score ?? 0), 0) / item.results.length)
            : 0

          sessions.push({
            id: item.id,
            type: 'repetition',
            eventName: item.eventName || 'اختبار تكرارات',
            categoryName: item.categoryName || '',
            savedAt: item.savedAt || new Date().toISOString(),
            durationMs: item.durationMs ?? null,
            traineesCount: results.length,
            bestDisplay: `${bestCount} تكرار`,
            averageScore: avgScore,
            results,
          })
        }
      }
    }
  } catch (err) {
    console.error('Error loading repetition history:', err)
  }

  // Sort by date descending (latest sessions first)
  sessions.sort((a, b) => new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime())

  return sessions
}

export function deleteTrainingSession(id: string, type: 'timed' | 'repetition') {
  if (typeof window === 'undefined') return

  const key = type === 'timed' ? TIMED_STORAGE_KEY : REPETITION_STORAGE_KEY
  try {
    const raw = localStorage.getItem(key)
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        const filtered = parsed.filter((entry: { id: string }) => entry.id !== id)
        localStorage.setItem(key, JSON.stringify(filtered))
      }
    }
  } catch (err) {
    console.error('Error deleting session:', err)
  }
}

export function clearAllTrainingSessions() {
  if (typeof window === 'undefined') return
  localStorage.removeItem(TIMED_STORAGE_KEY)
  localStorage.removeItem(REPETITION_STORAGE_KEY)
}

export function exportAllSessionsToExcel(sessions: UnifiedTrainingSession[], onShare = false) {
  const header: Cell[] = [
    'التاريخ',
    'الوقت',
    'نوع الاختبار',
    'اسم الاختبار',
    'الفئة العمرية',
    'مدة الاختبار',
    'رقم المتدرب',
    'النتيجة المسجلة',
    'الدرجة / العلامة',
  ].map((v) => ({ v, s: 'header' as const }))

  const rows: Cell[][] = sessions.flatMap((session) =>
    session.results.map((r) => [
      formatDate(session.savedAt),
      formatClock(session.savedAt),
      session.type === 'timed' ? 'اختبار زمني' : 'اختبار تكرارات',
      session.eventName,
      session.categoryName,
      formatDuration(session.durationMs),
      r.traineeIndex,
      r.valueDisplay,
      r.score,
    ])
  )

  const blob = buildXlsx([
    {
      name: 'سجل التدريب الشامل',
      widths: [14, 10, 16, 22, 18, 14, 12, 18, 14],
      rows: [header, ...rows],
    },
  ])

  const fileName = `سجل-التدريب-الشامل-${new Date().toISOString().slice(0, 10)}.xlsx`

  if (onShare) {
    shareFile(blob, fileName)
  } else {
    downloadBlob(blob, fileName)
  }
}

function escapeCsvValue(val: string | number | null | undefined): string {
  if (val === null || val === undefined) return '""'
  const str = String(val).replace(/"/g, '""')
  return `"${str}"`
}

/**
 * تصدير السجل كاملاً بصيغة CSV متوافقة مع Excel مع ترميز UTF-8 مع BOM
 */
export function exportAllSessionsToCsv(sessions: UnifiedTrainingSession[], onShare = false) {
  const headers = [
    'التاريخ',
    'الوقت',
    'نوع الاختبار',
    'اسم الاختبار',
    'الفئة العمرية',
    'مدة الاختبار',
    'رقم المتدرب',
    'النتيجة المسجلة',
    'الدرجة / العلامة',
  ]

  const csvRows: string[] = [headers.map(escapeCsvValue).join(',')]

  for (const session of sessions) {
    for (const r of session.results) {
      const row = [
        formatDate(session.savedAt),
        formatClock(session.savedAt),
        session.type === 'timed' ? 'اختبار زمني' : 'اختبار تكرارات',
        session.eventName,
        session.categoryName,
        formatDuration(session.durationMs),
        r.traineeIndex,
        r.valueDisplay,
        r.score,
      ]
      csvRows.push(row.map(escapeCsvValue).join(','))
    }
  }

  const csvString = '\uFEFF' + csvRows.join('\r\n')
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' })
  const fileName = `سجل-التدريب-${new Date().toISOString().slice(0, 10)}.csv`

  if (onShare) {
    shareFile(blob, fileName)
  } else {
    downloadBlob(blob, fileName)
  }
}

/**
 * تصدير السجل كاملاً كنسخة احتياطية JSON لحفظ واستعادة البيانات
 */
export function exportAllSessionsToJson(sessions: UnifiedTrainingSession[], onShare = false) {
  const backupData = {
    appName: 'منظومة تدريب الدروع واللياقة البدنية',
    version: '1.0',
    exportedAt: new Date().toISOString(),
    totalSessions: sessions.length,
    sessions,
  }

  const jsonString = JSON.stringify(backupData, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' })
  const fileName = `نسخة-احتياطية-تدريب-${new Date().toISOString().slice(0, 10)}.json`

  if (onShare) {
    shareFile(blob, fileName)
  } else {
    downloadBlob(blob, fileName)
  }
}

/**
 * تصدير جلسة واحدة بصيغة CSV
 */
export function exportSingleSessionToCsv(session: UnifiedTrainingSession, onShare = false) {
  const headers = [
    'التاريخ',
    'الوقت',
    'اسم الاختبار',
    'الفئة العمرية',
    'مدة الاختبار',
    'رقم المتدرب',
    'النتيجة المسجلة',
    'العلامة',
  ]

  const csvRows: string[] = [headers.map(escapeCsvValue).join(',')]

  for (const r of session.results) {
    const row = [
      formatDate(session.savedAt),
      formatClock(session.savedAt),
      session.eventName,
      session.categoryName,
      formatDuration(session.durationMs),
      r.traineeIndex,
      r.valueDisplay,
      r.score,
    ]
    csvRows.push(row.map(escapeCsvValue).join(','))
  }

  const csvString = '\uFEFF' + csvRows.join('\r\n')
  const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8' })
  const fileName = `جلسة-${session.eventName}-${formatDate(session.savedAt).replace(/\//g, '-')}.csv`

  if (onShare) {
    shareFile(blob, fileName)
  } else {
    downloadBlob(blob, fileName)
  }
}

/**
 * تصدير جلسة واحدة بصيغة JSON
 */
export function exportSingleSessionToJson(session: UnifiedTrainingSession, onShare = false) {
  const jsonString = JSON.stringify(session, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' })
  const fileName = `جلسة-${session.eventName}-${formatDate(session.savedAt).replace(/\//g, '-')}.json`

  if (onShare) {
    shareFile(blob, fileName)
  } else {
    downloadBlob(blob, fileName)
  }
}

/**
 * استعادة أو استيراد جلسات التدريب من ملف JSON
 */
export function importSessionsFromJson(rawJson: string): { success: boolean; importedCount: number; message: string } {
  if (typeof window === 'undefined') {
    return { success: false, importedCount: 0, message: 'البيئة غير مدعومة' }
  }

  try {
    const data = JSON.parse(rawJson)
    const sessionsList: UnifiedTrainingSession[] = Array.isArray(data)
      ? data
      : Array.isArray(data.sessions)
      ? data.sessions
      : []

    if (sessionsList.length === 0) {
      return { success: false, importedCount: 0, message: 'لم يتم العثور على أي جلسات صالحة في الملف' }
    }

    // Load existing items
    const rawTimed = localStorage.getItem(TIMED_STORAGE_KEY)
    const timedEntries: any[] = rawTimed ? JSON.parse(rawTimed) : []
    const existingTimedIds = new Set(timedEntries.map((e) => e.id))

    const rawRepetition = localStorage.getItem(REPETITION_STORAGE_KEY)
    const repEntries: any[] = rawRepetition ? JSON.parse(rawRepetition) : []
    const existingRepIds = new Set(repEntries.map((e) => e.id))

    let importedCount = 0

    for (const session of sessionsList) {
      if (!session.id || !session.type) continue

      if (session.type === 'timed' && !existingTimedIds.has(session.id)) {
        timedEntries.push({
          id: session.id,
          savedAt: session.savedAt,
          eventName: session.eventName,
          categoryName: session.categoryName,
          durationMs: session.durationMs,
          results: session.results.map((r) => {
            // parse display value back to numeric seconds
            const parts = r.valueDisplay.split(':')
            let sec = 0
            if (parts.length === 2) {
              sec = parseFloat(parts[0]) * 60 + parseFloat(parts[1])
            } else {
              sec = parseFloat(r.valueDisplay) || 0
            }
            return { seconds: sec, score: r.score }
          }),
        })
        existingTimedIds.add(session.id)
        importedCount++
      } else if (session.type === 'repetition' && !existingRepIds.has(session.id)) {
        repEntries.push({
          id: session.id,
          savedAt: session.savedAt,
          eventName: session.eventName,
          categoryName: session.categoryName,
          durationMs: session.durationMs,
          results: session.results.map((r) => {
            const count = parseInt(r.valueDisplay, 10) || 0
            return { count, score: r.score }
          }),
        })
        existingRepIds.add(session.id)
        importedCount++
      }
    }

    localStorage.setItem(TIMED_STORAGE_KEY, JSON.stringify(timedEntries))
    localStorage.setItem(REPETITION_STORAGE_KEY, JSON.stringify(repEntries))

    return {
      success: true,
      importedCount,
      message: `تم استيراد ${importedCount} جلسة بنجاح إلى سجلك`,
    }
  } catch (err) {
    return {
      success: false,
      importedCount: 0,
      message: 'الملف غير صالح أو تالف، تأكد من اختيار ملف JSON صحيح',
    }
  }
}

