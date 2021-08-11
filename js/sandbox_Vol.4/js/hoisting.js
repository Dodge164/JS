function sum(a, b) {
  return a + b;
}

var i;
console.log(i); // undefined
i = 16;
console.log(i); // 16

console.log(num);
let num = 16;
console.log(num);

/* если использовать var, то значение будет undefined. 
При использовании let или const область видимости другая.
Такие переменные нельзя вызывать до их определения
*/
// Function Expression & Declaration
// Declaration
/* Можно вызывать функцию до ее объявления */
console.log(square(12)); // 144

function square(num) {
  return num ** 2;
}

// Expression
/* Можно вызывать функцию только после ее объявления */
const square = function (num) {
  return num ** 2;
};
console.log(square(12)); // 144
