// функция проверки палиндрома =======================================
function isPalindrome(someText) {
  return someText.split('').reverse().join('') === someText;
}

console.log(isPalindrome('test'));
console.log(isPalindrome('step on no pets'));

// функция поиска самого короткого слова =============================
// мое решение
function findShort(string) {
  for (let i = 0; i < string.split(' ').length; i++) {
    if (
      string.split(' ')[i].length < string.split(' ')[0].length ||
      string.split(' ')[0]
    )
      return string.split(' ')[i];
  }
}
console.log(findShort('The smallest word in sentence'));
console.log(findShort('Just test string'));

// решение автора
// base
function findShort(string) {
  let wordsArr = string.split(' ');
  let sortedWordsArr = wordsArr.sort(function (a, b) {
    return a.length - b.length;
  });
  return sortedWordsArr[0];
}
// advanced
function findShort(string) {
  return string.split(' ').sort(function (a, b) {
    return a.length - b.length;
  })[0];
}
// ES6
const findShort = (string) =>
  string.split(' ').sort((a, b) => a.length - b.length)[0];

console.log(findShort('The smallest word in sentence'));
console.log(findShort('Just test string'));

// Функция создания инициалов =======================================
function toInitials(string) {
  return string
    .split(' ')
    .map((w) => `${w.substring(0, 1).toUpperCase()}.`)
    .join('');
}

console.log(toInitials('Bill Gates'));
console.log(toInitials('elon mask'));

// Функция суммирования всех цифр числа =============================

function sumDigit(num) {
  return Math.abs(num)
    .toString()
    .split('')
    .reduce(function (sum, curr) {
      return +sum + +curr;
    }, 0);
}

console.log(sumDigit(99)); // 18
console.log(sumDigit(-32)); // 5

// Функция поиска min & max значений в массиве =======================
const minMax = (array) => console.log([Math.min(...array), Math.max(...array)]);

minMax([2, 9, 10, 25, 47, 4, 1]); // [7, 47]
minMax([2, 1]); // [1, 2]
minMax([1]); // [1]

// Функция создания набора дубликатов символов строки ================
const accum = (str) =>
  str
    .toUpperCase()
    .split('')
    .map((letter, i) => `${letter}${letter.repeat(i).toLowerCase()}`)
    .join('-');

console.log(accum('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(accum('cwAt'));

// Функция возврата индексов заглавных букв строки ================

const capitals = (str) =>
  //                   accumulator
  //                          currentValue
  //                                      index
  str.split('').reduce((result, letter, index) => {
    if (letter === letter.toUpperCase()) {
      result.push(index);
    }
    return result;
  }, []);

console.log(capitals('CodEWaRs')); // [0, 3, 4, 6]
console.log(capitals('justForTest')); // [4, 7]
/* почему push добавляет несколько раз, если явно не указан цикл? */

// Функция вывода чисел от 1 до n (n - передаваемый аргумент) ================

const fooBar = (num) => {
  for (let n = 1; n <= num; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
      console.log('foobar');
    } else if (n % 3 === 0) {
      console.log('foo');
    } else if (n % 5 === 0) {
      console.log('bar');
    } else {
      console.log(n);
    }
  }
};

fooBar(15); // 1, 2, 'foo', 4, 'bar', 'foo', 7, 8, 'foo', 'bar', 11, 'foo', 13, 14, 'foobar'

// Функция возврата уникальных значений из нескольких массивов ================

function uniteUnique(...arr) {
  return [...new Set([...arr].flat())];
}
console.log(uniteUnique([1, 2, 3], [4, 1, 5], [6, 7, 8, 5]));
console.log(uniteUnique([1], [2], [3, 2, 2], [4, 1, 1, 2]));
