self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("le-strapa-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./audio/amore_mio_aiutami.mp3",
        "./manifest.json",
        "./icon/icon-192.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
