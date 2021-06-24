'use strict';
const person = {
  name: 'Alexey',
  age: 37,

  // покажет текущий возраст
  get userAge() {
    return this.age;
  },

  // перезапишет возраст
  set userAge(num) {
    this.age = num;
  },
};

console.log((person.userAge = 33));
