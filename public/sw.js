const CACHE_NAME = "armored-training-v3";

const APP_SHELL = [
  "/",
  "/manifest.webmanifest",
  "/icon.svg",
  "/icon-light-32x32.png",
  "/icon-dark-32x32.png",
  "/apple-icon.png",
];

async function precacheAppShell() {
  const cache = await caches.open(CACHE_NAME);

  // Add entries individually: one missing asset must not abort the whole install.
  await Promise.all(
    APP_SHELL.map((url) =>
      cache.add(url).catch(() => {
        // Ignore assets that are unavailable; the runtime cache covers them later.
      }),
    ),
  );
}

async function deleteOutdatedCaches() {
  const keys = await caches.keys();
  await Promise.all(
    keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
  );
}

function isCacheableRequest(request) {
  if (request.method !== "GET") return false;
  if (!request.url.startsWith(self.location.origin)) return false;

  const { pathname } = new URL(request.url);
  if (pathname.startsWith("/_next/webpack-hmr")) return false;

  return true;
}

function isCacheableResponse(response) {
  return (
    response &&
    response.status === 200 &&
    response.type !== "opaque" &&
    !response.headers.get("cache-control")?.includes("no-store")
  );
}

async function respondWithCacheFallback(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) return cachedResponse;

  if (request.mode === "navigate") {
    const appShell = await caches.match("/");
    if (appShell) return appShell;
  }

  return new Response("", { status: 503, statusText: "Offline" });
}

self.addEventListener("install", (event) => {
  event.waitUntil(precacheAppShell());
  self.skipWaiting();
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(deleteOutdatedCaches());
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (!isCacheableRequest(event.request)) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (isCacheableResponse(response)) {
          const responseCopy = response.clone();
          event.waitUntil(
            caches
              .open(CACHE_NAME)
              .then((cache) => cache.put(event.request, responseCopy)),
          );
        }
        return response;
      })
      .catch(() => respondWithCacheFallback(event.request)),
  );
});
