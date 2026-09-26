import type { NavigationProps } from '@/lib/training/navigation'
import { isMenuView } from '@/lib/training/menus'
import { ArmoredViews } from './armored-views'
import { SportsViews } from './sports-views'
import { SectionMenu } from './section-menu'
import { HomeView } from './home-view'
import { GuideView } from './guide-view'

export function TrainingContent({ activeView, openView }: NavigationProps) {
  if (activeView === 'home') return <HomeView openView={openView} />
  if (activeView === 'guide') return <GuideView />

  return (
    <div className="mx-auto w-full max-w-2xl">
      {isMenuView(activeView) ? (
        <SectionMenu activeView={activeView} openView={openView} />
      ) : activeView.startsWith('t72-') || activeView.startsWith('t55-62-') ? (
        <ArmoredViews activeView={activeView} openView={openView} />
      ) : (
        <SportsViews activeView={activeView} openView={openView} />
      )}
    </div>
  )
}
