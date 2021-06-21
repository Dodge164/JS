"use strict";

// методы перебора массивов

// 1 Filter - возвращает НОВЫЙ массив (короче, длиннее)

const names = ["Nina", "Alexey", "Alexandr", "Irina"];

const shortNames = names.filter(function (name) {
  return name.length < 6;
});
console.log(shortNames); // вернет Нина и Ирина

// 2 map - позволяет ИЗМЕНИТЬ каждый элемент массива
// 1 способ (через две переменные) <--- предпочтительлнее
const answers = ["AlexEY", "NiNa", "Welcome"];
const result = answers.map((item) => item.toLowerCase());
console.log(result);
// 2 способ (через перезапись массива)
let answers = ["AlexEY", "NiNa", "Welcome"];
answers = answers.map((item) => item.toLowerCase());
console.log(answers);

// 3 every/some
const ikutsuKa = [7, "xwz", "ikutsuKaString"];

console.log(ikutsuKa.some((item) => typeof item === "number")); //true
console.log(ikutsuKa.every((item) => typeof item === "number")); // false

// 4 reduce (метод перебора)
// пример с числами
/*
1)                          0 + 9               = 9
2)                          9 + 7               = 16
3)                          16 + 5              = 21
4)                          21 + 3              = 24
5)                          24 + 4              = 28
6)                          28 + 6              = 34
*/
// без начального значения, т.е. с 0
const arr = [9, 7, 5, 3, 4, 6];
const result = arr.reduce((sum, current) => sum + current);
console.log(result);
// с начальным значением, например с 9
const arr = [9, 7, 5, 3, 4, 6];
const result = arr.reduce((sum, current) => sum + current, 9);
console.log(result);

// пример со строками
// 1 способ
const arr = ["melon", "cucumber", "lemon", "grapes", "orange", "banana"];
const result = arr.reduce((sum, current) => sum + ", " + current);
console.log(result);
// 2 способ
const arr = ["melon", "cucumber", "lemon", "grapes", "orange", "banana"];
const result = arr.reduce((sum, current) => `${sum}, ${current}`);
console.log(result);

// способ с начальным значением, например 'These are:'
// 1.1 способ
const arr = ["melon", "cucumber", "lemon", "grapes", "orange", "banana"];
const result = arr.reduce((sum, current) => sum + ", " + current, "These are:");
console.log(result);
// 2.2 способ
const arr = ["melon", "cucumber", "lemon", "grapes", "orange", "banana"];
const result = arr.reduce((sum, current) => `${sum}, ${current}`, "These are:");
console.log(result);

// практический пример

const object = {
  Alexey: "person",
  Nina: "person",
  cat: "animal",
  dog: "animal",
};

// вытаскиваем имена

const newArr = Object.entries(object);
console.log(newArr);
// получим уже не объект, а набор массивов
/*
[
  [ 'Alexey', 'person' ],
  [ 'Nina', 'person' ],
  [ 'cat', 'animal' ],
  [ 'dog', 'animal' ]
]
*/
// отфильтруем, используя chaining
const newArr1 = Object.entries(object).filter((item) => item[1] === "person");
console.log(newArr1);
// получим массивы, но уже только два, а не четыре
/*
[ [ 'Alexey', 'person' ], [ 'Nina', 'person' ] ]
*/
// снова фильтруем используя chaining map (тк нужно трансформировать массив)
const newArr2 = Object.entries(object)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);
console.log(newArr2);
// получим массив
/*
[ 'Alexey', 'Nina' ]
*/
