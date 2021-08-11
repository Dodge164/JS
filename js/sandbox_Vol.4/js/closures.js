// Замыкания
/* когда функция имеет доступ к элементам из вышестоящего scope */

function addDomain(domain) {
  const concatenation = 'adme' + domain;
  return function () {
    console.log(concatenation);
  };
}

const admeWithCom = addDomain('.com');
const admeWithNet = addDomain('.net');

admeWithCom();
admeWithNet();

// ===========
function createAnIceCream(ager) {
  const topping = ['nuts', 'chocolate'];
  return {
    showTopping: function (some) {
      console.log(some + ager);
      console.log('1', topping);
      // 1 nuts chocolate
      // 1 nuts chocolate fruits
    },
    add: function (desert) {
      topping.push(desert);
      console.log('1', topping);
      console.log(desert); // fruits
    },
  };
}

const seller = createAnIceCream(36);
console.log(seller); // { showTopping: [Function: showTopping], add: [Function: add] }
seller.showTopping(); // если закомментить пропадет cg  // 1 [ 'nuts', 'chocolate' ]
seller.add('fruits');

seller.showTopping(); // если закомментить пропадет cg  // 1 [ 'nuts', 'chocolate', 'fruits' ]
seller.showTopping(2);
seller.showTopping(3);
seller.showTopping(5);

/// ============
// setTimeout
/* если нельзя использовать ES6, то придется замыкать функцию*/
const fib = [1, 2, 3, 5, 8, 13];
for (var i = 0; i < fib.length; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(`fib[${n}] = ${fib[n]}`);
    }, 1500);
  })(i);
}
/* использование let предотвращает танцы с бубном */
const fib = [1, 2, 3, 5, 8, 13];
for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 1500);
}
