// ── iVolt Power Solutions — Service Worker v6 ────────────────────────────────
// Place this file at the ROOT of your GitHub Pages repo alongside index.html,
// manifest.webmanifest, icon-192.svg and icon-512.svg.
// ─────────────────────────────────────────────────────────────────────────────

var CACHE_NAME = 'ivolt-v6';

// Files to pre-cache on install so the app works offline
var PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.svg',
  './icon-512.svg'
];

// ── Install: pre-cache core shell ─────────────────────────────────────────────
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(PRECACHE_URLS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

// ── Activate: purge old caches ────────────────────────────────────────────────
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames
          .filter(function(name) { return name !== CACHE_NAME; })
          .map(function(name)   { return caches.delete(name);   })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// ── Fetch: network-first, cache fallback (offline support) ────────────────────
self.addEventListener('fetch', function(event) {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests (Firebase, Google Fonts, etc.)
  var url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then(function(response) {
        // Clone & store fresh response in cache
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, clone);
        });
        return response;
      })
      .catch(function() {
        // Network failed → serve from cache
        return caches.match(event.request).then(function(cached) {
          return cached || new Response('Offline — please reconnect.', {
            status: 503,
            headers: { 'Content-Type': 'text/plain' }
          });
        });
      })
  );
});
