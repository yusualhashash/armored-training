'use client'

import { useEffect, useRef } from 'react'

const SERVICE_WORKER_URL = '/sw.js'
const SKIP_WAITING_MESSAGE = { type: 'SKIP_WAITING' } as const

function supportsServiceWorker(): boolean {
  return typeof navigator !== 'undefined' && 'serviceWorker' in navigator
}

function isCacheableEnvironment(): boolean {
  return process.env.NODE_ENV === 'production'
}

function isPreviewHost(hostname: string): boolean {
  return hostname.endsWith('.v0.build')
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
    if (!isCacheableEnvironment() || isPreviewHost(window.location.hostname)) {
      void unregisterAllServiceWorkers().catch(() => {})
      return
    }

    let registration: ServiceWorkerRegistration | null = null
    let updateInterval: number | undefined
    let isCancelled = false

    const refreshRegistration = () => {
      if (isCancelled || !registration) return
      if (document.visibilityState !== 'visible') return
      // update() rejects with InvalidStateError while a worker is installing.
      if (registration.installing) return
      void registration.update().catch(() => {})
    }

    const handleControllerChange = () => {
      if (isCancelled || hasReloadedForUpdate.current) return
      hasReloadedForUpdate.current = true
      window.location.reload()
    }

    navigator.serviceWorker.addEventListener('controllerchange', handleControllerChange)

    navigator.serviceWorker
      .register(SERVICE_WORKER_URL, { updateViaCache: 'none' })
      .then((registered) => {
        if (isCancelled) return
        registration = registered
        watchForUpdates(registered)
        document.addEventListener('visibilitychange', refreshRegistration)
        window.addEventListener('online', refreshRegistration)
        window.addEventListener('pageshow', refreshRegistration)
        updateInterval = window.setInterval(refreshRegistration, 60_000)
        void registered.update().catch(() => {})
      })
      .catch(() => {
        // Offline support is optional; ignore registration failures.
      })

    return () => {
      isCancelled = true
      document.removeEventListener('visibilitychange', refreshRegistration)
      window.removeEventListener('online', refreshRegistration)
      window.removeEventListener('pageshow', refreshRegistration)
      if (updateInterval !== undefined) window.clearInterval(updateInterval)
      navigator.serviceWorker.removeEventListener('controllerchange', handleControllerChange)
    }
  }, [])
}
