'use client'

import type { ReactNode } from 'react'
import { FileSpreadsheet, MessageCircle, Send, Share2, X } from 'lucide-react'

interface TestShareSheetProps {
  /** إظهار خياري إرسال الملخص كرسالة (متاح لجلسة واحدة فقط). */
  showMessaging: boolean
  onClose: () => void
  onSendWhatsApp: () => void
  onSendTelegram: () => void
  onShareFile: () => void
  onSaveFile: () => void
}

/** لوحة «حفظ أو مشاركة» التي تظهر على الجوال عند تصدير النتائج. */
export function TestShareSheet({ showMessaging, onClose, onSendWhatsApp, onSendTelegram, onShareFile, onSaveFile }: TestShareSheetProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-title"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-md rounded-t-[2rem] border border-white/10 bg-[#101216] p-5 pb-8 sm:rounded-[2rem]"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 id="share-title" className="text-base font-bold text-white">حفظ أو مشاركة</h2>
          <button type="button" aria-label="إغلاق" onClick={onClose} className="flex size-9 items-center justify-center rounded-full bg-white/[0.06] text-white/70"><X className="size-4" aria-hidden="true" /></button>
        </div>

        <div className="flex flex-col gap-2">
          {showMessaging && (
            <>
              <ShareAction
                icon={<MessageCircle className="size-5" aria-hidden="true" />}
                iconClassName="bg-emerald-500/20 text-emerald-300"
                title="واتساب"
                description="إرسال ملخص النتائج كرسالة"
                onClick={onSendWhatsApp}
              />
              <ShareAction
                icon={<Send className="size-5" aria-hidden="true" />}
                iconClassName="bg-sky-500/20 text-sky-300"
                title="تيليجرام"
                description="إرسال ملخص النتائج كرسالة"
                onClick={onSendTelegram}
              />
            </>
          )}

          <ShareAction
            icon={<Share2 className="size-5" aria-hidden="true" />}
            iconClassName="bg-rose-200/20 text-rose-200"
            title="مشاركة ملف Excel"
            description="اختر واتساب أو تيليجرام أو أي تطبيق وسيُرفق الملف"
            onClick={onShareFile}
          />
          <ShareAction
            icon={<FileSpreadsheet className="size-5" aria-hidden="true" />}
            iconClassName="bg-emerald-300/20 text-emerald-200"
            title="حفظ على الجهاز"
            description="تنزيل ملف Excel"
            onClick={onSaveFile}
          />
        </div>
      </div>
    </div>
  )
}

interface ShareActionProps {
  icon: ReactNode
  iconClassName: string
  title: string
  description: string
  onClick: () => void
}

function ShareAction({ icon, iconClassName, title, description, onClick }: ShareActionProps) {
  return (
    <button type="button" onClick={onClick} className="flex h-14 items-center gap-3 rounded-2xl bg-white/[0.06] px-4 text-right text-white active:bg-white/10">
      <span className={`flex size-9 items-center justify-center rounded-full ${iconClassName}`}>{icon}</span>
      <span className="flex-1"><span className="block text-sm font-bold">{title}</span><span className="block text-[11px] text-white/50">{description}</span></span>
    </button>
  )
}
