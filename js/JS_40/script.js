"use strict";

const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); // май - 4 месяц в программировании
console.log(now.getDate());
console.log(now.getDay()); // Sunday - 0 day
console.log(now.getUTCHours()); // UTC+0
console.log(now.getTimezoneOffset());
console.log(now.getTime()); // кол-во мс со времени 1970 года

console.log(now.setHours(18, 40)); // часы, минуты
console.log(now);

const now1 = new Date("2021-06-15");
//new Date.parse("2021-06-15");

// разница во времени (типа счетчик)
let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`it was ${end - start} ms`);
