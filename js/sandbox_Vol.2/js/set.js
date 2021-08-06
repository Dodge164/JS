const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6]);
// console.log(set); // Set(6) { 1, 2, 3, 4, 5, 6 }
set.add(10).add(20).add(30).add(20);
// console.log(set); // Set(9) { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// console.log(set.has(30)); // true
// console.log(set.has(42)); // false
// console.log(set.size); // 9
// console.log(set.delete(3));
// console.log(set.size); // 8
// console.log(set.clear());
// console.log(set.size); // 0

// console.log(set.values()); // [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// console.log(set.keys()); // [Set Iterator] { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
// console.log(set.entries());
// [Set Entries] {
//     [ 1, 1 ],
//     [ 2, 2 ],
//     [ 3, 3 ],
//     [ 4, 4 ],
//     [ 5, 5 ],
//     [ 6, 6 ],
//     [ 10, 10 ],
//     [ 20, 20 ],
//     [ 30, 30 ]
//   }

for (let key of set) {
  console.log(key);
  // 1
  // 2
  // 3
  // 4
  // 5
  // 6
  // 10
  // 20
  // 30
}

//=================
function uniqueValues(array) {
  return [...new Set(array)];
}
console.log(uniqueValues([1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6]));
// [ 1, 2, 3, 4, 5, 6 ]

function uniqueValues(array) {
  return Array.from(new Set(array));
}
console.log(uniqueValues([1, 1, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6]));
// [ 1, 2, 3, 4, 5, 6 ]
