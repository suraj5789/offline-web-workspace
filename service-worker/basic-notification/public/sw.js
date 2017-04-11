self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open("sw-v1").then(function(cache) {
            return cache.addAll([
                "./"
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
});


/*
    Notification logic
*/
self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    var title = 'Test notification!';
    var body = 'This is the notification body';
    var icon = '/icon.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag
        })
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow("/index.html"));
});