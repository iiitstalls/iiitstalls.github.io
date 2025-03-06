const CACHE_NAME = 'v0.5';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  './scripts/theme.js',
  './scripts/menu.js',
  './common/categoryNavigator.js',
  './common/menuRenderer.js',
  './bbc/BbcMenu.js',
  './bbc/',
  './jc/JcMenu.js',
  './jc/',
  './moc/MocMenu.js',
  './moc/',
  './tc/TcMenu.js',
  './tc/',
  './devids/DevidsMenu.js',
  './devids/',
  './styles/common.css',
  './styles/theme.css',
  './static/cross.png',
  './static/menu.png',
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

self.addEventListener('fetch', (event) => { 
  event.respondWith( fetch(event.request) .then((response) => {  
    const responseClone = response.clone();
    caches.open(CACHE_NAME).then((cache) => { 
      cache.put(event.request, responseClone); }); 
      return response; 
    }) 
    .catch(() => { 
      return caches.match(event.request); 
    }) 
  ); 
});
