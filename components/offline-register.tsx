'use client'

import { useEffect } from 'react'

export function OfflineRegister() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Offline support is optional when service workers are unavailable.
      })
    }
  }, [])

  return null
}
