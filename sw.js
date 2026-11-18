'use strict';

// La caché está aislada por el directorio de instalación.
const prefix = 'hierro-y-ceniza:' + self.registration.scope + ':';
const cacheName = prefix + 'portada-3';
const resources = [
  './', './index.html', './manifest.webmanifest',
  './icono-192.png', './icono-512.png', './icono-apple.png'
];
const known = new Set(resources.map(path => new URL(path, self.registration.scope).href));

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll([...known].map(url => new Request(url, {cache:'reload'})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) {
      if (key.startsWith(prefix) && key !== cacheName) await caches.delete(key);
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const {request} = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  url.search = '';
  if (!known.has(url.href)) return;
  event.respondWith((async () => {
    const cache = await caches.open(cacheName);
    try {
      const response = await fetch(request);
      if (response.ok) {
        try { await cache.put(url.href, response.clone()); }
        catch (error) { console.warn('No se pudo actualizar la copia local.', error); }
      }
      return response;
    } catch {
      return await cache.match(url.href) || Response.error();
    }
  })());
});
