// let
let a = 'Variable a';
let b = 'Variable b';
// создаем scope (область в скобках {})
{
  a = 'new A'; // будет доступна и локально и глобально
  let b = 'local B'; // будет доступна только локально в этом scope
  console.log('Scope A', a); // new A
  console.log('Scope B', b); // local B
  /* то есть для работы доступны только те переменные, что находятся в области scope */
}
// это уже глобальный scope
console.log('Scope A', a); // new A
console.log('Scope B', b); // Variable b

// const
const PORT = 8080;
const array = ['JS', 'is', 'fun'];
array.push('))');
array[0] = 'JavaScript';
console.log(array); // [ 'JavaScript', 'is', 'fun', '))' ]

const obj = {};
obj.name = 'Al';
obj.age = 17;

console.log(obj); // { name: 'Al', age: 17 }

delete obj.name;
console.log(obj); // { age: 17 }
