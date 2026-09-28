const CACHE_NAME = 'armored-training-v2'
const APP_SHELL = [
  '/',
  '/manifest.webmanifest',
  '/icon.svg',
  '/icon-light-32x32.png',
  '/icon-dark-32x32.png',
  '/apple-icon.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  )
  self.skipWaiting()
})

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200 && response.type !== 'opaque') {
          const responseCopy = response.clone()
          event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseCopy))
          )
        }
        return response
      })
      .catch(async () => {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) return cachedResponse

        if (event.request.mode === 'navigate') {
          return caches.match('/')
        }
        return new Response('', { status: 503, statusText: 'Offline' })
      })
  )
})
