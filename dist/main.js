!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);function r(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,u=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){i=!0,c=e},f:function(){try{u||null==r.return||r.return()}finally{if(i)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){var e=document.querySelectorAll("#send-form"),t=document.querySelectorAll(".form-email"),n=document.querySelectorAll(".phone-user"),o=document.querySelectorAll("#name_2"),c=document.querySelector("#userQuest");t.forEach((function(e){return e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^a-z\.\-\+\@\_0-9]/gi,"")}))})),n.forEach((function(e){return e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^0-9+]/gi,"")}))})),o.forEach((function(e){return e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-я ]/gi,"")}))})),c.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-я \.\,\:\?\-\+\@\_0-9]/gi,"")}));var u=document.createElement("div");u.style.cssText="font-size: 2rem;",e.forEach((function(e){return e.addEventListener("submit",(function(t){t.preventDefault(),e.appendChild(u),u.textContent="Загрузка...";var n,o={},c=r(new FormData(e).entries());try{for(c.s();!(n=c.n()).done;){var a=n.value;o[a[0]]=a[1]}}catch(e){c.e(e)}finally{c.f()}i(o).then((function(e){if(200!==e.status)throw new Error("Status network not 200");u.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){u.textContent=""}),5e3)})).catch((function(e){u.textContent="Что-то пошло не так...",setTimeout((function(){u.textContent=""}),5e3),console.error(e)})),document.querySelectorAll("input").forEach((function(e){e.value=""}))}))}));var i=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}},u=function(){var e=document.querySelector("#accordion-two"),t=e.querySelectorAll(".panel-collapse"),n=e.querySelectorAll(".panel-heading"),r=function(e){for(var n=0;n<t.length;n++)e===n?t[n].classList.add("in"):t[n].classList.remove("in")};e.addEventListener("click",(function(t){t.preventDefault();for(var o=t.target;o!==e;){if(o.classList.contains("panel-heading"))return void n.forEach((function(e,t){e===o&&r(t)}));o=o.parentNode}}))},i=function(){var e=document.querySelector("#show"),t=(document.querySelector("#close"),document.querySelectorAll(".hidden")),n=document.querySelector(".visible-sm-block");e.addEventListener("click",(function(){if(t.forEach((function(e){e.classList.toggle("hidden")})),n.classList.toggle("visible-sm-block"),"Больше..."===e.innerHTML)return console.log("Hello"),void(e.innerHTML="Скрыть..");e.innerHTML="Больше..."}))};function a(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e,t,n,r,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4,c=document.querySelector("#accordion"),u=c.querySelectorAll(".panel-collapse"),i=c.querySelectorAll(".panel-heading"),l=c.querySelectorAll(".construct-btn"),s=document.querySelector("#calc-result"),d=document.querySelectorAll(".title-text")[1],f=document.querySelectorAll(".expand")[0],y=document.querySelectorAll(".expand")[1],p=document.querySelector(".panel-body > input"),v=document.querySelector("#selectBox3"),m=document.querySelector("#selectBox4"),h=document.querySelectorAll(".expand")[2],S=document.querySelectorAll(".expand")[3],b=document.querySelector(".panel-group"),g=document.querySelector("#myonoffswitch"),q=document.querySelector("#myonoffswitch-two"),A=document.querySelector(".onoffswitch-inner"),E=document.querySelector("#innerTwo"),k=document.querySelector("#calcBtn"),L=document.querySelector(".popup-call"),x=document.querySelector("#formDiscount"),w=document.querySelector("#name_1"),C=1,T="Что-то пошло не так...",j="Загрузка...",O="Спасибо! Мы скоро с вами свяжемся!",_=document.createElement("div");_.style.cssText="font-size: 2rem;";var I=function(){document.querySelectorAll("input").forEach((function(e){e.value=""}))};w.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-я ]/gi,"")})),b.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input")||t.matches(".onoffswitch-inner"))&&D()})),A.addEventListener("click",(function(){!0===g.checked?(g.removeAttribute("checked"),g.setAttribute("unchecked","unchecked"),d.style.display="block",v.style.display="block",m.style.display="block"):(g.removeAttribute("unchecked"),g.setAttribute("checked","checked"),d.style.display="none",v.style.display="none",m.style.display="none")})),E.addEventListener("click",(function(){!0===q.checked?(q.removeAttribute("checked"),q.setAttribute("unchecked","unchecked")):(q.removeAttribute("unchecked"),q.setAttribute("checked","checked"))}));var M=function(){var e=function(e){for(var t=0;t<u.length;t++)e===t?u[t].classList.add("in"):u[t].classList.remove("in"),D()};c.addEventListener("click",(function(t){t.preventDefault();for(var n=t.target;n!==c;){if(n.matches(".panel-heading"))return void i.forEach((function(t,r){t===n&&e(r)}));if(n.matches(".construct-btn"))return void l.forEach((function(t,r){t===n&&e(r+1)}));n=n.parentNode}}))};M();var D=function(){e=f.options[f.selectedIndex].value,t=y.options[y.selectedIndex].value,n=h.options[h.selectedIndex].value,r=S.options[S.selectedIndex].value,g.hasAttribute("checked")?(C=o*e*t,q.hasAttribute("checked")&&(C+=1e3)):(C=(o+5e3)*e*t*n*r,q.hasAttribute("checked")&&(C+=2e3)),s.placeholder=C};k.addEventListener("click",(function(o){o.preventDefault(),L.style.display="block",x.addEventListener("submit",(function(o){o.preventDefault(),x.appendChild(_),_.textContent=j;var c=new FormData(x),u={};u.total_summ=C,u.value1=e,u.value2=t,u.value3=n,u.value4=r,u.input_distant=p.value;var i,l=a(c.entries());try{for(l.s();!(i=l.n()).done;){var s=i.value;u[s[0]]=s[1]}}catch(e){l.e(e)}finally{l.f()}H(u,(function(){_.textContent=O,setTimeout((function(){_.textContent=""}),5e3)}),(function(e){_.textContent=T,setTimeout((function(){_.textContent=""}),2e3),console.error(e)})),I()}))}));var H=function(e,t,n){var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){4===r.readyState&&(200===r.status?t():n(r.status))})),r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e))}};function d(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(){var e=document.querySelector("#userQuest"),t=document.querySelector(".popup-consultation"),n=document.querySelector("#sendQuestionForm"),r=document.querySelector("#name_13"),o=document.querySelector(".director-btn");e.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-я \.\,\:\?\-\+\@\_0-9]/gi,"")})),r.addEventListener("input",(function(e){e.target.value=e.target.value.replace(/[^а-я ]/gi,"")}));var c=document.createElement("div");c.style.cssText="font-size: 2rem;",o.addEventListener("click",(function(r){r.preventDefault(),t.style.display="block";var o=e.value;n.addEventListener("submit",(function(e){e.preventDefault(),n.appendChild(c),c.textContent="Загрузка...";var t=new FormData(n),r={};r.user_quest=o;var i,a=d(t.entries());try{for(a.s();!(i=a.n()).done;){var l=i.value;r[l[0]]=l[1]}}catch(e){a.e(e)}finally{a.f()}u(r,(function(){c.textContent="Спасибо! Мы скоро с вами свяжемся!"}),(function(e){c.textContent="Что-то пошло не так...",console.error(e)})),document.querySelectorAll("input").forEach((function(e){e.value=""}))}))}));var u=function(e,t,n){var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){4===r.readyState&&(200===r.status?t():n(r.status))})),r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e))}};(function(){var e=document.querySelectorAll(".popup"),t=document.querySelectorAll(".discount-btn"),n=document.querySelector(".popup-discount"),r=document.querySelector(".check-btn"),o=document.querySelector(".popup-check");t.forEach((function(e){e.addEventListener("click",(function(){n.style.display="block"}))})),r.addEventListener("click",(function(){o.style.display="block"})),e.forEach((function(e){e.addEventListener("click",(function(t){var n=t.target;n.classList.contains("popup-close")?e.style.display="none":(n=n.closest(".capture-form"))||(e.style.display="none")}))}))})(),c(),u(),i(),s(1e4),y()}]);