/* MGC Make Grace Cooker — Service Worker v1 */
const CACHE = 'mgc-v1';
const OFFLINE_URL = '/mgc-cookware-demo/';

const PRECACHE = [
  '/mgc-cookware-demo/',
  '/mgc-cookware-demo/index.html',
  '/mgc-cookware-demo/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap',
];

/* Install — cache shell */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

/* Activate — clean old caches */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Fetch — cache-first for same-origin, network-first for images */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  /* Skip non-GET */
  if (request.method !== 'GET') return;

  /* Images — stale-while-revalidate */
  if (request.destination === 'image') {
    event.respondWith(
      caches.open(CACHE).then(async cache => {
        const cached = await cache.match(request);
        const fetchPromise = fetch(request).then(res => {
          if (res.ok) cache.put(request, res.clone());
          return res;
        }).catch(() => cached);
        return cached || fetchPromise;
      })
    );
    return;
  }

  /* HTML / CSS / JS — cache-first with network fallback */
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(res => {
        if (res.ok && url.origin === self.location.origin) {
          caches.open(CACHE).then(cache => cache.put(request, res.clone()));
        }
        return res;
      }).catch(() => caches.match(OFFLINE_URL));
    })
  );
});
