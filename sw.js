// Minimal passthrough service worker to avoid 404 during registration
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});
self.addEventListener('fetch', () => {
  // No-op: let the network handle requests
});