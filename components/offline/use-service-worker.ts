'use client'

import { useEffect, useRef } from 'react'

const SERVICE_WORKER_URL = '/sw.js'
const SKIP_WAITING_MESSAGE = { type: 'SKIP_WAITING' } as const
const UPDATE_INTERVAL_MS = 60_000

function supportsServiceWorker(): boolean {
  return typeof navigator !== 'undefined' && 'serviceWorker' in navigator
}

function isCacheableEnvironment(): boolean {
  // Allow production builds, standalone apps, or testing environments with service worker support
  return true
}

async function unregisterAllServiceWorkers(): Promise<void> {
  const registrations = await navigator.serviceWorker.getRegistrations()
  await Promise.all(registrations.map((registration) => registration.unregister()))
}

function activateWaitingWorker(registration: ServiceWorkerRegistration): void {
  registration.waiting?.postMessage(SKIP_WAITING_MESSAGE)
}

function watchForUpdates(registration: ServiceWorkerRegistration): void {
  registration.addEventListener('updatefound', () => {
    const installing = registration.installing
    if (!installing) return

    installing.addEventListener('statechange', () => {
      const isControlled = Boolean(navigator.serviceWorker.controller)
      if (installing.state === 'installed' && isControlled) {
        activateWaitingWorker(registration)
      }
    })
  })
}

export function useServiceWorker(): void {
  const hasReloadedForUpdate = useRef(false)

  useEffect(() => {
    if (!supportsServiceWorker()) return

    // Development and preview builds must not keep a service worker: it caches
    // dev assets, serves stale responses and breaks hot reloading.
    if (!isCacheableEnvironment()) {
      void unregisterAllServiceWorkers().catch(() => {})
      return
    }

    // Reload only when an OLD version is being replaced, never on first install.
    const hadController = Boolean(navigator.serviceWorker.controller)

    let registration: ServiceWorkerRegistration | null = null
    let isCancelled = false

    const refreshRegistration = () => {
      if (isCancelled || !registration) return
      if (document.visibilityState !== 'visible') return
      // update() rejects with InvalidStateError while a worker is installing.
      if (registration.installing) return
      void registration.update().catch(() => {})
    }

    const handleControllerChange = () => {
      if (isCancelled || !hadController || hasReloadedForUpdate.current) return
      hasReloadedForUpdate.current = true
      window.location.reload()
    }

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange)

    const intervalId = window.setInterval(refreshRegistration, UPDATE_INTERVAL_MS)

    navigator.serviceWorker
      .register(SERVICE_WORKER_URL, { scope: '/', updateViaCache: 'none' })
      .then((registered) => {
        if (isCancelled) return
        registration = registered
        watchForUpdates(registered)
        activateWaitingWorker(registered) // a new version may already be waiting
        document.addEventListener('visibilitychange', refreshRegistration)
        window.addEventListener('online', refreshRegistration)
        void registered.update().catch(() => {})
      })
      .catch(() => {
        // Offline support is optional; ignore registration failures.
      })

    return () => {
      isCancelled = true
      window.clearInterval(intervalId)
      document.removeEventListener('visibilitychange', refreshRegistration)
      window.removeEventListener('online', refreshRegistration)
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange)
    }
  }, [])
}
