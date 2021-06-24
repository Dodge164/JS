'use strict';
/////////////////// теория RegExp (Regular Expressions)

// устаревший синтаксис создания RegExp
new RegExp('pattern', 'flags'); 
// текущий синтаксис 
/pattern/f

// Флаги
// i - поиск одного символа, не зависимо от регистра
// g - глобальный поиск сразу нескольких вхождений
// m - включает многострочный режим

// Методы
// search
// match
// replace
// test

// классы             обратные классы
// digits - \d        \D - не числа
// words - \w         \W - не слова
// spaces - \s        \S - не пробелы


// экранирование спецсимволов /\./

//////// SEARCH

// поиск определенного символа // ищем букву n
const answ = prompt('Enter your name');
const reg = /n/;
console.log(answ.search(reg));
// найдет только одну n - самую первую строчную. Заглавные и последующие не найдет

//////// SEARCH + i

// поиск определенного символа // ищем букву n
const answ = prompt('Enter your name');
const reg = /n/i;
console.log(answ.search(reg));
// найдет только одну n - самую первую. Заглавную или строчную


//////// MATCH + g

// ищем числа
const answ = prompt('Enter some pixels');
const reg = /\d/g;
console.log(answ.match(reg));
// ищет паттерн числа (/\d/) внутри регулярного выражения
// переведет 200px в массив ["2", "0", "0"]? который можно потом склеить

//////// MATCH + i

// поиск определенного символа // ищем букву n
const answ = prompt('Enter your name');
const reg = /n/i;
console.log(answ.match(reg));
// найдет только одну n - самую первую строчную. Заглавные и последующие не найдет
// но выведет в консоль в виде массива
// ["n", index: 1, input: "Ann", groups: undefined]

const str = "My name is C3P0";
console.log(str.match(/\w\d\w\d/i)); // "C3P0"

const str = "My name is C3P0";
console.log(str.match(/\W/i)); // Первый пробел --> 
//[" ", index: 2, input: 'My name is C3P0', groups: undefined]

const str = "My name is C3P0";
console.log(str.match(/\W/ig)); // все пробелы --> " "
//[" ", " ", " "]

const str = "My name is C3P0";
console.log(str.match(/\D/ig)); // все не числа --> " "
//["M", "y", " ", "n", "a", "m", "e", " ", "i", "s", " ", "C", "P"]

//////// MATCH + ig

// поиск определенного символа // ищем букву n
const answ = prompt('Enter your name'); // ANNN
const reg = /n/ig;
console.log(answ.match(reg));
// найдет все n. Заглавные или строчные
// выведет в консоль в виде массива
// (3) ["N", "N", "N"]


//////// REPLACE

const pass = prompt('Enter your password');
console.log(pass.replace('/./g', "*"));
// берем все элементы, которые попадут в строку и заменяем их звездочками
// за это отвечает Regular /./g (точка - все элементы)

const phone = prompt('Enter your phone');
console.log(phone.replace('/-/g', ":"));
// берем все дефисы, которые попадут в строку и заменяем их двоеточием
// или так
console.log('15-36-72'.replace(/-/g, ':'));


//////// TEST

// ищет конкретику


// ищем букву n
const answ = prompt('Enter your name');
const reg = /n/ig;
console.log(reg.test(answ));
// проверяет, есть ли в строке, которая передается 
// в виде теста, паттерн (/n/) внутри регулярного выражения
