var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const i=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),u=document.querySelector('input[name="amount"]');function a(e,t){const n=Math.random()>.3;return console.log(e,t),new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector("form > button").addEventListener("click",(e=>{e.preventDefault();const t=parseInt(u.value),n=parseInt(i.value),o=parseInt(l.value);let s=0;for(let e=1;e<=t;e++)s=1===e?n:n+o*(e-1),a(e,s).then((({position:e,delay:t})=>{r.Notify.success(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{r.Notify.failure(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.b9ea5cd2.js.map
