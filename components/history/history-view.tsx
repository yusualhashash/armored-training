'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import {
  History,
  Timer,
  Dumbbell,
  Trash2,
  Download,
  Share2,
  Calendar,
  Clock,
  Users,
  Award,
  ChevronDown,
  Search,
  Filter,
  Play,
  RotateCcw,
  FileJson,
  FileSpreadsheet,
  FileText,
  Upload,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  getUnifiedTrainingHistory,
  deleteTrainingSession,
  clearAllTrainingSessions,
  exportAllSessionsToExcel,
  exportAllSessionsToCsv,
  exportAllSessionsToJson,
  exportSingleSessionToCsv,
  exportSingleSessionToJson,
  importSessionsFromJson,
  type UnifiedTrainingSession,
} from '@/lib/training-history'
import { formatDate, formatClock, formatDuration } from '@/lib/test-history'
import { isMobileDevice, buildXlsx, downloadBlob, shareFile, type Cell } from '@/lib/xlsx-writer'
import type { OpenView } from '@/lib/app/types'

interface HistoryViewProps {
  openView: OpenView
}

type FilterType = 'all' | 'timed' | 'repetition'

export function HistoryView({ openView }: HistoryViewProps) {
  const [sessions, setSessions] = useState<UnifiedTrainingSession[]>([])
  const [loaded, setLoaded] = useState(false)
  const [filter, setFilter] = useState<FilterType>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedSessions, setExpandedSessions] = useState<Record<string, boolean>>({})
  const [isMobile, setIsMobile] = useState(false)
  const [importNotice, setImportNotice] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const reloadSessions = () => {
    setSessions(getUnifiedTrainingHistory())
  }

  useEffect(() => {
    reloadSessions()
    setIsMobile(isMobileDevice())
    setLoaded(true)
  }, [])

  const filteredSessions = useMemo(() => {
    return sessions.filter((s) => {
      const matchesFilter = filter === 'all' || s.type === filter
      const matchesSearch =
        searchQuery === '' ||
        s.eventName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesFilter && matchesSearch
    })
  }, [sessions, filter, searchQuery])

  const stats = useMemo(() => {
    const totalSessions = sessions.length
    const totalTrainees = sessions.reduce((acc, s) => acc + s.traineesCount, 0)
    const avgScore =
      totalSessions > 0
        ? Math.round(sessions.reduce((acc, s) => acc + s.averageScore, 0) / totalSessions)
        : 0
    return { totalSessions, totalTrainees, avgScore }
  }, [sessions])

  const toggleExpand = (id: string) => {
    setExpandedSessions((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleDeleteSession = (session: UnifiedTrainingSession) => {
    if (window.confirm(`هل أنت متأكد من حذف جلسة "${session.eventName}"؟`)) {
      deleteTrainingSession(session.id, session.type)
      reloadSessions()
    }
  }

  const handleClearAll = () => {
    if (window.confirm('هل أنت متأكد من مسح جميع جلسات التدريب المحفوظة؟ لا يمكن التراجع عن هذا الإجراء.')) {
      clearAllTrainingSessions()
      reloadSessions()
    }
  }

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      if (!text) return
      const res = importSessionsFromJson(text)
      if (res.success) {
        setImportNotice(`تم استيراد ${res.importedCount} جلسة تدريب بنجاح!`)
        setTimeout(() => setImportNotice(null), 5000)
        reloadSessions()
      } else {
        alert(res.message)
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const exportSingleSession = (session: UnifiedTrainingSession) => {
    const header: Cell[] = [
      'التاريخ',
      'الوقت',
      'اسم الاختبار',
      'الفئة العمرية',
      'مدة الاختبار',
      'رقم المتدرب',
      'النتيجة المسجلة',
      'العلامة',
    ].map((v) => ({ v, s: 'header' as const }))

    const rows: Cell[][] = session.results.map((r) => [
      formatDate(session.savedAt),
      formatClock(session.savedAt),
      session.eventName,
      session.categoryName,
      formatDuration(session.durationMs),
      r.traineeIndex,
      r.valueDisplay,
      r.score,
    ])

    const blob = buildXlsx([
      {
        name: 'نتائج الجلسة',
        widths: [14, 10, 22, 18, 14, 12, 18, 14],
        rows: [header, ...rows],
      },
    ])

    const fileName = `جلسة-${session.eventName}-${formatDate(session.savedAt).replace(/\//g, '-')}.xlsx`
    if (isMobile) {
      shareFile(blob, fileName)
    } else {
      downloadBlob(blob, fileName)
    }
  }

  if (!loaded) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-2 border-emerald-400 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="mx-auto w-full max-w-2xl sm:max-w-3xl space-y-6 pb-12">
      {/* Tactical Hero Card */}
      <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-500/5 text-emerald-300 shadow-md">
                <History className="size-7" aria-hidden="true" />
              </div>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[11px] font-semibold tracking-wider text-emerald-400">
                  القسم الثالث · الأرشيف الميداني
                </span>
                <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  سجل التدريبات السابقة
                </h1>
              </div>
            </div>

            {/* Hidden file input for importing JSON backup */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportFile}
              accept=".json,application/json"
              className="hidden"
            />

            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="h-10 rounded-xl border-white/10 bg-white/[0.04] text-xs font-semibold text-white/80 transition-all hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white active:scale-95"
                title="استعادة جلسات التدريب من ملف نسخة احتياطية JSON"
              >
                <Upload className="ml-1.5 size-4 text-emerald-400" />
                <span>استيراد JSON</span>
              </Button>

              {sessions.length > 0 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleClearAll}
                  className="h-10 rounded-xl border-rose-500/30 bg-rose-500/10 text-xs font-semibold text-rose-300 transition-all hover:border-rose-500/50 hover:bg-rose-500/20 active:scale-95"
                  title="مسح جميع الجلسات"
                >
                  <Trash2 className="ml-1 size-4" />
                  <span>مسح السجل</span>
                </Button>
              )}
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
            مراجعة وتدقيق أداء المتدربين في الاختبارات المنجزة، مع إمكانية استخراج التقارير الرسمية وإجراء النسخ الاحتياطي الشامل للبيانات.
          </p>

          {/* Import Notification Banner */}
          {importNotice && (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/15 p-3 text-xs sm:text-sm font-semibold text-emerald-300 flex items-center justify-between">
              <span>{importNotice}</span>
              <button
                type="button"
                onClick={() => setImportNotice(null)}
                className="text-white/60 hover:text-white text-xs"
              >
                إغلاق
              </button>
            </div>
          )}

          {/* Backup & Export Toolbar */}
          {sessions.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-emerald-500/15 bg-[#08120b] p-3">
              <span className="text-xs font-bold text-emerald-400/90 ml-1">تصدير ونسخ احتياطي:</span>

              {/* JSON Export */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => exportAllSessionsToJson(sessions, isMobile)}
                className="h-9 rounded-xl border-amber-400/30 bg-amber-400/10 text-xs font-semibold text-amber-300 hover:border-amber-400/50 hover:bg-amber-400/20 active:scale-95"
                title="تصدير نسخة احتياطية كاملة بصيغة JSON لحفظ واستعادة البيانات"
              >
                {isMobile ? <Share2 className="ml-1.5 size-3.5" /> : <FileJson className="ml-1.5 size-3.5" />}
                <span>نسخة احتياطية (JSON)</span>
              </Button>

              {/* CSV Export */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => exportAllSessionsToCsv(sessions, isMobile)}
                className="h-9 rounded-xl border-sky-400/30 bg-sky-400/10 text-xs font-semibold text-sky-300 hover:border-sky-400/50 hover:bg-sky-400/20 active:scale-95"
                title="تصدير البيانات كجدول CSV متوافق مع البرامج الإحصائية"
              >
                {isMobile ? <Share2 className="ml-1.5 size-3.5" /> : <FileText className="ml-1.5 size-3.5" />}
                <span>ملف (CSV)</span>
              </Button>

              {/* Excel Export */}
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => exportAllSessionsToExcel(sessions, isMobile)}
                className="h-9 rounded-xl border-emerald-500/30 bg-emerald-500/10 text-xs font-semibold text-emerald-300 hover:border-emerald-500/50 hover:bg-emerald-500/20 active:scale-95"
                title="تصدير السجل كاملاً كجدول بيانات إكسل متقدم"
              >
                {isMobile ? <Share2 className="ml-1.5 size-3.5" /> : <FileSpreadsheet className="ml-1.5 size-3.5" />}
                <span>جدول Excel (XLSX)</span>
              </Button>
            </div>
          )}
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-5 text-center">
          <div className="rounded-2xl border border-white/10 bg-[#08120b] p-3 sm:p-4">
            <span className="text-xl sm:text-2xl font-black text-emerald-300 tabular-nums">
              {stats.totalSessions}
            </span>
            <span className="mt-1 block text-[11px] sm:text-xs text-white/50 font-medium">
              جلسة منجزة
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#08120b] p-3 sm:p-4">
            <span className="text-xl sm:text-2xl font-black text-amber-300 tabular-nums">
              {stats.totalTrainees}
            </span>
            <span className="mt-1 block text-[11px] sm:text-xs text-white/50 font-medium">
              متدرب تم تقييمهم
            </span>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#08120b] p-3 sm:p-4">
            <span className="text-xl sm:text-2xl font-black text-white tabular-nums">
              {stats.avgScore} <span className="text-xs font-normal text-emerald-400">/ 100</span>
            </span>
            <span className="mt-1 block text-[11px] sm:text-xs text-white/50 font-medium">
              متوسط العلامات
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      {sessions.length > 0 && (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex rounded-2xl border border-white/10 bg-[#08120b] p-1 gap-1">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/30 shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              الكل ({sessions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('timed')}
              className={`flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                filter === 'timed'
                  ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/30 shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              مسافات وجري ({sessions.filter((s) => s.type === 'timed').length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('repetition')}
              className={`flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                filter === 'repetition'
                  ? 'bg-gradient-to-b from-emerald-500/20 to-emerald-500/10 text-emerald-300 font-bold border border-emerald-500/30 shadow-sm'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              تمارين القوة ({sessions.filter((s) => s.type === 'repetition').length})
            </button>
          </div>

          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 size-4 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="بحث في السجل..."
              className="h-11 w-full rounded-2xl border border-white/10 bg-[#0c1610] pr-10 pl-4 text-xs sm:text-sm text-white placeholder:text-white/35 outline-none focus:border-emerald-500/40"
            />
          </div>
        </div>
      )}

      {/* Sessions List */}
      {sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-8 sm:p-12 text-center shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
          <div className="flex size-16 items-center justify-center rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-500/5 text-emerald-300 mb-4 shadow-lg shadow-emerald-500/5">
            <History className="size-8" />
          </div>
          <h2 className="text-lg font-bold text-white tracking-tight">لا توجد جلسات تدريبية بعد</h2>
          <p className="mt-2 max-w-md text-xs sm:text-sm leading-relaxed text-white/55">
            عند إتمام أي اختبار زمني أو بدني والضغط على «عرض النتيجة»، تُحفظ الجلسة تلقائياً في ذاكرة
            جهازك لتتمكن من مراجعة أداء المتدربين ومقارنة النتائج هنا.
          </p>
          <Button
            type="button"
            onClick={() => openView('sports')}
            className="mt-6 h-12 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 px-6 font-bold text-emerald-200 hover:border-emerald-500/50 hover:bg-emerald-500/20 flex items-center gap-2 transition active:scale-95"
          >
            <Play className="size-4" />
            <span>بدء تدريب جديد</span>
          </Button>
        </div>
      ) : filteredSessions.length === 0 ? (
        <div className="rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-8 text-center text-sm text-white/50 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
          لا توجد نتائج تطابق بحثك أو التصنيف المحدد.
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredSessions.map((session) => {
            const isExpanded = !!expandedSessions[session.id]

            return (
              <div
                key={session.id}
                className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-emerald-500/20 bg-[#0c1610] p-5 sm:p-6 text-right transition-all duration-300 hover:border-emerald-500/40 hover:bg-[#101e16] hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
              >
                {/* Session Main Bar */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border shadow-md ${
                        session.type === 'timed'
                          ? 'border-emerald-400/30 bg-gradient-to-br from-emerald-400/20 to-emerald-500/5 text-emerald-300'
                          : 'border-amber-400/30 bg-gradient-to-br from-amber-400/20 to-amber-500/5 text-amber-300'
                      }`}
                    >
                      {session.type === 'timed' ? (
                        <Timer className="size-7" />
                      ) : (
                        <Dumbbell className="size-7" />
                      )}
                    </div>
                    <div>
                      <div className="flex flex-col items-start gap-1">
                        <span
                          className={`text-[11px] font-semibold tracking-wider ${
                            session.type === 'timed' ? 'text-emerald-400' : 'text-amber-400'
                          }`}
                        >
                          {session.type === 'timed' ? 'اختبار مسافات وجري' : 'اختبار قوة وتحمل'} · {session.categoryName}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                          اختبار {session.eventName}
                        </h3>
                      </div>

                      <div className="mt-2 flex flex-wrap items-center gap-2 text-[11px] sm:text-xs text-white/50 font-medium">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          <span>{formatDate(session.savedAt)}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="size-3.5" />
                          <span>{formatClock(session.savedAt)}</span>
                        </span>
                        {session.durationMs !== null && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>المدة: {formatDuration(session.durationMs)}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 self-end sm:self-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => exportSingleSessionToJson(session, isMobile)}
                      className="h-8 rounded-xl border-amber-400/25 bg-amber-400/10 px-2.5 text-[11px] font-semibold text-amber-300 hover:border-amber-400/40 hover:bg-amber-400/20 active:scale-95"
                      title="تصدير هذه الجلسة بصيغة JSON"
                    >
                      <FileJson className="size-3 ml-1" />
                      <span>JSON</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => exportSingleSessionToCsv(session, isMobile)}
                      className="h-8 rounded-xl border-sky-400/25 bg-sky-400/10 px-2.5 text-[11px] font-semibold text-sky-300 hover:border-sky-400/40 hover:bg-sky-400/20 active:scale-95"
                      title="تصدير هذه الجلسة بصيغة CSV"
                    >
                      <FileText className="size-3 ml-1" />
                      <span>CSV</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => exportSingleSession(session)}
                      className="h-8 rounded-xl border-emerald-400/25 bg-emerald-400/10 px-2.5 text-[11px] font-semibold text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-400/20 active:scale-95"
                      title="تصدير هذه الجلسة بصيغة Excel"
                    >
                      <FileSpreadsheet className="size-3 ml-1" />
                      <span>Excel</span>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => handleDeleteSession(session)}
                      className="h-8 size-8 p-0 rounded-xl border-rose-500/25 bg-rose-500/10 text-rose-300 hover:border-rose-500/40 hover:bg-rose-500/20 active:scale-95"
                      title="حذف هذه الجلسة"
                    >
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </div>

                {/* Highlights Summary Row */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Users className="size-4 text-white/40" />
                    <span className="text-white/60">
                      العدد: <b className="text-white font-bold">{session.traineesCount} متدرب</b>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Award className="size-4 text-amber-300" />
                    <span className="text-white/60">
                      أفضل أداء:{' '}
                      <b className="text-amber-300 font-mono font-bold">
                        {session.bestDisplay}
                      </b>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-white/60">
                      متوسط العلامات:{' '}
                      <b className="text-emerald-300 font-bold">{session.averageScore} ن</b>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(session.id)}
                    className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/80 hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-white transition active:scale-95"
                  >
                    <span>{isExpanded ? 'إخفاء التفاصيل' : 'عرض المتدربين'}</span>
                    <ChevronDown
                      className={`size-3.5 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Expanded Trainee Results Table */}
                {isExpanded && (
                  <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-[#08120b] p-4 sm:p-5">
                    <h4 className="text-xs font-bold text-emerald-400 mb-3">
                      نتائج المتدربين المسجلة في الجلسة:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5">
                      {session.results.map((res) => (
                        <div
                          key={res.traineeIndex}
                          className="flex flex-col rounded-xl border border-white/10 bg-[#0c1610] p-2.5 text-center"
                        >
                          <span className="text-[11px] text-white/45">
                            المتدرب {res.traineeIndex}
                          </span>
                          <span className="mt-1 font-mono text-sm font-bold text-white">
                            {res.valueDisplay}
                          </span>
                          <span className="mt-1 border-t border-white/5 pt-1 text-xs font-bold text-emerald-300">
                            {res.score} <span className="text-[10px] font-normal text-white/40">علامة</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
