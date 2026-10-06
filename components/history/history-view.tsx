'use client'

import { useEffect, useState, useMemo } from 'react'
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
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  getUnifiedTrainingHistory,
  deleteTrainingSession,
  clearAllTrainingSessions,
  exportAllSessionsToExcel,
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
        <div className="size-8 animate-spin rounded-full border-2 border-rose-200 border-t-transparent" />
      </div>
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 pb-12">
      {/* Header Info */}
      <div className="rounded-[2.5rem] border border-white/10 bg-[#101216] p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-rose-200/10 text-rose-200 shadow-inner">
              <History className="size-7" aria-hidden="true" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">سجل التدريبات السابقة</h1>
              <p className="mt-1 text-xs sm:text-sm text-white/50">
                مراجعة الأداء وتفاصيل النتائج المحفوظة محلياً على جهازك
              </p>
            </div>
          </div>

          {sessions.length > 0 && (
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => exportAllSessionsToExcel(sessions, isMobile)}
                className="h-11 rounded-xl border-emerald-300/30 bg-emerald-500/10 text-xs sm:text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
              >
                {isMobile ? <Share2 className="ml-2 size-4" /> : <Download className="ml-2 size-4" />}
                <span>تصدير السجل كاملاً</span>
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClearAll}
                className="h-11 rounded-xl border-rose-300/30 bg-rose-500/10 text-xs sm:text-sm font-semibold text-rose-300 hover:bg-rose-500/20"
              >
                <Trash2 className="size-4" />
              </Button>
            </div>
          )}
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 sm:p-4">
            <span className="text-xl sm:text-2xl font-black text-rose-200 tabular-nums">
              {stats.totalSessions}
            </span>
            <span className="mt-1 block text-[11px] sm:text-xs text-white/50 font-medium">
              جلسة منجزة
            </span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 sm:p-4">
            <span className="text-xl sm:text-2xl font-black text-emerald-300 tabular-nums">
              {stats.totalTrainees}
            </span>
            <span className="mt-1 block text-[11px] sm:text-xs text-white/50 font-medium">
              متدرب تم تقييمهم
            </span>
          </div>

          <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-3 sm:p-4">
            <span className="text-xl sm:text-2xl font-black text-sky-300 tabular-nums">
              {stats.avgScore} <span className="text-xs font-normal text-white/40">/ 100</span>
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
          <div className="flex rounded-2xl border border-white/10 bg-[#101216] p-1 gap-1">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-semibold transition ${
                filter === 'all'
                  ? 'bg-rose-200 text-[#24131b] shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              الكل ({sessions.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('timed')}
              className={`flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-semibold transition ${
                filter === 'timed'
                  ? 'bg-rose-200 text-[#24131b] shadow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              مسافات وجري ({sessions.filter((s) => s.type === 'timed').length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('repetition')}
              className={`flex-1 sm:flex-initial rounded-xl px-4 py-2 text-xs font-semibold transition ${
                filter === 'repetition'
                  ? 'bg-rose-200 text-[#24131b] shadow'
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
              className="h-11 w-full rounded-2xl border border-white/10 bg-[#101216] pr-10 pl-4 text-xs sm:text-sm text-white placeholder:text-white/30 outline-none focus:border-rose-200/50"
            />
          </div>
        </div>
      )}

      {/* Sessions List */}
      {sessions.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[2.5rem] border border-white/10 bg-[#101216] p-10 text-center">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-white/[0.04] text-white/40 mb-4">
            <History className="size-8" />
          </div>
          <h2 className="text-lg font-bold text-white">لا توجد جلسات تدريبية بعد</h2>
          <p className="mt-2 max-w-md text-xs sm:text-sm leading-6 text-white/50">
            عند إتمام أي اختبار زمني أو بدني والضغط على «عرض النتيجة»، تُحفظ الجلسة تلقائياً في ذاكرة
            جهازك لتتمكن من مراجعة أداء المتدربين ومقارنة النتائج هنا.
          </p>
          <Button
            type="button"
            onClick={() => openView('sports')}
            className="mt-6 h-12 rounded-2xl bg-rose-200 px-6 font-bold text-[#24131b] hover:bg-rose-100 flex items-center gap-2"
          >
            <Play className="size-4" />
            <span>بدء تدريب جديد</span>
          </Button>
        </div>
      ) : filteredSessions.length === 0 ? (
        <div className="rounded-[2rem] border border-white/10 bg-[#101216] p-8 text-center text-sm text-white/50">
          لا توجد نتائج تطابق بحثك أو التصنيف المحدد.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredSessions.map((session) => {
            const isExpanded = !!expandedSessions[session.id]

            return (
              <div
                key={session.id}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101216] transition-all hover:border-white/20"
              >
                {/* Session Main Bar */}
                <div className="p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-rose-200 mt-0.5">
                        {session.type === 'timed' ? (
                          <Timer className="size-6" />
                        ) : (
                          <Dumbbell className="size-6" />
                        )}
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-bold text-white">
                            اختبار {session.eventName}
                          </h3>
                          <span className="rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-0.5 text-[11px] text-white/60">
                            {session.categoryName}
                          </span>
                        </div>
                        <div className="mt-1.5 flex flex-wrap items-center gap-3 text-xs text-white/45">
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="size-3.5" />
                            <span>{formatDate(session.savedAt)}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Clock className="size-3.5" />
                            <span>{formatClock(session.savedAt)}</span>
                          </span>
                          {session.durationMs !== null && (
                            <span className="inline-flex items-center gap-1.5">
                              <span>المدة: {formatDuration(session.durationMs)}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => exportSingleSession(session)}
                        className="h-9 rounded-xl border-white/15 bg-white/[0.04] text-xs font-semibold text-white hover:bg-white/10"
                      >
                        {isMobile ? <Share2 className="size-3.5 ml-1.5" /> : <Download className="size-3.5 ml-1.5" />}
                        <span>Excel</span>
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteSession(session)}
                        className="h-9 size-9 p-0 rounded-xl border-rose-300/20 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20"
                        title="حذف هذه الجلسة"
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Highlights Summary Row */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-xs">
                    <div className="flex items-center gap-2">
                      <Users className="size-4 text-white/40" />
                      <span className="text-white/60">
                        العدد: <b className="text-white">{session.traineesCount} متدرب</b>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="size-4 text-rose-200" />
                      <span className="text-white/60">
                        أفضل أداء:{' '}
                        <b className="text-rose-200 font-mono font-bold">
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
                      className="inline-flex items-center gap-1 text-xs font-semibold text-rose-200 hover:text-rose-100 transition"
                    >
                      <span>{isExpanded ? 'إخفاء التفاصيل' : 'عرض المتدربين'}</span>
                      <ChevronDown
                        className={`size-3.5 transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Expanded Trainee Results Table */}
                {isExpanded && (
                  <div className="border-t border-white/10 bg-black/25 p-4 sm:p-6">
                    <h4 className="text-xs font-bold text-white/70 mb-3">
                      نتائج المتدربين المسجلة في الجلسة:
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5">
                      {session.results.map((res) => (
                        <div
                          key={res.traineeIndex}
                          className="flex flex-col rounded-xl border border-white/5 bg-white/[0.04] p-2.5 text-center"
                        >
                          <span className="text-[11px] text-white/45">
                            المتدرب {res.traineeIndex}
                          </span>
                          <span className="mt-1 font-mono text-sm font-bold text-white">
                            {res.valueDisplay}
                          </span>
                          <span className="mt-1 border-t border-white/5 pt-1 text-xs font-bold text-rose-200">
                            {res.score} <span className="text-[10px] font-normal text-white/40">نتيجة</span>
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
