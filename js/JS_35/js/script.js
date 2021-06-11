"use strict";

//Стандартное ожидание прогрузки дерева

// window.addEventListener('DOMContentLoaded', () => {

// Здесь приписывается весь JS code

// });

const p = document.querySelectorAll("p");
console.log(p);

//по умолчанию работает как async
// const script = document.createElement("script");
// script.src = "/js/test2.js";
// script.async = false; // отключает
// document.body.append(script);

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = false;
  document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/test2.js");
