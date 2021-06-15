"use strict";

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   const timerId3 = setTimeout(logger, 2000); // выведет сообщение через 2 сек.
//   // от нажатия на кнопку
//   const timerId4 = setInterval(logger, 500); // будет выводить сообщение каждые 0,5 сек.
//   // при нажатии на кнопку
// });

// const timerId = setTimeout(
//   // можно задать не через переменную, а просто
//   function (text) {
//     console.log(text);
//   },
//   2000,
//   "Start"
// );

// const timerId2 = setTimeout(logger, 2000); // Здесь уже функция не вызывается, а просто
// названа

// function logger() {
//   console.log("text");
// }

// clearInterval(timerId);

// Настраиваем счетчик
/*const btn2 = document.querySelector(".btn");
let timerId22,
  i = 0;

btn2.addEventListener("click", () => {
  timerId22 = setInterval(logger, 500);
});

function logger() {
  if (i === 3) {
    clearInterval(timerId22);
  }
  console.log("timer");
  i++;
}
*/

// рекурсивный вызов setTimeout. Который позволяет сохранить задержку, если
// функция очень большая

// let id = setTimeout(function log() {
//   console.log("delay");
//   id = setTimeout(log, 500);
// }, 500);

// передвижение квадрата
const btn = document.querySelector(".btn");
let timerId,
  i = 0;

function myFirstAnimation() {
  const element = document.querySelector(".box");
  let position = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (position == 300) {
      clearInterval(id);
    } else {
      position++;
      element.style.top = position + "px";
      element.style.left = position + "px";
    }
  }
}
btn.addEventListener("click", myFirstAnimation);
