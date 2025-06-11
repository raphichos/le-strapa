self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("le-strapa-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./audio/Amore Mio Aiutami (Main Theme)  Piero Piccioni (High Quality Audio).mp3",
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
