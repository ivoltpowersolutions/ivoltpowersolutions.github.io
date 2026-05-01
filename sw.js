// ── iVolt PWA Service Worker ──────────────────────────────────────────────────
// Version: bump this string to force cache refresh on deploy
const CACHE_VERSION = 'ivolt-v1';

// Core shell files to pre-cache (must all exist in your repo)
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-512.svg',
];

// ── Install: pre-cache shell ──────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// ── Activate: remove old caches ───────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: Network-first, fall back to cache ──────────────────────────────────
self.addEventListener('fetch', event => {
  // Only handle GET requests for same-origin or Firebase assets
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Pass through Firebase SDK / CDN requests without caching
  if (
    url.hostname.includes('firebasedatabase.app') ||
    url.hostname.includes('gstatic.com') ||
    url.hostname.includes('googleapis.com') ||
    url.hostname.includes('fonts.googleapis.com')
  ) {
    return; // let browser handle normally
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache a clone of successful responses
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Offline fallback: serve from cache
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // For navigation requests, return the shell
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
