"use strict";

let str = "some";
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

// console.dir([1,2,3]);


const soldier = {
    health: 400,
    armor: 150,
    sayHello: function() {
        console.log("Get out of my way!");
    }
};
 const john = {
     health: 100,
};

Object.setPrototypeOf(john, soldier); // set prototype for john as soldier has

//john.__proto__ = soldier;
console.log(john.armor);
john.sayHello();

///////

const soldier = {
    health: 400,
    armor: 150,
    sayHello: function() {
        console.log("Get out of my way!");
    }
};

const john = Object.create(soldier); // shortest way to write prototype

john.sayHello();