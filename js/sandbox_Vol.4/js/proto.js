// __proto__
// Object.getPrototypeOf()

function Cat(name, color) {
  this.name = name;
  this.color = color;
}
Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says "Miao"`); // Cat Lilu says "Miao"
};

const cat = new Cat('Lilu', 'white');

console.log(Cat.prototype);
cat.voice();
console.log(cat.constructor); // [Function: Cat]

/*
cg 
{ voice: [Function (anonymous)] }
Cat Lilu says "Miao"
[Function: Cat]
*/

// =======

function Person() {}
Person.prototype.legs = 3;
Person.prototype.skin = 'blue';

const person = new Person();
person.name = 'Al';

console.log('skin' in person); // true
console.log('eyes' in person); // false
console.log(person.legs); // 3
console.log(person.name); // Al
console.log(person.eyes); // undefined

console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('skin')); // false

// ==== наследование через прототипы
// Object.create()
const smth = { year: 2021 };
const myYear = Object.create(smth);

console.log(myYear.year); // 2021

smth.year = 2048;
console.log(myYear.year); // 2048

console.log(myYear.hasOwnProperty('year')); // false
console.log(myYear.__proto__ === smth); // true
