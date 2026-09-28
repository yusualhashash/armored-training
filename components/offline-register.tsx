'use client'

import { useEffect } from 'react'

export function OfflineRegister() {
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    // v0 preview deployments do not serve the public service worker reliably.
    // Remove any stale registration there so the browser stops retrying it.
    if (window.location.hostname.endsWith('.v0.build')) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => registration.unregister())
      })
      return
    }

    navigator.serviceWorker
        .register('/sw.js', { updateViaCache: 'none' })
        .then((registration) => {
          registration.update()

          const refreshWhenUpdated = () => {
            if (registration.waiting) {
              registration.waiting.postMessage({ type: 'SKIP_WAITING' })
            }
          }

          registration.addEventListener('updatefound', () => {
            registration.installing?.addEventListener('statechange', () => {
              if (registration.installing?.state === 'installed' && navigator.serviceWorker.controller) {
                refreshWhenUpdated()
              }
            })
          })

          document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') registration.update()
          })
        })
        .catch(() => {
          // Offline support is optional when service workers are unavailable.
        })
  }, [])

  return null
}
