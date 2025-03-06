const CACHE_NAME = 'v4';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  './scripts/theme.js',
  './scripts/menu.js',
  './common/categoryNavigator.js',
  './common/menuRenderer.js',
  './canteens/canteen1/canteen1Menu.js',
  './canteens/canteen1/index.html',
  './styles/common.css',
  './styles/theme.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

function normalizeUrl(url) {
  const urlObj = new URL(url);
  urlObj.search = ''; // Remove query parameters
  return urlObj.toString();
}

self.addEventListener('fetch', (event) => {
  const normalizedRequest = new Request(normalizeUrl(event.request.url), {
    method: event.request.method,
    headers: event.request.headers,
    mode: event.request.mode === 'navigate' ? 'cors' : event.request.mode,
    credentials: event.request.credentials,
    redirect: event.request.redirect
  });

  event.respondWith(
    caches.match(normalizedRequest).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(normalizedRequest, responseClone);
        });
        return response;
      });
    }).catch(() => {
      return caches.match(normalizedRequest);
    })
  );
});
