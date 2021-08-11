const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first(); // first
second(); // second
third(); // third

first(); // first
setTimeout(second, 0); // third  <---
third(); // second <---
