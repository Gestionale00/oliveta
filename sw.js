/* Gestionale Oliveta · service worker del guscio: tiene in memoria solo i file di questa pagina
   (il gestionale vero arriva da Google Apps Script e non passa da qui). Prima la rete, poi la copia. */
const CACHE = "oliveta-guscio-5";
const FILE = ["./", "index.html", "config.js", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    /* sempre dalla rete, ricontrollando la copia del browser: le modifiche fatte su GitHub arrivano subito */
    fetch(r.url, { cache: "no-cache", credentials: "same-origin" }).then((res) => {
      const u = new URL(r.url), chiave = u.pathname.endsWith("config.js") ? u.origin + u.pathname : r;
      if (res.ok) { const copia = res.clone(); caches.open(CACHE).then((c) => c.put(chiave, copia)); }
      return res;
    })
      .catch(() => caches.match(r, { ignoreSearch: true }).then((x) => x || caches.match("index.html")))
  );
});
