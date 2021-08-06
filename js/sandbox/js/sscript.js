'use strict';
/*
// 1) prototype
const person = new Object({
  name: 'Maxim',
  age: 30,
  greet: function () {},
});

// добавляем новый ?метод? в поле __proto__
// этот ?метод? будет виден даже child-ам
Object.prototype.sayHello = function () {
  console.log('Hi!');
};

const olga = Object.create(person);
// если обратиться к olga.name получим Maxim,
// но можем задать собственное имя и тогда получим Oligash
olga.name = 'Oligash';

// дaже str будет иметь функцию sayHello
// которую можно вызвать с помощью str.sayHello()
const str = new String('I am a string');



// 2) this
function hello() {
  // покажет глобальный объект window
  console.log('hi', this);
}

const person = {
  name: 'Max',
  age: 29,
  sayHello: hello, // покажет person
  sayHelloWindow: hello.bind(window), // покажет window
  // второй вариант записи
  // sayHelloWindow: hello.bind(this) // покажет window
  // sayHelloWindow: hello.bind(document) // покажет DOM дерево
  // если создать функцию внутри объекта, то контекст уже будет браться от объекта person
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    // this. делает запись универсальной, но можно и person.name
    console.log(`A name is ${this.name}`); // A name is Max
    console.log(`An age is ${this.age}`); // An age is 29
    console.log(`A job is ${job}`); //
    console.log(`A phone is ${phone}`); //
    console.groupEnd();
  },
};

const olga = {
  name: 'Oligash',
  age: 23,
};
// bind(olga) указывает, что необходимо ?передать? в
// функцию logInfo у person, значение olga.name
// 1 способ записи
const fnOlgaInfoLog = person.logInfo.bind(olga);
fnOlgaInfoLog('Frontend', '8-999-123-45-67');
// 2 способ записи
const fnOlgaInfoLog = person.logInfo.bind(olga, 'Frontend', '8-999-123-45-67');
fnOlgaInfoLog();
// 3 способ записи
const fnOlgaInfoLog = person.logInfo.bind(
  olga,
  'Frontend',
  '8-999-123-45-67'
)();
// 4 способ записи
const fnOlgaInfoLog = person.logInfo.call(olga, 'Frontend', '8-999-123-45-67'); // call сразу вызывает функцию
// 5 способ записи
const fnOlgaInfoLog = person.logInfo.apply(olga, [
  'Frontend',
  '8-999-123-45-67',
]); // второй параметр всегда массив

// A name is Oligash
// An age is 23
// A job is Frontend
// A phone is 8-999 ...

// -----------------------------------
// Пример без прототипа
const array = [1, 2, 3, 4, 5];

function multBy(arr, n) {
  return arr.map(function (i) {
    return i * n;
  });
}
console.log(multBy(array, 15));

// Пример с прототипами
const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};
console.log(array.multBy(15));
*/

// 3) замыкание функции
// ---
// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }
// const calc = createCalcFunction(42);
// calc(); //42000
// ---
// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10)); // 11
// console.log(addOne(41)); // 42

// console.log(addTen(10)); // 20
// console.log(addTen(41)); // 51
// ---
// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(comUrl('google'));
// console.log(comUrl('netflix'));

