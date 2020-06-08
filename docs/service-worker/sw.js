self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-example-v1').then(function(cache) {
            return cache.addAll([
                '/service-worker/',
                '/service-worker/index.html',
                '/service-worker/Festung_1.jpg',
                '/service-worker/Festung_2.jpg'
            ])
        })
    );
});

// CACHING STRATEGY:
// 1) Try network and update cache
// 2) Use cache if network failed

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open('sw-example-v1')
            .then((cache) => fetch(event.request)
                .then(response => {
                    cache.put(event.request, response.clone());
                    return response;
                })
                .catch(() => cache.match(event.request))
        )
    )        
});
