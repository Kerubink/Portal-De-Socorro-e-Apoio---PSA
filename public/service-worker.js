// service-worker.js

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          /* Coloque aqui os arquivos que você deseja que sejam cacheados */
          '/',
          '/index.html',
          '/app.jsx',
          '/index.css',
          /* Adicione mais arquivos conforme necessário */
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  