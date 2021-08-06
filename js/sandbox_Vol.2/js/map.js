'use strict';
const obj = {
  name: 'Al',
  age: 24,
  job: 'Professor',
};

const entries = [
  ['name', 'Al'],
  ['age', 24],
  ['job', 'Professor'],
];

// console.log(Object.entries(obj)); // [['name', 'Al'], ['age', 24], ['job', 'Professor']]
// console.log(Object.fromEntries(entries)); // { name: 'Al', age: 24, job: 'Professor' }

const map = new Map(entries);
// console.log(map); // Map(3) {'name' => 'Al', 'age' => 24, 'job' => 'Professor'}
// console.log(map.get('job')); // Professor

const objectt = {
  one: 1,
  two: 2,
  three: 3,
};
map.set('newField', 33).set(objectt, 'Value of object');

//console.log(map);
// Map(5) {
//   'name' => 'Al',
//   'age' => 24,
//   'job' => 'Professor',
//   'newField' => 33,
//   { one: 1, two: 2, three: 3 } => 'Value of object'
// }

// console.log(map.get(objectt));

map.delete('job');
// console.log(map.has('job')); // false
// console.log(map.size);

// ===============

for (let entry of map.entries()) {
  // console.log(entry);
  // [ 'name', 'Al' ]
  // [ 'age', 24 ]
  // [ 'newField', 33 ]
  // [ { one: 1, two: 2, three: 3 }, 'Value of object' ]
}

for (let [key, value] of map) {
  // console.log(key, value);
  // name Al
  // age 24
  // newField 33
  // { one: 1, two: 2, three: 3 } Value of object
}

for (let val of map.values()) {
  // console.log(val);
  // Al
  // 24
  // 33
  // Value of object
}

for (let key of map.keys()) {
  // console.log(key);
  // name
  // age
  // newField
  // { one: 1, two: 2, three: 3 }
}

map.forEach((val, key, m) => {
  // console.log(val, key);
  // Al name
  // 24 age
  // 33 newField
  // Value of object { one: 1, two: 2, three: 3
});

//============
// const array = [...map];
// console.log(array);
// [
//     [ 'name', 'Al' ],
//     [ 'age', 24 ],
//     [ 'newField', 33 ],
//     [ { one: 1, two: 2, three: 3 }, 'Value of object' ]
//   ]

const array = Array.from(map);
// console.log(array);
// [
//     [ 'name', 'Al' ],
//     [ 'age', 24 ],
//     [ 'newField', 33 ],
//     [ { one: 1, two: 2, three: 3 }, 'Value of object' ]
//   ]

const mapObj = Object.fromEntries(map.entries());
// console.log(mapObj);
// {
//     name: 'Al',
//     age: 24,
//     newField: 33,
//     '[object Object]': 'Value of object'
// }

// =============

const users = [{ name: 'Al' }, { name: 'Ron' }, { name: 'Max' }];

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60));

function lastVisit(user) {
  return visits.get(user);
}

console.log(lastVisit(users[1])); // 2021-08-06T13:25:15.627Z
console.log(lastVisit(users[2])); // 2021-08-06T13:29:15.627Z
console.log(lastVisit(users[0])); // 2021-08-06T13:24:15.627Z
