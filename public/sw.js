if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>s(e,c),d={module:{uri:c},exports:t,require:r};a[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5afaf374"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/308-66894b575e8601aa.js",revision:"66894b575e8601aa"},{url:"/_next/static/chunks/675-b1c0bfa226b363b1.js",revision:"b1c0bfa226b363b1"},{url:"/_next/static/chunks/7f0c75c1-a2e40d8ef08f2703.js",revision:"a2e40d8ef08f2703"},{url:"/_next/static/chunks/996-9e3c12b77542c098.js",revision:"9e3c12b77542c098"},{url:"/_next/static/chunks/framework-1f10003e17636e37.js",revision:"1f10003e17636e37"},{url:"/_next/static/chunks/main-765bf6cd129e2719.js",revision:"765bf6cd129e2719"},{url:"/_next/static/chunks/pages/_app-c637d45487607e9e.js",revision:"c637d45487607e9e"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/app-248515ecfc2fed28.js",revision:"248515ecfc2fed28"},{url:"/_next/static/chunks/pages/creators-4954d321aef1a204.js",revision:"4954d321aef1a204"},{url:"/_next/static/chunks/pages/docs-f5798ec6bbe6e937.js",revision:"f5798ec6bbe6e937"},{url:"/_next/static/chunks/pages/index-0149b2ad74a155bb.js",revision:"0149b2ad74a155bb"},{url:"/_next/static/chunks/pages/license-1bd654395f7df2e1.js",revision:"1bd654395f7df2e1"},{url:"/_next/static/chunks/pages/verify-1509414899eff65d.js",revision:"1509414899eff65d"},{url:"/_next/static/chunks/pages/verify-matic-dae24ea7e799c319.js",revision:"dae24ea7e799c319"},{url:"/_next/static/chunks/pages/verify-rinkeby-c7b965c4ba9eb110.js",revision:"c7b965c4ba9eb110"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-434fefa8f39d8fbc.js",revision:"434fefa8f39d8fbc"},{url:"/_next/static/css/84cc90badfb7aa29.css",revision:"84cc90badfb7aa29"},{url:"/_next/static/css/fa5172a73949a2ce.css",revision:"fa5172a73949a2ce"},{url:"/_next/static/faMwEM02JUsDy9dLxGggf/_buildManifest.js",revision:"19fa0ea0fd95d6ca753aafe06de3af6e"},{url:"/_next/static/faMwEM02JUsDy9dLxGggf/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/faMwEM02JUsDy9dLxGggf/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/account.87ced97f.png",revision:"9dddead53aa3aadf87f3106ffa956f43"},{url:"/_next/static/media/connect.e8084b1e.png",revision:"cb1dca750280325bd8286d84307eab0f"},{url:"/_next/static/media/eth.1c384cc6.svg",revision:"badb58bb440f8e61f1241cc9edd446a6"},{url:"/_next/static/media/ethereum_eth_logo.2b4f9494.svg",revision:"211e45ddaf261406cbd8f7faea3b489e"},{url:"/_next/static/media/logo.f259bee9.svg",revision:"d88f80ddf50c5989067052e434132b29"},{url:"/_next/static/media/metamask.76187ceb.png",revision:"b5f90e443fa3512fcd6792dc05624372"},{url:"/_next/static/media/prani3733.3bd39001.png",revision:"8f650cd59d1e24feac5d82749091fc6e"},{url:"/_next/static/media/rach3465.76d29d52.png",revision:"ed6de48784661069e64b6a41e5e7d9df"},{url:"/_next/static/media/sridhar9777.3ca8426b.png",revision:"e19c72d42e7a4b807ae6f0e5d05622ad"},{url:"/_next/static/media/transfer_.c8b1e535.svg",revision:"738131d4648ab361c8f36c5249959c2a"},{url:"/_next/static/media/v4rsh1th1743.28fd9c45.png",revision:"1831d2d1e7efc875693882ea63593d09"},{url:"/_next/static/media/verify.9cfcbfb5.png",revision:"6be3fd73008879b59dc9fb8558d9a3a3"},{url:"/_next/static/media/wallet.3c43826f.svg",revision:"730a0f89254aa06ffc8e481c22fabfbf"},{url:"/account.png",revision:"9dddead53aa3aadf87f3106ffa956f43"},{url:"/account.svg",revision:"61ab128521d05f7f1f2ab67d711c20f6"},{url:"/eth.svg",revision:"badb58bb440f8e61f1241cc9edd446a6"},{url:"/ethereum_eth_logo.svg",revision:"211e45ddaf261406cbd8f7faea3b489e"},{url:"/fast_transaction.svg",revision:"593a0539fcdf647fef8da25cd18ded09"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"7aec9ee7aff433bec3afa707558b658d"},{url:"/icon-256x256.png",revision:"0b038ae7e3020371e7acb21a9f56fafb"},{url:"/icon-384x384.png",revision:"d0074834e93d5136d6badda43d48e105"},{url:"/icon-512x512.png",revision:"97a9af0f6c986a292f8075edb59ded95"},{url:"/logo.svg",revision:"d88f80ddf50c5989067052e434132b29"},{url:"/manifest.json",revision:"8fe35d6b9a0a00f47644f3af995db880"},{url:"/metamask-fox.svg",revision:"c06f3a3e804ebc7343949fdca3fdd7f8"},{url:"/pix/connect.png",revision:"cb1dca750280325bd8286d84307eab0f"},{url:"/pix/metamask.png",revision:"b5f90e443fa3512fcd6792dc05624372"},{url:"/pix/transfer_.svg",revision:"738131d4648ab361c8f36c5249959c2a"},{url:"/pix/verify.png",revision:"6be3fd73008879b59dc9fb8558d9a3a3"},{url:"/punks/prani3733.png",revision:"8f650cd59d1e24feac5d82749091fc6e"},{url:"/punks/rach3465.png",revision:"ed6de48784661069e64b6a41e5e7d9df"},{url:"/punks/sridhar9777.png",revision:"e19c72d42e7a4b807ae6f0e5d05622ad"},{url:"/punks/v4rsh1th1743.png",revision:"1831d2d1e7efc875693882ea63593d09"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/wallet.svg",revision:"730a0f89254aa06ffc8e481c22fabfbf"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
