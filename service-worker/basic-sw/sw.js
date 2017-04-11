self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("sw-v1").then(function(cache) {
            return cache.addAll([
                "./",
                "image.jpg",
                "script.js"
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    )
})