const CACHE_NAME = "base44-cache-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/src/main.jsx"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => caches.match("/"));
    })
  );
});
