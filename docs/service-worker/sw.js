self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('v1').then(function(cache) {
            return cache.addAll([
                '/service-worker/',
                '/service-worker/index.html',
                '/service-worker/Festung_1.jpg',
                '/service-worker/Festung_2.jpg'
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
