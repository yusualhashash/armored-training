import { BookOpen, House } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { NavigationProps } from '@/lib/training/navigation'

const navigationItems = [
  { id: 'home' as const, label: 'الرئيسية', icon: House },
  { id: 'guide' as const, label: 'التعليمات', icon: BookOpen },
]

export function BottomNavigation({ activeView, openView }: NavigationProps) {
  return (
<nav aria-label="التنقل الرئيسي" className="fixed inset-x-0 bottom-0 z-10 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8 sm:pb-8"><div className="mx-auto flex max-w-lg items-center gap-2 rounded-[1.75rem] border border-white/10 bg-[#101216]/95 p-2 shadow-[0_-10px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl">{navigationItems.map(({ id, label, icon: Icon }) => { const isActive = activeView === id; return <Button key={id} type="button" variant="ghost" aria-current={isActive ? 'page' : undefined} onClick={() => openView(id)} className={`h-16 flex-1 rounded-2xl text-sm font-semibold transition-all duration-300 sm:h-[4.5rem] ${isActive ? 'bg-[#101216] text-white shadow-lg shadow-black/20 hover:bg-[#17191f]' : 'text-white/55 hover:bg-white/[0.07] hover:text-white'}`}><Icon data-icon="inline-start" aria-hidden="true" /><span>{label}</span></Button> })}</div></nav>
  )
}
