!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist",o(o.s=10)}([function(e,t,o){"use strict";t.a=()=>{const e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form"),o=document.querySelectorAll(".popup"),n=document.querySelector(".fixed-gift"),r=document.getElementById("gift"),c=document.querySelector(".clubs-list").querySelector("ul");document.addEventListener("click",l=>{const s=l.target;if((s.classList.contains("close_icon")||s.classList.contains("overlay")||s.classList.contains("close-btn"))&&o.forEach(e=>{e.style.display="none"}),s.matches(".clubs-list>p")){if(c.hasAttribute("style"))return void c.removeAttribute("style");(c.style.display="none")&&(c.style.display="block")}s.matches(".fixed-gift>img")&&(n.style.display="none",r.style.display="block"),s.classList.contains("open-popup")&&(t.style.display="block"),s.matches(".head-main>.right>.call>.btn")&&(e.style.display="block")})}},function(e,t,o){"use strict";t.a=()=>{document.getElementsByName("name").forEach(e=>{e.addEventListener("input",()=>{console.log(0),e.value=e.value.replace(/[^а-яё]/i,"")})})}},function(e,t,o){"use strict";t.a=()=>{const e="Ошибка, что-то пошло не так...",t=document.querySelectorAll(".form-content>form"),o=document.querySelector("#banner-form"),n=document.querySelector("#thanks"),r=document.querySelector("#check1"),c=document.querySelector("#footer_form"),l=document.querySelectorAll(".choose-club>.club>input"),s=document.querySelector("#card_order"),i=document.querySelector("#card_check");s.addEventListener("submit",t=>{t.preventDefault();const o=document.createElement("div");if(o.style.cssText="color:black; font-size: 2rem",s.parentNode.append(o),!i.checked)return"Необходимо подвердить согласие!"==o.previousSibling.textContent||"check"==o.previousSibling.name?void(o.name="check"):(o.style.cssText="color:red; font-size: 1rem",o.textContent="Необходимо подвердить согласие!",void(o.name="check"));o.textContent="Идет отправка...";const n=new FormData(s);let r={};n.forEach((e,t)=>{r[t]=e}),a(r).then(()=>{o.textContent="Запрос отправлен!";s.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{o.textContent=e,console.error(t)})}),c.addEventListener("submit",t=>{t.preventDefault();const o=document.createElement("div");if(o.style.cssText="color:white; font-size: 2rem",c.append(o),!l[0].checked&&!l[1].checked)return o.style.cssText="color:red; font-size: 1rem","Необходимо выбрать клуб!"==o.previousSibling.textContent||"checkbox"==o.previousSibling.name?void(o.name="checkbox"):(o.textContent="Необходимо выбрать клуб!",void(o.name="checkbox"));t.target;const r=new FormData(c);let s={};r.forEach((e,t)=>{s[t]=e}),a(s).then(()=>{n.style.display="block";c.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{c.parentNode.remove(),o.textContent=e,console.error(t)})}),o.addEventListener("submit",t=>{t.preventDefault();const c=document.createElement("div");if(c.style.cssText="color:white; font-size: 2rem",o.append(c),!r.checked)return c.style.cssText="color:red; font-size: 1rem","Необходимо подвердить согласие!"==c.previousSibling.textContent||"checkbox"==c.previousSibling.name?void(c.name="checkbox"):(c.textContent="Необходимо подвердить согласие!",void(c.name="checkbox"));c.textContent="Идет отправка...";t.target;const l=new FormData(o);let s={};l.forEach((e,t)=>{s[t]=e}),a(s).then(()=>{o.parentNode.remove(),c.textContent="Запрос отправлен!",n.style.display="block";o.querySelectorAll("input").forEach(e=>e.value="")}).catch(t=>{o.parentNode.remove(),c.textContent=e,console.error(t)})}),t.forEach(t=>{t.addEventListener("submit",o=>{o.preventDefault();const n=document.createElement("div");n.style.cssText="color:white; font-size: 2rem",t.parentNode.parentNode.append(n),n.textContent="Идет отправка...";const r=new FormData(t);let c={};r.forEach((e,t)=>{c[t]=e}),a(c).then(()=>{t.parentNode.remove(),n.textContent="Запрос отправлен!";t.querySelectorAll("input").forEach(e=>e.value="")}).catch(o=>{t.parentNode.remove(),n.textContent=e,console.error(o)})})});const a=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");let t=0;setInterval(()=>{e[t].style.display="none",++t>=e.length&&(t=0),e[t].style.display="flex"},3e3)}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".wrapper>a");0==window.scrollY&&(t.style.display="none"),document.addEventListener("scroll",()=>{window.scrollY>190&&document.documentElement.clientWidth<768?e.style.position="fixed":e.removeAttribute("style"),window.scrollY<775?t.style.display="none":t.style.display="block"})}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".top-menu").querySelector("img"),t=document.querySelector(".popup-menu");t.querySelector("img");e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",()=>{t.style.display="none"})}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),o=(document.querySelectorAll(".gallery-btn"),document.querySelectorAll(".dot"));t.forEach((e,t)=>{0==t?e.style.display="block":0!==t&&(e.style.display="none")});const n=(e,t)=>{e[t].style.display="none"},r=(e,t)=>{e[t].style.display="block"},c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)};let s=0,i=0;const a=()=>{n(t,s),c(o,s,"dot-active"),++s>=t.length&&(s=0),r(t,s),l(o,s,"dot-active")},d=(e=2500)=>{i=setInterval(a,e)};e.addEventListener("click",e=>{let i=e.target;e.preventDefault(),i.matches(".slider-arrow, .dot")&&(n(t,s),c(o,s,"dot-active"),i.matches("#services-right")&&s++,i.matches("#services-left")?s--:i.matches(".dot")&&o.forEach((e,t)=>{e===i&&(s=t)}),s>=t.length&&(s=0),s<0&&(s=t.length-1),r(t,s),l(o,s,"dot-active"))}),e.addEventListener("mouseover",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(i)}),e.addEventListener("mouseout",e=>{(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&d()}),d(3e3)}},function(e,t,o){"use strict";t.a=()=>{const e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide-services");document.getElementById("services-left"),document.getElementById("services-right");let o=0,n=4,r=[0,1,2,3,4];e.addEventListener("click",e=>{const c=e.target;e.preventDefault(),c.matches("#services-right, #services-left")&&(c.matches("#services-right")&&(9===n?n=0:n++,r.shift(),r.push(n),t.forEach(e=>{e.classList.remove("active")}),t.forEach((e,t)=>{r.forEach(o=>{o==t&&e.classList.add("active")})})),c.matches("#services-left")&&(console.log("prev"),0===o?o=9:o--,r.pop(),r.unshift(o),t.forEach(e=>{e.classList.remove("active")}),t.forEach((e,t)=>{r.forEach(o=>{o==t&&e.classList.add("active")})})))})}},,,function(e,t,o){"use strict";o.r(t);var n=o(0),r=o(1),c=o(2),l=o(3),s=o(4),i=o(5),a=o(6);var d=()=>{const e=document.querySelector("#card_order"),t=document.querySelector(".price-message>input"),o=document.querySelector("#price-total"),n={mozaika:[{period:1,price:1999},{period:6,price:9900},{period:9,price:13900},{period:12,price:19900}],schelkovo:[{period:1,price:2999},{period:6,price:14990},{period:9,price:21990},{period:12,price:24990}]};e.addEventListener("change",e=>{const t=e.target;t.matches(".time>input")&&s(t),t.matches(".club>input")&&c(t)});let r="mozaika";const c=e=>{r=e.value,i()};let l=1;const s=e=>{l=e.value,i()};t.addEventListener("change",()=>{i()});const i=()=>{let e;const c=n[r].find(e=>e.period==l);e="ТЕЛО2019"!=t.value?1:.7,o.textContent=Math.ceil(c.price*e)}},u=o(7);Object(n.a)(),Object(i.a)(),Object(s.a)(),d(),Object(c.a)(),Object(r.a)(),Object(u.a)(),Object(a.a)(),Object(l.a)()}]);
//# sourceMappingURL=main.js.map