"use strict";
/*
// 1 способ вызова функции (простой). Контекст вызова функции
// Обычная функция: this = window, но если "use strict" - indefined

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

showThis(4, 5);
// 2 способ вызова функции
// если мы используем метод внутри объекта, контекст вызова всегда будет ссылаться на
// сам объект
//т.е. Контекст у методов объекта - сам объект
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    function shout() {
      console.log(this); // а здесь уже undefined
    }
    shout();
    console.log(this);
  },
};
obj.sum();

// 3 способ вызова функции (через оператора new)
// this в конструкторах и классах - новый экземпляр объекта
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}
let Alexey = new User("Alexey", 37);

// 4 способ - ручное присвоение this любой функции (call, apply, bind)
//
// один вариант
function sayName() {
  console.log(this);
  console.log(this.name);
}
const user = {
  name: "Glazunov",
};
sayName.call(user); //одно и то же , но разный синтаксис
sayName.apply(user); //одно и то же , но разный синтаксис
// второй вариант
function sayName(surname) {
  console.log(this);
  console.log(this.name + surname);
}
const admin = {
  name: "Glazunov",
};
sayName.call(admin, " Mr."); //одно и то же , но разный синтаксис
sayName.apply(admin, [" Mr."]); //одно и то же , но разный синтаксис
// третий вариант (наиболее часто используется)

function count(num) {
  return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));
*/

//ПРАКТИКА Обработчик событий
// в этом случае контекст вызова - сам элемент, на котором произошло событие
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  // классический вариант функции
  console.log(this);
  this.style.backgroundColor = "green";
});

// способ со стрелочной функцией
btn.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "green";
});

// стрелочный вариант функции
// у нее нет своего контекста вызова, она берет его у родителя, в этом случае на сам объект
// {num: 5, sayNumber: f}
const object = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this);
    };
    say();
  },
};
object.sayNumber();

//второй вариант, с ответом 5
const object2 = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};
object2.sayNumber();
// третий вариант опущен return и один! аргумент без скобок
const calc = (a) => a * 2;
console.log(calc(4));