// console.log(ruUrl('yandex'));
// console.log(ruUrl('mail'));
/// --- Домашка ---
/* написать свою функцию bind
Пример работы:

// context - контекст, который необходимо привязать personOne
function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}
function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const personOne = { name: 'Max', age: 24, job: 'Frontend' };
const personTwo = { name: 'Olga', age: 29, job: 'Professor' };

bind(personOne, logPerson)();
bind(personTwo, logPerson)();


// 4) event loop

console.log('Start');
console.log('Start 2');

function timeout2sec() {
  console.log('timeout 2 sec');
}

window.setTimeout(function () {
  console.log('Inside timeout, after 2000 ms');
}, 5000);

setTimeout(timeout2sec, 2000);

console.log('End');


// 5) Promises
// без промисов
console.log('Request data...');
setTimeout(() => {
  console.log('Preparing data...');

  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working',
  };

  setTimeout(() => {
    backendData.modified = true;
    console.log('Data received', backendData);
  }, 2000);
}, 2000);
// с промисами
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
    port: 2000,
    status: 'working',
    }
    resolve(backendData)
  }, 2000)
})

p.then(data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true
      resolve(data)
    }, 2000)
  })
})
.then(clientData => {
  clientData.fromPromise = true
  return clientData
})
.then(data => {
  console.log('Modified', data);
})
.catch(err => console.log('Error: ', err));
.finally(()=>console.log('Finally'));

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(()=> resolve(), ms)
  })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all((sleep(2000), sleep(5000))).then(() => {
  console.log('All promises');
})
Promise.race((sleep(2000), sleep(5000))).then(() => {
  console.log('Race promises');
})


// 6) Getter & setter

const person = Object.create(
  {
    calculateAge() {
      console.log('Age:', new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: 'Max',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1990,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        return new Date().fetFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = 'red';
        console.log('Set age', value);
      },
    },
  }
);
person.name = 'Alex';

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
  }
}

// 7) ES 6

class Animal {
  static type = 'ANIMAL';

  constructor(options) {
    (this.name = options.name),
      (this.age = options.age),
      (this.hasTail = options.hasTail);
  }
  voice() {
    console.log('I am an animal');
  }
}

// const animal = new Animal({
//   name: 'Animal',
//   age: 5,
//   hasTail: true
// })

class Cat extends Animal {
  static type = 'CAT';

  constructor(options) {
    super(options);
    this.color = options.color;
  }
  voice() {
    super.voice();
    console.log(' I am a cat');
  }
  get ageInfo() {
    return this.age * 7;
  }
  set ageInfo(newAge) {
    this.age = newAge;
  }
}

const cat = new Cat({
  name: 'Cat',
  age: 7,
  hasTail: true,
  color: 'white',
});

// Part 2
class Component {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }
  hide() {
    this.$el.style.display = 'none';
  }
  show() {
    this.$el.style.display = 'block';
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$el.style.width = this.$el.style.height = options.size + 'px';
    this.$el.style.background = options.color;
  }
}

const box1 = new Box({
  selector: ' #box1',
  size: 100,
  color: 'red',
});

const box2 = new Box({
  selector: '#box2',
  size: 120,
  color: 'blue',
});
class Circle extends Box {
  constructor(options) {
    super(options);
    this.$el.style.borderRadius = '50%';
  }
}
const с = new Circle({
  selector: '#circle',
  size: 90,
  color: 'green',
});


// 8) Async Await

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};
const url = 'https"//jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//   console.log('Fetch todo started...');
//   return delay(2000)
//   .then(()=> fetch(url))
//   .then(response => response.json())
// }

// fetchTodos()
// .then(data => {
//   console.log('Data: ', data);
// })
// .catch(e => console.error(e))

async function fetchAsyncTodos() {
  console.log('Fetch todo started...');
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data: ', data);
  } catch (e) {
    console.error(e);
  } finally {
  }
}

fetchAsyncTodos();


// 9) Proxy 1
// Object

const person = {
  name: 'Max',
  age: 25,
  job: 'Fullstack',
};

const op = new Proxy(person, {
  get(target, prop) {
    console.log(`Getting prop ${prop}`);
    if (!(prop in target)) {
      return prop
        .split('_')
        .map((p) => target[p])
        .join('_');
    }
    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target, prop) {
    return ['age', 'job'].includes(prop);
  },
  defineProperty(target, prop) {
    console.log('Deleting... ', prop);
    delete target[prop];
    return true;
  },
});

// Functions
const person = {
  name: 'Max',
  age: 25,
  job: 'Fullstack',
};

const log = (text, tx) => `Log: ${text} ${tx}`;

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('target', target);
    console.log('thisArg', thisArg);
    console.log('args', args);
    console.log('Calling fn ...');

    return target.apply(thisArg, args).toUpperCase();
  },
});
fp.call(person);

// Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct... ');
    return new Proxy(new target(...args), {
      get(targ, prop) {
        console.log(`Getting prop "${prop}"`);
        return targ[prop];
      },
    });
  },
});

const p = new PersonProxy('Ben', 30);


// 10) Proxy 2
// Wrapper
// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
);

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  });
};

const data = withHiddenProps({
  name: 'George',
  age: 25,
  _uid: '1231231',
});

// Optimization
const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};
    args.forEach((item) => (index[item.id] = item));

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case 'findById':
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexedArray([
  { id: 11, name: 'Fred', job: 'Fullstack', age: 25 },
  { id: 22, name: 'Eliza', job: 'Student', age: 22 },
  { id: 33, name: 'Victor', job: 'Backend', age: 23 },
  { id: 44, name: 'Olga', job: 'Teacher', age: 24 },
]);
*/

