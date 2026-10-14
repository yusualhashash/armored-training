'use client';

import { useState } from 'react';
import {
  X,
  Plus,
  Trash2,
  Pin,
  PinOff,
  Volume2,
  Share2,
  QrCode,
  Download,
  Upload,
  CheckCircle2,
  AlertTriangle,
  Info,
  Bell,
  Radio,
  FileSpreadsheet,
  FileText,
  Sliders,
  Sparkles,
} from 'lucide-react';
import type { BroadcastNotification, NotificationPriority } from '@/lib/notifications/types';
import {
  getNotifications,
  addNotification,
  updateNotification,
  deleteNotification,
  encodeNotificationPackage,
  generateOfflineShareUrl,
  playTacticalAlertSound,
} from '@/lib/notifications/storage';
import { QrDisplay } from './qr-display';

interface BroadcastControlModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenScanner: () => void;
  onRefresh: () => void;
}

const PRESET_BULLETINS = [
  {
    title: 'استنفار وتفقد جاهزية أطقم دبابات T-72',
    message: 'توجيه لكافة أطقم الكتيبة: بدء تدريب طارئ على معدلات الركوب والنزول والانفتاح القتالي فوراً.',
    priority: 'urgent' as NotificationPriority,
    author: 'قيادة لواء المدرعات',
    actionLabel: 'الانتقال إلى معدلات T-72',
    actionView: 'armored',
    soundAlert: true,
  },
  {
    title: 'بدء اختبار الضاحية والمعدلات البدنية المقررة',
    message: 'يبدأ اختبار الجري لمسافة 3 كم وفق الفئات العمرية المعتمدة. يرجى من المحكمين تجهيز السجلات وضبط أجهزة التوقيت.',
    priority: 'info' as NotificationPriority,
    author: 'لجنة تقييم اللياقة البدنية',
    actionLabel: 'فتح اختبار 3 كم',
    actionView: 'sports_3km',
    soundAlert: false,
  },
  {
    title: 'تنبيه: مراجعة معدلات أطقم T-55/62',
    message: 'التركيز على تمارين فك وتجهيز المدافع والتحول من رتل السير إلى نسق القتال مع الالتزام بالمعايير الزمنية القياسية.',
    priority: 'warning' as NotificationPriority,
    author: 'فرع التدريب التكتيكي',
    actionLabel: 'معدلات T-55/62',
    actionView: 'armored',
    soundAlert: true,
  },
  {
    title: 'تعليمات هامة: حفظ نتائج التدريب بدون إنترنت',
    message: 'نظام التقييم يعمل بالكامل أوفلاين. يتم حفظ جميع السجلات محلياً ويمكن تصديرها إلى ملف Excel بعد نهاية طابور الاختبار.',
    priority: 'success' as NotificationPriority,
    author: 'إدارة المنظومة الإلكترونية',
    actionLabel: 'عرض سجل التدريب',
    actionView: 'history',
    soundAlert: false,
  },
];

