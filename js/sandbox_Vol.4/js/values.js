'use strict';
let a = 16;
let b = a;
b++;
console.log('a', a); // 16
console.log('b', b); // 17

// =======
let d = [1, 2, 3, 4, 5];
let e = d; // здесь копируем ссылку на массив
e.push(6); // e хранит ссылку на массив d
console.log('d', d); // [ 1, 2, 3, 4, 5, 6 ]
console.log('e', e); // [ 1, 2, 3, 4, 5, 6 ]

let f = [1, 2, 3, 4, 5];

console.log(d === e); // true, тк делаем слепок массива
console.log(d === f); // false, тк это не слепок, а другой массив

// =====
let d = [1, 2, 3, 4, 5];
let e = d.concat(); // здесь копируем массив, а не ссылку
e.push(6); //
console.log('d', d); // [ 1, 2, 3, 4, 5 ]
console.log('e', e); // [ 1, 2, 3, 4, 5, 6 ]
