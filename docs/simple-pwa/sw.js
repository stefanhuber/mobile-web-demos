self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/simple-pwa/',
                '/simple-pwa/index.html',
                '/simple-pwa/main.js',
                '/simple-pwa/style.css',
                '/simple-pwa/icon16.png',
                '/simple-pwa/icon512.png'
            ])
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('v1')
            .then(function(cache) {
                return cache.match(event.request);
            }).then(function(response) {
                return response || fetch(event.request);
            })
    );
});
