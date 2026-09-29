'use client'

import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'

interface TimedTimeInputsProps {
  /** أزمنة المتدربين بالثواني كنصوص، والخانة الفارغة تعني متدرباً بلا نتيجة. */
  times: string[]
  /** الحد الأعلى لعدد المتدربين. */
  maxTrainees: number
  onChange: (index: number, raw: string) => void
  onAdd: () => void
  onSubmit: () => void
  /** بطاقة النتيجة التي تُعرض أسفل الحقول. */
  children?: ReactNode
}

/** حقول إدخال زمن كل متدرب بالثواني مع أزرار الإضافة وعرض النتيجة. */
export function TimedTimeInputs({ times, maxTrainees, onChange, onAdd, onSubmit, children }: TimedTimeInputsProps) {
  const hasValue = times.some((value) => value !== '')

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#101216] p-4 sm:p-6" aria-labelledby="times-title">
      <div className="mb-4">
        <h2 id="times-title" className="text-base font-bold text-white">أدخل زمن كل متدرب</h2>
        <p className="mt-1 text-xs text-white/50">الزمن بالثواني، مثل 13.5. سجّل الزمن أثناء التشغيل أو أدخله يدوياً، ثم اعرض النتيجة.</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {times.map((time, index) => (
          <label key={index} className="text-xs text-white/55">
            <span className="mb-1.5 block">المتدرب {index + 1}</span>
            <input
              type="text"
              inputMode="decimal"
              autoComplete="off"
              value={time}
              onChange={(event) => onChange(index, event.target.value)}
              placeholder="00.0"
              className="h-11 w-full rounded-xl border border-white/10 bg-white/[0.06] px-3 text-center text-base text-white outline-none placeholder:text-white/25 focus:border-rose-200/60"
            />
          </label>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <Button type="button" variant="outline" onClick={onAdd} disabled={times.length >= maxTrainees} className="h-11 flex-1 rounded-xl border-white/15 bg-transparent text-white hover:bg-white/10">إضافة متدرب</Button>
        <Button type="button" onClick={onSubmit} disabled={!hasValue} className="h-11 flex-1 rounded-xl bg-rose-200 font-bold text-[#24131b] hover:bg-rose-100">عرض النتيجة</Button>
      </div>

      {children}
    </section>
  )
}
