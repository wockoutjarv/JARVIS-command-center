self.addEventListener('push', event => {
  let id = '';
  try { id = event.data.json().id; } catch {}
  event.waitUntil(self.registration.showNotification('JARVIS', {body:'Open your inbox for an update.',tag:id || 'jarvis-inbox'}));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.openWindow(new URL('./?inbox=1', self.registration.scope).href));
});