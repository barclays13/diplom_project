!function(e){var t={};function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=9)}([function(e,t,o){"use strict";t.a=()=>{const e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form"),o=document.querySelectorAll(".popup"),n=document.querySelector(".fixed-gift"),c=document.getElementById("gift"),r=document.querySelector(".clubs-list").querySelector("ul");document.addEventListener("click",l=>{const s=l.target;if((s.classList.contains("close_icon")||s.classList.contains("overlay")||s.classList.contains("close-btn"))&&o.forEach(e=>{e.style.display="none"}),s.matches(".clubs-list>p")){if(r.hasAttribute("style"))return void r.removeAttribute("style");(r.style.display="none")&&(r.style.display="block")}s.matches(".fixed-gift>img")&&(n.style.display="none",c.style.display="block"),s.classList.contains("open-popup")&&(t.style.display="block"),s.matches(".head-main>.right>.call>.btn")&&(e.style.display="block")})}},function(e,t,o){"use strict";t.a=()=>{document.getElementsByName("name").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^а-яё]/i,"")})}),document.getElementsByName("phone").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[^0-9+]/,"")})})}},function(e,t,o){"use strict";t.a=()=>{const e="Ошибка, что-то пошло не так...",t=document.querySelectorAll(".form-content>form"),o=document.querySelector("#banner-form"),n=document.querySelector("#thanks"),c=document.querySelector("#check1"),r=document.querySelector("#footer_form"),l=document.querySelectorAll(".choose-club>.club>input"),s=document.querySelector("#card_order"),a=document.querySelector("#card_check"),i=document.getElementById("price-total");s.addEventListener("submit",t=>{t.preventDefault();const o=document.createElement("div");if(o.style.cssText="color:black; font-size: 2rem",s.parentNode.append(o),!a.checked)return"Необходимо подвердить согласие!"==o.previousSibling.textContent||"check"==o.previousSibling.name?void(o.name="check"):(o.style.cssText="color:red; font-size: 1rem",o.textContent="Необходимо подвердить согласие!",void(o.name="check"));o.textContent="Идет отправка...";const n=new FormData(s);let c={};n.forEach((e,t)=>{c[t]=e}),i&&(c.Price=i.textContent),d(c).then(()=>{o.textContent="Запрос отправлен!";s.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{o.textContent=e,console.error(t)})}),r.addEventListener("submit",t=>{t.preventDefault();const o=document.createElement("div");if(o.style.cssText="color:white; font-size: 2rem",r.append(o),!l[0].checked&&!l[1].checked)return o.style.cssText="color:red; font-size: 1rem","Необходимо выбрать клуб!"==o.previousSibling.textContent||"checkbox"==o.previousSibling.name?void(o.name="checkbox"):(o.textContent="Необходимо выбрать клуб!",void(o.name="checkbox"));t.target;const c=new FormData(r);let s={};c.forEach((e,t)=>{s[t]=e}),d(s).then(()=>{n.style.display="block";r.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{r.parentNode.remove(),o.textContent=e,console.error(t)})}),o.addEventListener("submit",t=>{t.preventDefault();const r=document.createElement("div");if(r.style.cssText="color:white; font-size: 2rem",o.append(r),!c.checked)return r.style.cssText="color:red; font-size: 1rem","Необходимо подвердить согласие!"==r.previousSibling.textContent||"checkbox"==r.previousSibling.name?void(r.name="checkbox"):(r.textContent="Необходимо подвердить согласие!",void(r.name="checkbox"));r.textContent="Идет отправка...";t.target;const l=new FormData(o);let s={};l.forEach((e,t)=>{s[t]=e}),d(s).then(()=>{o.parentNode.remove(),r.textContent="Запрос отправлен!",n.style.display="block";o.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{o.parentNode.remove(),r.textContent=e,console.error(t)})}),t.forEach(t=>{t.addEventListener("submit",o=>{o.preventDefault();const n=document.createElement("div");n.style.cssText="color:white; font-size: 2rem",t.parentNode.parentNode.append(n),n.textContent="Идет отправка...";const c=new FormData(t);let r={};c.forEach((e,t)=>{r[t]=e}),d(r).then(()=>{t.parentNode.remove(),n.textContent="Запрос отправлен!";t.querySelectorAll("input").forEach(e=>e.value="")}).catch(o=>{t.parentNode.remove(),n.textContent=e,console.error(o)})})});const d=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"},3e3)}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".wrapper>a");0==window.scrollY&&(t.style.display="none"),document.addEventListener("scroll",()=>{window.scrollY>190&&document.documentElement.clientWidth<768?e.style.position="fixed":e.removeAttribute("style"),window.scrollY<775?t.style.display="none":t.style.display="block"})}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".top-menu").querySelector("img"),t=document.querySelector(".popup-menu");t.querySelector("img");e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",()=>{t.style.display="none"})}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),o=(document.querySelectorAll(".gallery-btn"),document.querySelectorAll(".dot"));t.forEach((e,t)=>{0==t?e.style.display="block":0!==t&&(e.style.display="none")});const n=(e,t)=>{e[t].style.display="none"},c=(e,t)=>{e[t].style.display="block"},r=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)};let s=0,a=0;const i=()=>{n(t,s),r(o,s,"dot-active"),++s>=t.length&&(s=0),c(t,s),l(o,s,"dot-active")},d=(e=2500)=>{a=setInterval(i,e)};e.addEventListener("click",e=>{let a=e.target;e.preventDefault(),a.matches(".slider-arrow, .dot")&&(n(t,s),r(o,s,"dot-active"),a.matches("#services-right")&&s++,a.matches("#services-left")?s--:a.matches(".dot")&&o.forEach((e,t)=>{e===a&&(s=t)}),s>=t.length&&(s=0),s<0&&(s=t.length-1),c(t,s),l(o,s,"dot-active"))}),e.addEventListener("mouseover",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(a)}),e.addEventListener("mouseout",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&d()}),d(3e3)}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide-services");document.getElementById("services-left"),document.getElementById("services-right");let o=0,n=4,c=[0,1,2,3,4];e.addEventListener("click",e=>{const r=e.target;e.preventDefault(),r.matches("#services-right, #services-left")&&(r.matches("#services-right")&&(9===n?n=0:n++,c.shift(),c.push(n),t.forEach(e=>{e.classList.remove("active")}),t.forEach((e,t)=>{c.forEach(o=>{o==t&&e.classList.add("active")})})),r.matches("#services-left")&&(0===o?o=9:o--,c.pop(),c.unshift(o),t.forEach(e=>{e.classList.remove("active")}),t.forEach((e,t)=>{c.forEach(o=>{o==t&&e.classList.add("active")})})))})}},,function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(1),r=o(2),l=o(3),s=o(4),a=o(5),i=o(6),d=o(7);Object(n.a)(),Object(a.a)(),Object(s.a)(),Object(r.a)(),Object(c.a)(),Object(d.a)(),Object(i.a)(),Object(l.a)()}]);
//# sourceMappingURL=schelkovo.js.map