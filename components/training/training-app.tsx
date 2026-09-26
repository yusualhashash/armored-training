'use client'

import { viewContent } from '@/lib/training/navigation'
import { BottomNavigation } from './bottom-navigation'
import { TrainingContent } from './training-content'
import { TrainingHeader } from './training-header'
import { useTrainingNavigation } from './use-training-navigation'

export function TrainingApp() {
  const { activeView, openView } = useTrainingNavigation()
  const currentSection = activeView === 'home' || activeView === 'guide' ? null : viewContent[activeView]

  return (
    <main dir="rtl" className="min-h-svh w-full max-w-full overflow-x-hidden bg-green-950 text-white">
      <div className="relative flex min-h-svh w-full max-w-full flex-col">
        <TrainingHeader currentSection={currentSection} />
        <section className="relative flex min-w-0 flex-1 flex-col overflow-y-auto px-3 pb-40 pt-7 sm:px-10 sm:pb-36 sm:pt-10">
          <TrainingContent activeView={activeView} openView={openView} />
        </section>
        <BottomNavigation activeView={activeView} openView={openView} />
      </div>
    </main>
  )
}
