"use strict";
// ф-я конструктор
function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`hello, ${this.name}!`);
  };
}

// работа с prototype/ Наследование?

User.prototype.exit = function () {
  console.log(`User ${this.name} logged out`);
};

const Ivan = new User("Ivan", 28);
const Alexey = new User("Alexey", 37);

console.log(Alexey);
console.log(Ivan);

Alexey.hello();
Ivan.hello();

Alexey.exit();
Ivan.exit();