// 11) Генераторы Symbol iterator, for of
// a)
function* strGenerator() {
  yield 'D';
  yield 'e';
  yield 'n';
  yield 'i';
  yield 's';
  yield 'k';
  yield 'a';
}

const str = strGenerator();
// вызывать с помощью str.next()

// b)
function* numGenerator(n = 10) {
  for (let i = 0; i < 10; i++) {
    yield i;
  }
}
const num = numGenerator(7);

// с)
// имитация генератора
/*
const iterator = {
  // gen(n = 10) {
  [Symbol.iterator](n = 10) {
    let i = 0;
    return {
      next() {
        if (i < n) {
          return { value: ++i, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

// const itr = iterator.gen();

// for (let k of [1, 1, 2, 3, 5, 8, 13]) {
for (let k of iterator) {
  console.log(k);
}

// генератор
function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of iter(6)) {
  console.log(k);
}

// 12) Методы массивов (forEach, map, filter, reduce, find, findIndex)

const people = [
  { name: 'Al', age: 25, budget: 5000 },
  { name: 'Ben', age: 27, budget: 7000 },
  { name: 'Ron', age: 23, budget: 3000 },
  { name: 'George', age: 21, budget: 1000 },
  { name: 'Alex', age: 29, budget: 9000 },
  { name: 'Sev', age: 24, budget: 4000 },
];
// 1 способ
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// {name: "Al", age: 25, budget: 5000}
// {name: "Ben", age: 27, budget: 7000}
// {name: "Ron", age: 23, budget: 3000}
// {name: "George", age: 21, budget: 1000}
// {name: "Alex", age: 29, budget: 9000}
// {name: "Sev", age: 24, budget: 4000}

// 2 способ
for (let person of people) {
  console.log(person);
}
// {name: "Al", age: 25, budget: 5000}
// {name: "Ben", age: 27, budget: 7000}
// {name: "Ron", age: 23, budget: 3000}
// {name: "George", age: 21, budget: 1000}
// {name: "Alex", age: 29, budget: 9000}
// {name: "Sev", age: 24, budget: 4000}

// 3 способ ForEach
people.forEach((person) => console.log(person));
// {name: "Al", age: 25, budget: 5000}
// {name: "Ben", age: 27, budget: 7000}
// {name: "Ron", age: 23, budget: 3000}
// {name: "George", age: 21, budget: 1000}
// {name: "Alex", age: 29, budget: 9000}
// {name: "Sev", age: 24, budget: 4000}

// 4 способ map
const newPeople = people.map((person) => {
  // 4.1
  // return `${person.name} ${person.age}`;
  // 4.2)
  // return person;
  // 4.3)
  // return person.name;
  // 4.4)
  return person.age * 3;
});
console.log(newPeople);
// 4.1 ["Al 25", "Ben 27", "Ron 23", "George 21", "Alex 29", "Sev 24"]
// 4.2
// {name: "Al", age: 25, budget: 5000}
// {name: "Ben", age: 27, budget: 7000}
// {name: "Ron", age: 23, budget: 3000}
// {name: "George", age: 21, budget: 1000}
// {name: "Alex", age: 29, budget: 9000}
// {name: "Sev", age: 24, budget: 4000}
// 4.3
// ["Al", "Ben", "Ron", "George", "Alex", "Sev"]
// 4.4
// [75, 81, 69, 63, 87, 72]

// 5 способ Filter
const adults = people.filter((person) => person.age > 21);
console.log(adults);
// (5) [{…}, {…}, {…}, {…}, {…}]
// 0: {name: "Al", age: 25, budget: 5000}
// 1: {name: "Ben", age: 27, budget: 7000}
// 2: {name: "Ron", age: 23, budget: 3000}
// 3: {name: "Alex", age: 29, budget: 9000}
// 4: {name: "Sev", age: 24, budget: 4000}
// length: 5

// 6 метод reduce
const amount = people.reduce((total, person) => total + person.budget, 0);
console.log(amount); // 29000

// 7 метод Find
const alb = people.find((person) => person.name === 'Al');
console.log(alb); // {name: "Al", age: 25, budget: 5000}

// 8 метод FindIndex
const sevIndex = people.findIndex((person) => person.name === 'Sev');
console.log(sevIndex); // 5

//===============
const amountt = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: Math.sqrt(person.budget),
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log(amountt); // 312.4905637804813
*/
