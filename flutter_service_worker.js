'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "75c5661367de4dc741661d467a8da9d6",
".git/config": "71cbcfcd0750423bd236393fff063264",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "d6628019dca291cf79c10adb10b6a597",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "088a77b4e9adc50fa30ebbc9a0d1fe2f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2defeace4c1f7983a744e0f2cc5be459",
".git/logs/refs/heads/web": "2defeace4c1f7983a744e0f2cc5be459",
".git/logs/refs/remotes/origin/web": "1d8cc787e7b368c92944c280a44ea3df",
".git/objects/00/6f7b516b57a45ad43a63a528eb951814411d05": "7a5d4fc6b87b08b81af50e2e41c11581",
".git/objects/02/b2ad64e0bef0ee90f82065277ab0d9d16e4f95": "156894b27dd9134b4cee4cdfe36ed40e",
".git/objects/05/168bae446776e835e96319350263f6a01c2f15": "c5fb5501f9a3b835dd22e4c6ae3006c6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/1b/3f039a82abc2f9594cc6d72736d64a96866d18": "23a098bb9fd0dd1731bc71e2980a01c4",
".git/objects/1d/e562495ce5b739345b9f5ce093672c9720a406": "b63d622cef375eb9f4c25d7aa14c1650",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/9b7784cc5c367e66e6ee3bf3839a83fb2cf72b": "9f76bd45e6fc5071b96ec070f6f34ec0",
".git/objects/22/fa8556c4453e6c07603cc009527a6933a9d04f": "6511d70658808ff3df5dabe15e0b0279",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/0b025961b9ccac81e908694c0bfbd659279844": "9fea292089abfc76f8b833fe08754461",
".git/objects/32/9371109b78f5bd3dab18ca73894aeb4eaf0626": "e97e4b52f01739f9b711d0b295829f7a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/37/71cb79de7c03ad0bcc5ef034bd1966c19c8675": "0d0d9dadeb66bed3d1d72d71d1af26a4",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/a4b3d0fc00dc2cf5f04dd2e3a9ab1355516de9": "ee23dfff1805c674ffea6ee071147ccf",
".git/objects/3d/b1699405869fd7c965bd12e3531e4345b22fc6": "d201b4ea89d5b9574a68252855512e1a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/e8fbba7b945ae7209c4baeb74a4c6dd552a4a4": "a149ce0522e658ea4b35a5743f02f129",
".git/objects/43/09e0512070fb6495be1ed95b4c33a7ea899aa8": "222d9006a6f21f71486002218cea115e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/63/41b1888e8955db38b2aed7cbed8dd389472ead": "3bd2f9e34e4e519e841463df98485945",
".git/objects/64/cb16ee21619a7e88f6f6b531e2cda581744bc3": "b608dc084084f72fff858aef2a99ddf6",
".git/objects/67/178ffbf278c7d6b0ceb36f33c07d81eb40c1ef": "475a04c157540756cb6f7d329ab1e20b",
".git/objects/69/f1ef17deed5778b710d822013c1d143954a0cd": "f1801023edf468fae1331569c1d80d30",
".git/objects/6b/1c9ce25f5a519d994ed8f0198dbfc3dd818327": "da5909203cca3b2e1662edcb5ac1a078",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/77/40584c82c4d013d4eb1312700785de4a779355": "520f4c51da05b5535592bf624f71ec6b",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7f/d6f918f1cb1a06f544928d4c51cd290d6115cd": "0e9b4fdff98f49b00d383725c32e1758",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/bbd6fd6115011b841730d48b7c56b8c787097f": "64441d408f599f31549d60842cc0c11f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/85d89c218dba261fa757f1078f06ac2fe5f16d": "062f3427b4311f72587bafd40397ecf3",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/6b13d676327ca0a4dbe0a322685bd79c653d06": "67fb6496e0d356f57001ec2e3de2b5be",
".git/objects/9f/3d1d6309fcfadf126b55bc5510e8c71dc61651": "839eae5d9c83d88315ac610e7f810c24",
".git/objects/ab/1dbbdc8efb56a511c906f586ebaef9ad868bbc": "fd8e9fdf26eda8ee204570573d4ff811",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/4c5276763600d32032ff814af66c810ac1418b": "f55facf12ebb006087a73aacef1be00b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/a51f7b0bd41a6bdd57f2791d9053a070ce9f5d": "598de0f175d23a3b9455cdfc879f79c0",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/0288d5b9d42b855445bbb21da2879c4c18b526": "da4d4c15a952f1b95adbefceb30bec84",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e2/a7652718b43a96311ce23783c75b395cf5d290": "508a796cb13276199d261b31f73373c5",
".git/objects/ea/c12ee1af48c252e6e92c49f8f687330456e3df": "b6c3d442d5a16f23eee29a8b6e306060",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/812059a9bc94b7411e8310ae06d15e08279b5d": "342e564d35fb728f7e50029dd23bb593",
".git/objects/f6/effb6409e9f50c07545c9d4523df31f1d999ff": "692f6e5ad74300cdea4ce991a98f53bd",
".git/objects/fd/16d03d6007d05fcf96affe583b78973b6bef78": "ba437034fe54478bf904b5044df94024",
".git/objects/fe/272087dcdfbe20a019d80cfdf2315875e22167": "b2a32958ce2feb67251c1fad428e5d01",
".git/refs/heads/web": "0955815c48766e7c2140407e02710e91",
".git/refs/remotes/origin/web": "0955815c48766e7c2140407e02710e91",
"assets/AssetManifest.bin": "788709d33f8753ab2f05526201e6283b",
"assets/AssetManifest.bin.json": "e386fdf8fc072bd240dcd820e8f34446",
"assets/AssetManifest.json": "40f1757d9c543dd75a72731769976808",
"assets/assets/fonts/AfacadFlux-Black.ttf": "ae8adcaf9e52db5fe11e831e339eae88",
"assets/assets/fonts/AfacadFlux-Bold.ttf": "3183943cee660f1a083cd23fd18d2355",
"assets/assets/fonts/AfacadFlux-ExtraBold.ttf": "71511b61c7cc7382534679764c55fa26",
"assets/assets/fonts/AfacadFlux-ExtraLight.ttf": "396022a1ab703d31777d8248c7fef33c",
"assets/assets/fonts/AfacadFlux-Light.ttf": "6a1e29c75a88258e5857c37a6ca08240",
"assets/assets/fonts/AfacadFlux-Medium.ttf": "1908d8590475462cae7f269a30bee57a",
"assets/assets/fonts/AfacadFlux-Regular.ttf": "db4ccc34d6b61c745e422d6861243b07",
"assets/assets/fonts/AfacadFlux-SemiBold.ttf": "6477462b194fe912c49d7028134f4704",
"assets/assets/fonts/AfacadFlux-Thin.ttf": "3f77c4d54d8f34614ffafbcf127869d0",
"assets/assets/icons/socials/Github-dark.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/icons/socials/Github-light.svg": "0a7477235dc5062883e51c94fa3fb4c0",
"assets/assets/icons/socials/Linkedin-dark.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/icons/socials/Linkedin-light.svg": "d83aa12847d09e15c16414acf8c14371",
"assets/assets/icons/socials/Medium-dark.svg": "6d6f6148d19193268cd40d8ac36ff558",
"assets/assets/icons/socials/Medium-light.svg": "cb1d04c8c209861fed0edf70886d4aad",
"assets/assets/icons/socials/X-dark.svg": "210c801e9c4adc6775dd867ba2ac4101",
"assets/assets/icons/socials/X-light.svg": "3882b24417cf1e4777ae4c47f1770481",
"assets/FontManifest.json": "f6badbdb54f9fa147b47e809e801d9bd",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "3cc2f57df6e93b5360dad536d2ce2c87",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "bd84d4954e7548efb7b7a44cf67e153e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc03e8a0cca9b19e8eaab9b56e5dd6ae",
"/": "bc03e8a0cca9b19e8eaab9b56e5dd6ae",
"main.dart.js": "3a2dc4a41a4643acf5741b4cbfa08b05",
"manifest.json": "5ae4f757039c5d2281b58834f9694253",
"version.json": "7d5ae3db428ea8c2c7f58a722453683a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
