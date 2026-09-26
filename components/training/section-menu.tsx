import { sectionMenus, type MenuView } from '@/lib/training/menus'
import type { NavigationProps } from '@/lib/training/navigation'
import { SectionButton } from './section-button'

export function SectionMenu({ activeView, openView }: Omit<NavigationProps, 'activeView'> & { activeView: MenuView }) {
  return (
    <div className="grid gap-4">
      {sectionMenus[activeView].map(({ view, ...item }) => (
        <SectionButton key={view} {...item} onClick={() => openView(view)} />
      ))}
    </div>
  )
}
