const CACHE_NAME='mes-menus-v8-3';
const ASSETS=[
  './',
  './index.html',
  './styles.css?v=8.3',
  './app.js?v=8.3',
  './manifest.webmanifest',
  './icon.svg',
  './assets/icon-120.png','./assets/icon-152.png','./assets/icon-167.png','./assets/icon-180.png','./assets/icon-192.png','./assets/icon-512.png',
  './assets/food_papaya.png','./assets/food_vegetables.png','./assets/food_salad.png','./assets/food_water.png',
  './assets/food_fruit_salad.png','./assets/food_salmon.png','./assets/food_chicken_lean.png','./assets/food_chicken.png',
  './assets/food_apple.png','./assets/food_watermelon.png','./assets/food_breakfast_oats.png','./assets/food_shrimp.png',
  './assets/food_beef.png','./assets/food_mango.png','./assets/food_passion.png','./assets/food_orange.png',
  './assets/food_fruit_mix.png','./assets/food_fish.png','./assets/food_pineapple.png','./assets/food_milk.png',
  './assets/food_eggs.png','./assets/food_tropical_fruit.png'
];

self.addEventListener('install', event=>{
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event=>{
  event.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

// Stratégie : cache d'abord, puis réseau (et mise à jour silencieuse du cache)
self.addEventListener('fetch', event=>{
  if(event.request.method!=='GET')return;
  event.respondWith(
    caches.match(event.request).then(cached=>{
      const network=fetch(event.request).then(resp=>{
        if(resp && resp.status===200){
          const clone=resp.clone();
          caches.open(CACHE_NAME).then(cache=>cache.put(event.request, clone));
        }
        return resp;
      }).catch(()=>cached);
      return cached || network;
    })
  );
});
