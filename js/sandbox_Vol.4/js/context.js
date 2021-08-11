/* контекст определяет КАК функция была вызвана.
    Ключевое слово при этом this + call apply bind */

const person = {
  surname: 'Snape',
  bloodStatus: function (blood, name) {
    console.log(`Your blood is ${blood}, ${name} ${this.surname}`); // Your blood is pure, Severus Snape
  },
};

const hermione = { surname: 'Granger' };

person.bloodStatus('pure', 'Severus');
person.bloodStatus.call(hermione, 'mud', 'Hermione');
person.bloodStatus.apply(hermione, ['mud', 'Hermione']);
person.bloodStatus.call(hermione, ...['mud', 'Hermione']);

person.bloodStatus.bind(hermione, 'mud', 'Hermione')();
// или
const bound = person.bloodStatus.bind(hermione, 'mud', 'Hermione');
bound();

// ================ Работа с классами ================ //
// ES5
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log('this', this); // Person { name: 'Al', age: 17 }
}
const al = new Person('Al', 17);

// ========== Явная передача контекста =========== //
// ==========          explicit        =========== //

function logThis() {
    console.log(this); // {num: 17} 3 раза
}

const obj = {num = 17}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)()

// ========== НЕ явная передача контекста =========== //
// ==========           implicit          =========== //

const animal = {
    legs: 4,
    logThis: function() {
        console.log(this); // { legs: 4, logThis: [Function: logThis] }
    } 
}
animal.logThis()

// ========== Работа функций с контекстом =========== //
//    при этом ф-я не создает собственный контекст    //

function Cat(color) {
    this.color = color
    console.log('This', this); // This Cat { color: 'red' }
    ( () => console.log('Arrow this', this)) () // Arrow this Cat { color: 'red' }
}

new Cat('red')