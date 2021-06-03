"use strict";

let a = 5,
    b = a;


b =  b + 5;


console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1,
};

const copy = obj; // send link to first object, not copied it. LINK!

copy.a = 10;


console.log(copy);
console.log(obj);

// compose real shallow copy of object

function copy2(mainObject) {   
    let objCopy = {};

    let key;
    for (key in mainObject) {
        objCopy[key] = mainObject[key];
    }
    return objCopy;
}

const numbers = {
    a: 2, 
    b: 5,
    c: {
        x: 7,
        y:4,
    }
};

const newNumbers = copy2(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // will change x value in both odjects (bcs it's a shallow copy)
console.log(newNumbers);
console.log(numbers);



// object assign
const numbers = {
    a: 2, 
    b: 5,
    c: {
        x: 7,
        y:4,
    }
};

const add = { // merge with first object, add + numbers
    d: 17, 
    e: 20,
};

console.log(Object.assign(numbers, add));


const clone = Object.assign({}, add); // can merge empty objects
clone.d = 20;
 console.log(add);
 console.log(clone);


 // copy array

 const oldArray = ['a', 'b', 'c'];
 const newArray = oldArray.slice();  //make not LINK but COPY oldArray


 newArray[1] = 'fsjdfhksjhfksjdhf';
 console.log(newArray);
 console.log(oldArray);


 // fourth way to make copy
 // spread

 const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

///////////////////
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

/////////////////////////
const array = ["a", "b"];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2,
};
 const newObj = {...q};

 console.log(newObj);


















