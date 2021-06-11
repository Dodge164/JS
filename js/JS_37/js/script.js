"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll("button");

  // console.log(btns[0].classList.length);
  // console.log(btns[0].classList.item(0));
  // console.log(btns[0].classList.item(1));
  console.log(btns[1].classList.add("red", "green"));
  // console.log(btns[0].classList.remove("blue"));
  //console.log(btns[0].classList.toggle("blue"));

  // if (btns[1].classList.contains("red")) {
  //   console.log("red");
  // }

  // btns[0].addEventListener("click", () => {
  //   if (!btns[1].classList.contains("red")) {
  //     btns[1].classList.add("red");
  //   } else {
  //     btns[1].classList.remove("red");
  //   }
  // });

  btns[0].addEventListener("click", () => {
    btns[1].classList.toggle("red");
  });

  // Дилигирование событий

  const wrapper = document.querySelector(".btn__block");
  wrapper.addEventListener("click", (event) => {
    //у event target есть св-во tagName:
    // в нашем случае оно = BUTTON
    // if (event.target && event.target.tagName == "BUTTON") { // Первый способ, когда на
    // все элементы
    // if (event.target && event.target.classList.contains("blue")) {
    // Второй способ, когда на
    //элемент с конкретным классом, с другими потомками работать не будет

    // Третий способ
    //if (event.target && event.target.tagName == "BUTTON") {
    // Четвертый способ. по рекомендации google проверка на соответствие
    if (event.target && event.target.matches("button.green")) {
      console.log("Coffee time");
    }
  });
  // 1) вариант обработчик события. назначает потомкам сво-во
  const btn = document.createElement("button");
  btn.classList.add("green");
  wrapper.append(btn);

  // 2) вариант. метод перебора. Но тогда новая кнопка не унаследует
  // не уделигирует свойство родителя
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log("Tea time");
    });
  });
});
