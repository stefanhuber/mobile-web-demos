self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('simple-pwa-v1')
            .then(cache => cache.addAll([                
                'index.html',
                'main.js',
                'style.css',
                'icon16.png',
                'icon192.png',
                'icon196.png',
                'icon512.png',
                'manifest.webmanifest'
            ]))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('simple-pwa-v1')
            .then(function(cache) {
                return cache.match(event.request);
            }).then(function(response) {
                return response || fetch(event.request);
            })
    );
});
