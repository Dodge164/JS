"use strict";
/*
const arr = [1, 2, 3, 6, 8];

arr.pop(); // delete the latest element of arr [1, 2, 3, 6];

arr.push(10); // add the latest element of arr; [1, 2, 3, 6, 10];

for (let i = 0; i < arr.length; i++) { // show all the elements of arr
    console.log(arr[i]);
}


for (let value of arr) { //show all the elements of arr (do not work with object)
    console.log(value); // can use break & continue
}

console.log(arr.length);
console.log(arr);

const arr = [1, 2, 3, 6, 8];
arr[99] = 0;
console.log(arr.length);


const arr = [1, 2, 3, 6, 8];
arr.forEach(function(item, i, arr) { // can't use break & continue
    console.log(`${i}: ${item} inside arr ${arr}`)
});



const str = prompt("", "");       // composes arr by string value
const products = str.split(", "); // selects elements of string dashed by semicolon to compose elements of array 
products.sort(); // by alpfabetical order
console.log(products.join('; ')); //composes string based on selected elements (str 34 VS)
*/

const arr = [1, 2, 13, 26, 8];  // sort by increase order
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {    // does not work without this function
    return a - b;
}






