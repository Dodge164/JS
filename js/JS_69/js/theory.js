'use strict';
// инкапсуляция функций
/*
function User(name, age) {
  this.name = name;
  let userAge = age;

  this.say = function () {
    console.log(`Username: ${this.name}, age: ${userAge}`);
  };
  this.getAge = function () {
    return userAge;
  };
  this.setAge = function (age) {
    if (typeof age === 'number' && age > 0 && age < 100) {
      userAge = age;
    } else {
      console.log('Incorrect value!');
    }
  };
}

const Alexandr = new User('Ivan', 70);
console.log(Alexandr.name);
console.log(Alexandr.getAge());


Alexandr.setAge(30);
Alexandr.setAge(300);
Alexandr.name = 'Alexey';

Alexandr.say();
*/

// инкапсуляция классов
/*
class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #lastname = 'Smith';
  say = () => {
    console.log(`Username: ${this.name}${this.#lastname}, age: ${this._age}`);
  };
  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 100) {
      this_age = age;
    } else {
      console.log('Incorrect value!');
    }
  }
}

const Alexandr = new User('Ivan', 70);
console.log(Alexandr.name);
Alexandr.userAge = 99;
//console.log(Alexandr.getAge());

//Alexandr.setAge(30);
//Alexandr.setAge(300);
Alexandr.name = 'Alexey';

Alexandr.say();
*/
// Homework

class Book {
  constructor(title, pages) {
    this.title = 'Liar';
    this.page = 779;
  }

  get title() {
    return this.title;
  }
  set pages(pages) {
    if (typeof pages === 'number' && pages > 0) {
      this.pages = pages;
    } else {
      console.log('Incorrect value!');
    }
  }
}
console.log((Book.pages = 110));