export function BroadcastControlModal({
  isOpen,
  onClose,
  onOpenScanner,
  onRefresh,
}: BroadcastControlModalProps) {
  const [activeTab, setActiveTab] = useState<'manage' | 'compose' | 'share'>('manage');
  const [notifications, setNotifications] = useState<BroadcastNotification[]>(() => getNotifications());

  // Compose form state
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [priority, setPriority] = useState<NotificationPriority>('info');
  const [author, setAuthor] = useState('شعبة التدريب');
  const [actionLabel, setActionLabel] = useState('');
  const [actionView, setActionView] = useState('');
  const [soundAlert, setSoundAlert] = useState(true);
  const [pinned, setPinned] = useState(false);

  // Selected item to share
  const [selectedShareNotice, setSelectedShareNotice] = useState<BroadcastNotification | null>(null);
  const [shareAll, setShareAll] = useState(false);

  const refreshList = () => {
    setNotifications(getNotifications());
    onRefresh();
  };

  const handleApplyPreset = (preset: (typeof PRESET_BULLETINS)[0]) => {
    setTitle(preset.title);
    setMessage(preset.message);
    setPriority(preset.priority);
    setAuthor(preset.author);
    setActionLabel(preset.actionLabel);
    setActionView(preset.actionView);
    setSoundAlert(preset.soundAlert);
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;

    const newNotice = addNotification({
      title: title.trim(),
      message: message.trim(),
      priority,
      author: author.trim() || 'القيادة العامة',
      actionLabel: actionLabel.trim() || undefined,
      actionView: actionView.trim() || undefined,
      soundAlert,
      pinned,
      active: true,
    });

    // Reset form
    setTitle('');
    setMessage('');
    refreshList();
    setSelectedShareNotice(newNotice);
    setShareAll(false);
    setActiveTab('share');
  };

  const handleToggleActive = (id: string, current: boolean) => {
    updateNotification(id, { active: !current });
    refreshList();
  };

  const handleTogglePinned = (id: string, current?: boolean) => {
    updateNotification(id, { pinned: !current });
    refreshList();
  };

  const handleDelete = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا التعميم؟')) {
      deleteNotification(id);
      refreshList();
    }
  };

  const handleOpenShare = (notice: BroadcastNotification) => {
    setSelectedShareNotice(notice);
    setShareAll(false);
    setActiveTab('share');
  };

  const handleShareAllToggle = () => {
    setShareAll(!shareAll);
  };

  const handleExportJsonFile = () => {
    const dataToExport = shareAll ? notifications : selectedShareNotice || notifications[0];
    if (!dataToExport) return;

    const jsonStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `armored-broadcast-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleNativeShare = async (notice: BroadcastNotification) => {
    const shareUrl = generateOfflineShareUrl(notice);
    if (navigator.share) {
      try {
        await navigator.share({
          title: notice.title,
          text: `[${notice.author}] ${notice.title}\n${notice.message}`,
          url: shareUrl,
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert('تم نسخ رابط التعميم الميداني إلى الحافظة!');
    }
  };

  if (!isOpen) return null;

  const currentSharePayload = shareAll
    ? encodeNotificationPackage(notifications, 'قيادة لواء التدريب')
    : selectedShareNotice
    ? encodeNotificationPackage(selectedShareNotice, selectedShareNotice.author)
    : notifications.length > 0
    ? encodeNotificationPackage(notifications[0], notifications[0].author)
    : '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
      <div className="relative flex flex-col w-full max-w-2xl max-h-[90vh] rounded-3xl border border-emerald-500/30 bg-[#0a150f] shadow-2xl text-white overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 px-5 py-4 shrink-0 bg-[#07110c]">
          <div className="flex items-center gap-2.5">
            <div className="flex size-10 items-center justify-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
              <Radio className="size-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">لوحة التحكم بالتعاميم الميدانية</h2>
              <p className="text-[11px] text-emerald-400/80">إرسال واستقبال وتوزيع الإشعارات بدون إنترنت وقاعدة بيانات</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/60 hover:bg-white/10 hover:text-white"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Top Control Bar with Quick Scanner Trigger */}
        <div className="flex items-center justify-between border-b border-white/5 bg-black/40 px-5 py-2.5 shrink-0 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70">البث اللاسلكي الميداني: <strong className="text-emerald-300">نشط أوفلاين</strong></span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenScanner();
            }}
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-3 py-1.5 font-bold text-emerald-300 hover:bg-emerald-500/25 active:scale-95"
          >
            <QrCode className="size-3.5" />
            <span>مسح واستلام من جهاز آخر</span>
          </button>
        </div>

        {/* Main Tabs */}
        <div className="flex border-b border-white/10 bg-black/20 px-5 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('manage')}
            className={`border-b-2 py-3 px-4 text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'manage'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            قائمة التعاميم ({notifications.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('compose')}
            className={`border-b-2 py-3 px-4 text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'compose'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            + إصدار تعميم جديد
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('share')}
            className={`border-b-2 py-3 px-4 text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'share'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-white/60 hover:text-white'
            }`}
          >
            توزيع دون إنترنت (كود QR)
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-5">
          {/* TAB 1: MANAGE NOTIFICATIONS */}
          {activeTab === 'manage' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/60">
                  يمكنك تفعيل أو إيقاف أي تعميم، أو حذفه، أو مشاركته فوراً مع الأجهزة الأخرى.
                </p>
                <button
                  type="button"
                  onClick={() => playTacticalAlertSound('urgent')}
                  className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-white/70 hover:text-white"
                >
                  <Volume2 className="size-3 text-emerald-400" />
                  <span>اختبار صوت التنبيه</span>
                </button>
              </div>

              {notifications.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center">
                  <Bell className="size-8 text-white/30 mb-2" />
                  <p className="text-sm text-white/60">لا توجد تعاميم حالياً</p>
                  <button
                    type="button"
                    onClick={() => setActiveTab('compose')}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-black hover:bg-emerald-400"
                  >
                    <Plus className="size-3.5" />
                    <span>إضافة أول تعميم</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {notifications.map((notice) => {
                    const badgeStyles = {
                      urgent: 'border-red-500/40 bg-red-500/15 text-red-300',
                      warning: 'border-amber-500/40 bg-amber-500/15 text-amber-300',
                      info: 'border-emerald-500/40 bg-emerald-500/15 text-emerald-300',
                      success: 'border-teal-500/40 bg-teal-500/15 text-teal-300',
                    }[notice.priority];

                    return (
                      <div
                        key={notice.id}
                        className={`rounded-2xl border p-4 transition-all ${
                          notice.active
                            ? 'border-emerald-500/20 bg-black/40'
                            : 'border-white/5 bg-black/20 opacity-60'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className={`rounded-md border px-2 py-0.5 text-[10px] font-bold ${badgeStyles}`}>
                                {notice.priority === 'urgent'
                                  ? 'عاجل جداً'
                                  : notice.priority === 'warning'
                                  ? 'تحذير'
                                  : notice.priority === 'info'
                                  ? 'تعميم'
                                  : 'تأكيد'}
                              </span>
                              {notice.pinned && (
                                <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold text-amber-300">
                                  مثبت بالأعلى
                                </span>
                              )}
                              <span className="text-[11px] text-white/50">{notice.author}</span>
                            </div>

                            <h3 className="font-bold text-sm sm:text-base text-white">{notice.title}</h3>
                            <p className="mt-1 text-xs text-white/70 line-clamp-2 leading-relaxed">
                              {notice.message}
                            </p>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* Pin Toggle */}
                            <button
                              type="button"
                              title={notice.pinned ? 'إلغاء التثبيت' : 'تثبيت بالأعلى'}
                              onClick={() => handleTogglePinned(notice.id, notice.pinned)}
                              className={`rounded-lg p-2 transition-all ${
                                notice.pinned
                                  ? 'bg-amber-400/20 text-amber-300'
                                  : 'text-white/40 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              {notice.pinned ? <Pin className="size-4" /> : <PinOff className="size-4" />}
                            </button>

                            {/* Share / QR Button */}
                            <button
                              type="button"
                              title="مشاركة كود QR مع جهاز آخر"
                              onClick={() => handleOpenShare(notice)}
                              className="rounded-lg p-2 text-emerald-400 hover:bg-emerald-500/15"
                            >
                              <QrCode className="size-4" />
                            </button>

                            {/* Delete Button */}
                            <button
                              type="button"
                              title="حذف التعميم"
                              onClick={() => handleDelete(notice.id)}
                              className="rounded-lg p-2 text-red-400/70 hover:bg-red-500/15 hover:text-red-300"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>

                        {/* Status Switcher */}
                        <div className="mt-3 flex items-center justify-between border-t border-white/5 pt-2.5 text-xs">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={notice.active}
                              onChange={() => handleToggleActive(notice.id, notice.active)}
                              className="size-4 rounded border-emerald-500/40 bg-black/60 text-emerald-500 focus:ring-0"
                            />
                            <span className={notice.active ? 'text-emerald-400 font-semibold' : 'text-white/40'}>
                              {notice.active ? 'التعميم قيد العرض للمستخدمين' : 'مخفي / متوقف'}
                            </span>
                          </label>

                          <button
                            type="button"
                            onClick={() => handleNativeShare(notice)}
                            className="inline-flex items-center gap-1 text-[11px] text-white/60 hover:text-emerald-300"
                          >
                            <Share2 className="size-3" />
                            <span>مشاركة بلوتوث / رابط</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: COMPOSE NEW NOTIFICATION */}
          {activeTab === 'compose' && (
            <div className="space-y-5">
              {/* Tactical presets */}
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 mb-2">
                  <Sparkles className="size-3.5" />
                  <span>قوالب وتعاميم قيادية جاهزة (ضغطة زر):</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PRESET_BULLETINS.map((preset, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPreset(preset)}
                      className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-2.5 text-right text-xs transition-all hover:bg-emerald-500/15 hover:border-emerald-500/40"
                    >
                      <div className="font-bold text-white truncate">{preset.title}</div>
                      <div className="text-[11px] text-white/50 truncate mt-0.5">{preset.author}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleCreate} className="space-y-4 border-t border-white/10 pt-4">
                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    عنوان التعميم أو البلاغ:
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="مثال: تعليمات طارئة لطاقم T-72..."
                    className="w-full rounded-xl border border-emerald-500/30 bg-black/60 px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-white/80 mb-1">
                    نص الإشعار والتفاصيل:
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب التوجيهات أو الأوامر الميدانية هنا..."
                    className="w-full rounded-xl border border-emerald-500/30 bg-black/60 p-3.5 text-xs sm:text-sm text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">درجة الأهمية:</label>
                    <select
                      value={priority}
                      onChange={(e) => setPriority(e.target.value as NotificationPriority)}
                      className="w-full rounded-xl border border-emerald-500/30 bg-black/60 px-3 py-2 text-xs sm:text-sm text-white focus:border-emerald-400 focus:outline-none"
                    >
                      <option value="urgent">🚨 عاجل جداً (أحمر + صفارة)</option>
                      <option value="warning">⚠️ تنبيه تدريبي (برتقالي)</option>
                      <option value="info">📢 تعميم رسمي (أخضر زمردي)</option>
                      <option value="success">✅ تأكيد واعتماد (أزرق)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-white/80 mb-1">الجهة المصدرة:</label>
                    <input
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="مثال: قيادة سلاح المدرعات"
                      className="w-full rounded-xl border border-emerald-500/30 bg-black/60 px-3.5 py-2 text-xs sm:text-sm text-white focus:border-emerald-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Additional Options */}
                <div className="flex flex-wrap items-center gap-4 border-t border-white/5 pt-3">
                  <label className="flex items-center gap-2 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={pinned}
                      onChange={(e) => setPinned(e.target.checked)}
                      className="size-4 rounded border-emerald-500/40 bg-black/60 text-emerald-500 focus:ring-0"
                    />
                    <span>تثبيت في أعلى الشاشة</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs">
                    <input
                      type="checkbox"
                      checked={soundAlert}
                      onChange={(e) => setSoundAlert(e.target.checked)}
                      className="size-4 rounded border-emerald-500/40 bg-black/60 text-emerald-500 focus:ring-0"
                    />
                    <span>إطلاق صوت تنبيه عسكري فور الاستلام</span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3 text-sm font-bold text-black shadow-lg hover:from-emerald-400 hover:to-teal-400 active:scale-98"
                  >
                    <Plus className="size-4" />
                    <span>اعتماد التعميم وإنشاء رمز التوزيع اللاسلكي</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: OFFLINE SHARING & QR CODE */}
          {activeTab === 'share' && (
            <div className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                <div>
                  <h3 className="font-bold text-sm text-emerald-300">
                    {shareAll ? 'توزيع كافة التعاميم المسجلة' : selectedShareNotice?.title || 'توزيع التعميم النشط'}
                  </h3>
                  <p className="text-xs text-white/60">
                    يعمل دون أي اتصال بالإنترنت أو سيرفر، عبر المسح الضوئي المباشر من جهاز إلى جهاز.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleShareAllToggle}
                  className={`rounded-xl border px-3 py-1.5 text-xs font-semibold transition-all ${
                    shareAll
                      ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300'
                      : 'border-white/10 bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {shareAll ? 'مشاركة كافة التعاميم (الكل)' : 'مشاركة هذا التعميم فقط'}
                </button>
              </div>

              {currentSharePayload ? (
                <QrDisplay
                  value={currentSharePayload}
                  title={shareAll ? `حزمة شاملة (${notifications.length} تعاميم)` : selectedShareNotice?.title}
                  size={240}
                />
              ) : (
                <p className="text-center text-sm text-white/50">يرجى إضافة تعميم أولاً لإنشاء الرمز</p>
              )}

              {/* Extra Offline Distribution Methods */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-3">
                <h4 className="text-xs font-bold text-white/80">طرق توزيع إضافية بدون إنترنت:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={handleExportJsonFile}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 font-bold text-emerald-300 hover:bg-emerald-500/20 active:scale-95"
                  >
                    <Download className="size-4" />
                    <span>تصدير ملف تعميم (.json) لـ USB</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (selectedShareNotice) handleNativeShare(selectedShareNotice);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2.5 font-bold text-white/80 hover:bg-white/10 active:scale-95"
                  >
                    <Share2 className="size-4" />
                    <span>إرسال بالبلوتوث / Nearby Share</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-emerald-500/20 bg-[#07110c] px-5 py-3 shrink-0 text-xs text-white/60">
          <span>البيانات مخزنة وموزعة محلياً 100% دون خوادم</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-1.5 font-semibold text-white/80 hover:bg-white/10"
          >
            إغلاق
          </button>
        </div>
      </div>
    </div>
  );
}
