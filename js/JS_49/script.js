"use strict";
// rest оператор может называться как угодно, но он всегда с ...
const log = function (a, b, ...some) {
  console.log(a, b, some);
};

log("basic", "rest", "operator", "usage");

// параметры по умолчанию  // по умолчанию basis = 2
function calcOrDouble(number, basis = 2) {
  console.log(number * basis);
}
calcOrDouble(3); // сюда уже передаем только один документ
