if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),f={module:{uri:c},exports:t,require:r};a[c]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/247-61b6d48473d46724.js",revision:"61b6d48473d46724"},{url:"/_next/static/chunks/7f0c75c1-a2e40d8ef08f2703.js",revision:"a2e40d8ef08f2703"},{url:"/_next/static/chunks/framework-00b57966872fc495.js",revision:"00b57966872fc495"},{url:"/_next/static/chunks/main-a6f9cbe28a03fe39.js",revision:"a6f9cbe28a03fe39"},{url:"/_next/static/chunks/pages/_app-de22e9a67625baf1.js",revision:"de22e9a67625baf1"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/app-5cb6dbf89f3fa691.js",revision:"5cb6dbf89f3fa691"},{url:"/_next/static/chunks/pages/creators-1b0207c4283bc085.js",revision:"1b0207c4283bc085"},{url:"/_next/static/chunks/pages/docs-e0c8292594828644.js",revision:"e0c8292594828644"},{url:"/_next/static/chunks/pages/index-440bb4bf4dd01983.js",revision:"440bb4bf4dd01983"},{url:"/_next/static/chunks/pages/license-b7b4803ee094a071.js",revision:"b7b4803ee094a071"},{url:"/_next/static/chunks/pages/nft-a63ade405c92b0c9.js",revision:"a63ade405c92b0c9"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-434fefa8f39d8fbc.js",revision:"434fefa8f39d8fbc"},{url:"/_next/static/css/28244ccd5c1b824c.css",revision:"28244ccd5c1b824c"},{url:"/_next/static/css/a8ca2e4b548fb4af.css",revision:"a8ca2e4b548fb4af"},{url:"/_next/static/media/account.87ced97f.png",revision:"9dddead53aa3aadf87f3106ffa956f43"},{url:"/_next/static/media/connect.e8084b1e.png",revision:"cb1dca750280325bd8286d84307eab0f"},{url:"/_next/static/media/eth.0880bc88.svg",revision:"5537eb78aa63a1664dfcaea914262f3d"},{url:"/_next/static/media/ethereum_eth_logo.cda4f2bf.svg",revision:"7c19954628081bf6fd772fa0d0819547"},{url:"/_next/static/media/logo.4f3c4553.svg",revision:"6f751c85245a7d97723d98b4f761fdf9"},{url:"/_next/static/media/metamask.76187ceb.png",revision:"b5f90e443fa3512fcd6792dc05624372"},{url:"/_next/static/media/prani3733.3bd39001.png",revision:"8f650cd59d1e24feac5d82749091fc6e"},{url:"/_next/static/media/rach3465.76d29d52.png",revision:"ed6de48784661069e64b6a41e5e7d9df"},{url:"/_next/static/media/sridhar9777.3ca8426b.png",revision:"e19c72d42e7a4b807ae6f0e5d05622ad"},{url:"/_next/static/media/transfer_.2afb5f6b.svg",revision:"b5e2803a3c1fc697228e142148fabad4"},{url:"/_next/static/media/v4rsh1th1743.28fd9c45.png",revision:"1831d2d1e7efc875693882ea63593d09"},{url:"/_next/static/media/wallet.3c43826f.svg",revision:"730a0f89254aa06ffc8e481c22fabfbf"},{url:"/_next/static/v_wiOLUQ25e39XaejAyMe/_buildManifest.js",revision:"72b50334b881516646f38e2723084de9"},{url:"/_next/static/v_wiOLUQ25e39XaejAyMe/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/v_wiOLUQ25e39XaejAyMe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/account.png",revision:"9dddead53aa3aadf87f3106ffa956f43"},{url:"/account.svg",revision:"4923f26cf032b70e096167a04b988658"},{url:"/eth.svg",revision:"5537eb78aa63a1664dfcaea914262f3d"},{url:"/ethereum_eth_logo.svg",revision:"7c19954628081bf6fd772fa0d0819547"},{url:"/fast_transaction.svg",revision:"eaaa6944e5f46ba802f98a5bb34bf26e"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"7aec9ee7aff433bec3afa707558b658d"},{url:"/icon-256x256.png",revision:"0b038ae7e3020371e7acb21a9f56fafb"},{url:"/icon-384x384.png",revision:"d0074834e93d5136d6badda43d48e105"},{url:"/icon-512x512.png",revision:"97a9af0f6c986a292f8075edb59ded95"},{url:"/logo.svg",revision:"6f751c85245a7d97723d98b4f761fdf9"},{url:"/manifest.json",revision:"2b4ef30c4ab6e279181f423665b6e635"},{url:"/metamask-fox.svg",revision:"c06f3a3e804ebc7343949fdca3fdd7f8"},{url:"/pix/connect.png",revision:"cb1dca750280325bd8286d84307eab0f"},{url:"/pix/metamask.png",revision:"b5f90e443fa3512fcd6792dc05624372"},{url:"/pix/transfer_.svg",revision:"b5e2803a3c1fc697228e142148fabad4"},{url:"/punks/prani3733.png",revision:"8f650cd59d1e24feac5d82749091fc6e"},{url:"/punks/rach3465.png",revision:"ed6de48784661069e64b6a41e5e7d9df"},{url:"/punks/sridhar9777.png",revision:"e19c72d42e7a4b807ae6f0e5d05622ad"},{url:"/punks/v4rsh1th1743.png",revision:"1831d2d1e7efc875693882ea63593d09"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/wallet.svg",revision:"730a0f89254aa06ffc8e481c22fabfbf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
