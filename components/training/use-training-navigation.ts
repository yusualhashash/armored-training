'use client'

import { useCallback, useEffect, useState } from 'react'
import { isView, type View } from '@/lib/training/navigation'

export function useTrainingNavigation() {
  const [activeView, setActiveView] = useState<View>('home')

  useEffect(() => {
    window.history.replaceState({ view: 'home' satisfies View }, '', window.location.href)

    const handlePopState = (event: PopStateEvent) => {
      const view: unknown = event.state?.view
      if (isView(view)) {
        setActiveView(view)
        return
      }

      window.history.pushState({ view: 'home' satisfies View }, '', window.location.href)
      setActiveView('home')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const openView = useCallback((view: View) => {
    window.history.pushState({ view }, '', window.location.href)
    setActiveView(view)
  }, [])

  return { activeView, openView }
}
