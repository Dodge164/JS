"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");
const widthClient = box.clientWidth; // без учета margin и border
const heightClient = box.clientHeight;
console.log(widthClient, heightClient);

const widthOffset = box.offsetWidth; // с учетом margin и border
const heightOffset = box.offsetHeight;
console.log(widthOffset, heightOffset);

const widthScroll = box.scrollWidth; // с учетом всех прокруток
const heightScroll = box.scrollHeight;
console.log(widthScroll, heightScroll);

btn.addEventListener("click", () => {
  // разворачиваем весть текст при click
  box.style.height = box.scrollHeight + "px";
  // показываем сколько отскролили сверху
  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // показывает координаты?/размеры?
console.log(box.getBoundingClientRect().top); // показывает расстояние от верха?

const style = window.getComputedStyle(box); // показывает все стили элемента из CSS
console.log(style.display); //показывает конкретный стиль элемента из CSS

console.log(document.documentElement.clientWidth); // сколько пролистал пользователь
console.log(document.documentElement.scrollTop);
