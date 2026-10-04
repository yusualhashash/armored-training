const CACHE_NAME = "armored-training-v6"; // change this number on every deploy
const APP_SHELL = ["/", "/manifest.webmanifest", "/eagle-logo.png"];

async function precacheAppShell() {
  const cache = await caches.open(CACHE_NAME);

  await Promise.all(
    APP_SHELL.map((url) =>
      cache.add(new Request(url, { cache: "reload" })).catch(() => {}),
    ),
  );

  // Also cache the JS/CSS files the home page uses, so the app works offline.
  try {
    const home = await cache.match("/");
    const html = home ? await home.text() : "";
    const assets = new Set(html.match(/\/_next\/static\/[^"'\\\s)<>]+/g) ?? []);
    await Promise.all([...assets].map((url) => cache.add(url).catch(() => {})));
  } catch {
    // ignore; runtime caching covers the rest
  }
}

async function deleteOutdatedCaches() {
  const keys = await caches.keys();
  await Promise.all(
    keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)),
  );
}

function isCacheableResponse(response) {
  return (
    response &&
    response.status === 200 &&
    response.type === "basic" &&
    !response.headers.get("cache-control")?.includes("no-store")
  );
}

async function putInCache(request, response) {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
  } catch {
    // storage full or blocked; ignore
  }
}

function fetchWithTimeout(request, ms) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout")), ms);
    fetch(request).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      },
    );
  });
}

// Build files with hashed names never change: cache first.
async function cacheFirst(event) {
  const cached = await caches.match(event.request);
  if (cached) return cached;

  const response = await fetch(event.request);
  if (isCacheableResponse(response)) {
    event.waitUntil(putInCache(event.request, response.clone()));
  }
  return response;
}

// Pages: always try the network first so updates appear immediately,
// fall back to the saved page (or the home page) when offline.
async function pageNetworkFirst(event) {
  try {
    const response = await fetchWithTimeout(event.request, 4000);
    if (isCacheableResponse(response)) {
      event.waitUntil(putInCache(event.request, response.clone()));
    }
    return response;
  } catch {
    return (
      (await caches.match(event.request, {
        ignoreSearch: true,
        ignoreVary: true,
      })) ||
      (await caches.match("/", { ignoreVary: true })) ||
      new Response("Offline", { status: 503, statusText: "Offline" })
    );
  }
}

// Everything else (images, manifest, data files): network first, cache fallback.
async function networkFirst(event) {
  try {
    const response = await fetch(event.request);
    if (isCacheableResponse(response)) {
      event.waitUntil(putInCache(event.request, response.clone()));
    }
    return response;
  } catch {
    return (
      (await caches.match(event.request, { ignoreVary: true })) ||
      new Response("", { status: 503, statusText: "Offline" })
    );
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(precacheAppShell());
  self.skipWaiting(); // activate the new version immediately
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    deleteOutdatedCaches().then(() => self.clients.claim()), // take over open pages now
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js" || url.pathname.startsWith("/api/")) return;
  if (request.headers.get("RSC")) return; // Next.js client-navigation payloads

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(event));
  } else if (request.mode === "navigate") {
    event.respondWith(pageNetworkFirst(event));
  } else {
    event.respondWith(networkFirst(event));
  }
});
