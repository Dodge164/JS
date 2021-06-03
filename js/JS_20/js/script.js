"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'balck',
        bg: 'red',
    },
    makeTest: function(){
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors; // Деструктуризация
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options["colors"]["border"]);


// let counter = 0;


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Feature ${i} has value ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Feature ${key} has value ${options[key]}`);
//     counter++;
// }
// }

// console.log(counter);


// console.log(Object.keys(options).length);

