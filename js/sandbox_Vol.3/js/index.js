/*
const citiesUSA = ['Portland', 'Boston', 'Detroit', 'Miami', 'Springfield'];
const citiesEurope = ['Vienna', 'Erevan', 'Tbilisi'];

const citiesUSAWithPopulation = {
  Portland: 20,
  Boston: 8,
  Detroit: 2,
  Miami: 5,
  Springfield: 3,
};
const citiesEuropeWithPopulation = {
  Vienna: 10,
  Erevan: 3,
  Tbilisi: 2,
};

// Spread
console.log(citiesUSA); // [ 'Portland', 'Boston', 'Detroit', 'Miami', 'Springfield' ]
console.log(...citiesUSA); // Portland Boston Detroit Miami Springfield
*/
/* старая запись слияния массивов
cn allCities = citiesUSA.concat(citiesEurope)
*/
/*
const allCities = [...citiesUSA, ...citiesEurope];
console.log(allCities);
// [
//   'Portland',
//   'Boston',
//   'Detroit',
//   'Miami',
//   'Springfield',
//   'Vienna',
//   'Erevan',
//   'Tbilisi'
// ]

const allCities = [...citiesUSA, 'Oxford', ...citiesEurope];
console.log(allCities);
// [
//   'Portland',
//   'Boston',
//   'Detroit',
//   'Miami',
//   'Springfield',
//   'Oxford       <----
//   'Vienna',
//   'Erevan',
//   'Tbilisi'
// ]

console.log(citiesUSAWithPopulation); // { Portland: 20, Boston: 8, Detroit: 2, Miami: 5, Springfield: 3 }
console.log({ ...citiesUSAWithPopulation }); // { Portland: 20, Boston: 8, Detroit: 2, Miami: 5, Springfield: 3 }
console.log({ ...citiesUSAWithPopulation, ...citiesEuropeWithPopulation });
// {
  Portland: 20,
  Boston: 8,
  Detroit: 2,
  Miami: 5,
  Springfield: 3,
  Vienna: 10,
  Erevan: 3,
  Tbilisi: 2
}

// Practice

const numbers = [4, 8, 3, 1];
console.log(Math.max(4, 8, 3, 1)); // 8
console.log(Math.max(...numbers)); // 8
console.log(Math.max.apply(null, numbers)); // 8 <-- Старый вариант записи

const divs = document.querySelectorAll('div');
const nodes = [...divs];
console.log(divs, Array.isArray(divs));
// NodeList(4) [div, div, div, div]
// 0: div
// 1: div
// 2: div
// 3: div
// length: 4
// [[Prototype]]: NodeList // false

console.log(nodes, Array.isArray(nodes));
// [div, div, div, div]
// 0: div
// 1: div
// 2: div
// 3: div
// length: 4
// [[Prototype]]: Array(0) // true
*/

// Rest
/*
function sum(a, b, ...rest) {
  console.log(rest); // [3, 4, 5], если function sum( ...rest) // [1, 2, 3, 4, 5]
  console.log(...rest); // 3 4 5, если function sum( ...rest) // 1, 2, 3, 4, 5
  return a + b;
}
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 3, т.е. 1 + 2 <--> (a + b)

function sum(a, b, ...rest) {
  return a + b + rest.reduce((a, i) => a + i, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 15
*/
// деструктуризация
/* старая запись
cn a = numbers[0]
cn b = numbers[1]
*/
/*
const [a, b] = numbers;
console.log(a, b); // 1, 2

const [a, b, ...other] = numbers;
console.log(a, b, other); // 1, 2 [3, 4, 5]


const person = {
  name: 'Al',
  age: 17,
  city: 'Hollow',
  country: 'England',
};
// десруктуризация
const { name, age } = person;
console.log(name, age); // Al 17

const { name, age, ...address } = person;
console.log(name, age, address); // Al 17 { city: 'Hollow', country: 'England' }


// Деструктуризация

function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}

const [sum, sub, mult] = calcValues(16, 4);
console.log(sum, sub); // 20 12
const [sum, , mult, ...other] = calcValues(16, 4);
console.log(sum, mult, other); // 20 64 [4]

function calcValues(a, b) {
  return [a + b, undefined, a * b, a / b];
}

const [sum, sub = 'No subtract', mult, ...other] = calcValues(16, 4);
console.log(sum, mult, other, sub); // 20 64 [ 4 ] No subtract

function calcValues(a, b) {
  return [a + b, a - b, a * b, a / b];
}

const [sum, sub = 'No subtract', mult, ...other] = calcValues(16, 4);
console.log(sum, mult, other, sub); // 20 64 [ 4 ] 12
*/

// Деструктуризация объектов
const person = {
  name: 'Al',
  age: 17,
  address: {
    city: 'Hollow',
    country: 'England',
  },
};

// const name = person.name <-- старая запись
// const { name } = person; <-- новая  запись
const {
  name: firstName = 'Дефолтное имя не сработает, тк определено в объекте',
  age,
  car = 'No car',
  address,
} = person;
console.log(firstName, age, address); // Al 17 No car { city: 'Hollow', country: 'England' }

const {
  name: firstName = 'Дефолтное имя не сработает, тк определено в объекте',
  age,
  car = 'No car',
  address: { city: homeTown, country },
} = person;
console.log(firstName, age, homeTown, country); // Al 17 Hollow England

const { name, ...info } = person;
console.log(name, info); // Al { age: 17, address: { city: 'Hollow', country: 'England' } }
