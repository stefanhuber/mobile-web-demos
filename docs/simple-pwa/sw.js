self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('simple-pwa-v1').then(function(cache) {
            return cache.addAll([
                '/mobile-web-demos/simple-pwa/',
                '/mobile-web-demos/simple-pwa/index.html',
                '/mobile-web-demos/simple-pwa/simple-pwa/main.js',
                '/mobile-web-demos/simple-pwa/simple-pwa/style.css',
                '/mobile-web-demos/simple-pwa/simple-pwa/icon16.png',
                '/mobile-web-demos/simple-pwa/simple-pwa/icon512.png'
            ])
        })
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
