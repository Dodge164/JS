"use strict";

let num = 20;   

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
  console.log(num);                    // Снаружи не доступна эта переменная
}

showFirstMessage("Fuck off!");
console.log(num);

function calc(a, b) {
    return (a + b);
    }

    console.log(calc(4, 3));
    console.log(calc(5, 6));
    console.log(calc(4, 11));
    console.log(calc(4, 13));

function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Get off!');
};

logger();


const calcu = (a, b) => a + b;
console.log(calcu(10, -15));






















console.log();