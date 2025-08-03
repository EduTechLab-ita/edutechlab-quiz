// IMPORTANTE: Incrementa questa versione a 'v3', 'v4', ecc. ad ogni nuovo aggiornamento!
const CACHE_NAME = 'edutech-lab-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './logo-colorato.png', // Aggiunto per il funzionamento offline
  './icon-192.png',      // Aggiunto per il funzionamento offline
  './icon-512.png',      // Aggiunto per il funzionamento offline
  './icona-72.png',
  './icona-96.png',
  './icona-128.png',
  './icona-144.png',
  './icona-152.png',
  './icona-192.png',
  './icona-384.png',
  './icona-512.png'
];

// Installazione del Service Worker
self.addEventListener('install', function(event) {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Service Worker: Caching files');
        return cache.addAll(urlsToCache);
      })
  );
});

// NUOVA SEZIONE: Ascolta i messaggi dalla pagina
// Questo serve per attivare il nuovo Service Worker quando l'utente clicca "Aggiorna subito"
self.addEventListener('message', function(event) {
  if (event.data && event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Attivazione del Service Worker
self.addEventListener('activate', function(event) {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Intercettazione delle richieste (invariato)
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
