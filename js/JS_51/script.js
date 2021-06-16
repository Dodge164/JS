"use strict";

const person = {
  name: "Alexey",
  phone: "+77777777777",
};
// чтобы передать на сервер JSON.stringify
console.log(JSON.stringify(person)); // результат будет в двойных кавычках
// чтобы получить с сервера JSON.parse
console.log(JSON.parse(JSON.stringify(person))); // результат будет в одинарных кавычках

// создание глубоких копий

const someone = {
  name: "Irishka",
  phone: "+71313131313",
  parents: {
    mother: "Mother",
    father: "Dad",
  },
};
const clone = JSON.parse(JSON.stringify(someone)); // команда клонирования

clone.parents.mother = "My mother";

console.log(someone);
console.log(clone);
