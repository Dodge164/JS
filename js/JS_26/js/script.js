"use strict";

// to string
//1 через String

console.log(typeof(String(null)));
console.log(typeof(String(4)));
 

//2 конкатенация
console.log(typeof(null + ''));

const num = 5;

console.log("https://vc.com/catalog/" + num); // - интерполяция?

const fontSixe = 26 + 'px';

// To number

//1
console.log(typeof(Number('4')));
//2
console.log(typeof(+'4'));
//3
console.log(typeof(parseInt("15px", 10)));
//4
let answer = +prompt('Boring', '');


//To boolean

// 0, '', null, undefined, Nan  ---  always FALSE

//1
let switcher = null;

if (switcher) {
    console.log('Working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

//2
console.log(typeof(Boolean('4')));

//3
console.log(typeof(!!"4444"));




