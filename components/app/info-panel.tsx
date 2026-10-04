import type { LucideIcon } from 'lucide-react'

import { FavoritesPanel } from './favorites'
import type { OpenView } from '@/lib/app/types'


interface InfoPanelProps {
  title: string
  text: string
  icon: LucideIcon
  openView: OpenView
}

export function InfoPanel({
  title,
  text,
  icon: Icon,
  openView,
}: InfoPanelProps) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 flex size-20 items-center justify-center rounded-[2rem] bg-rose-200/10 text-rose-200">
        <Icon className="size-9" aria-hidden="true" />
      </div>

      <h2 className="text-3xl font-semibold">
        {title}
      </h2>

      <p className="mt-5 max-w-md text-sm leading-8 text-white/55">
        {text}
      </p>

      <FavoritesPanel openView={openView} />
    </div>
  )
}
