const cacheName = 'fast-cache';

const filesToCache = [
    '/index.html',
    '/css/style.css',
    '/img/logo.png',
    '/img/hombres.webp',
    '/img/mujeres.webp',
    '/img/header-02.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js',
    'https://fonts.googleapis.com/css2?family=Roboto+Condensed'
]

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
        .then(function (cache){
            console.log('[ServiceWoker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
/*
self.addEventListener('activate', () => {
    console.log('ServiceWorker activado');
});
*/
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(cacheList => {
            return Promise.all(
                cacheList.map(cache => {
                    if(!cacheName.includes(cache)){
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (response) {
            if(response){
                return response;
            }
            return fetch(event.request);
        })
    )
})

// Cache First
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cacheResponse => {
            return cacheResponse || fetch(event.request);
        })
    )
});