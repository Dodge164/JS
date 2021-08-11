/* 
Всего существует два типа данных
1 примитивные:                  2 не примитивные: 
                symbol,                           object
                number,
                string,
                boolean,
                undefined,
                null

По умолчанию к False относятся: 
                                ''
                                false
                                0
                                null
                                undefined
                                NaN


console.log(Boolean(''));           // false
console.log(Boolean(false));        // false
console.log(Boolean(0));            // false
console.log(Boolean(null));         // false
console.log(Boolean(undefined));    // false
console.log(Boolean(NaN));          // false
console.log(Boolean(' '));          // true
console.log(Boolean('false'));      // true
console.log(Boolean('0'));          // true
console.log(Boolean([]));           // true
console.log(Boolean({}));           // true
console.log(Boolean(function () {}));  // true

// строки vs числа
Смешанная запись сложения со строками и числами чаще всего приводится к строковому типу данных. 
console.log(1 + '2');         // string 12
console.log('' + 1 + 0  );    // string 10
console.log('' - 1 + 0 );     // number -1
console.log('3' * 5  );       // number 15
console.log(7 + 13 + 'px');   // both 20px
console.log('px' + 7 + 13);   // string px713
console.log('64' - 40 );      // number 24
console.log('64px' - 40 );    // NaN
console.log(null + 2 );       // number 2
console.log( undefined + 24); // NaN

// == vs ===
==  - не приводит к типу, поэтому сравнивает только по значению
=== - приводит к типу, поэтому сравнивает и по типу и по  значению
*/
console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); //true
console.log(undefined === null); // false
console.log(0 == false); // true
console.log('0' == false); // true
console.log(0 === false); // false
console.log('0' === false); // false
console.log('0' == 0); // true
console.log('0' === 0); // false

console.log(false == ''); // true // 0=0
console.log(false == []); // true   ? массив к пустой строке? 0=0
console.log(false == {}); // false  ? объект всегда ссылочный, а ссылка это уже кое-что
console.log('' == 0); // true
console.log('' == []); // true массив к пустой строке
console.log('' == {}); //false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
console.log(0 == undefined); // false
