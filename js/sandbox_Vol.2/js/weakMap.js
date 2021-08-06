let obj = { name: 'weakMap' };

// const arr = [obj]
// obj = null
// console.log(arr[0]); // { name: 'weakMap' } тк даже после удаления находится в памяти

const map = new WeakMap([[obj, 'obj data']]);
// get set delete has
console.log(map.has(obj)); // true
console.log(map.get(obj)); // obj data

obj = null;
console.log(map.get(obj)); // undefined
console.log(map.has(obj)); // false
console.log(map); // WeakMap { <items unknown> }

// ==============

const cache = new WeakMap();
function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}
let al = { name: 'Al' };
let max = { name: 'Max' };

cacheUser(al);
cacheUser(max);

console.log(cache.has(al)); // true
console.log(cache.has(max)); // true

max = null;
console.log(cache.has(al)); // true
console.log(cache.has(max)); // false
