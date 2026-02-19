const CACHE_NAME="islamapp-v1";
const urlsToCache=[
"./index.html",
"./manifest.json",
"./icon-192.png",
"./icon-512.png",
"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Hind+Siliguri:wght@400;600&display=swap",
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
];

self.addEventListener('install',event=>{
event.waitUntil(
caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache))
);
});

self.addEventListener('fetch',event=>{
event.respondWith(
caches.match(event.request).then(response=>response||fetch(event.request))
);
});
