// instance class
// экземпляр класса

function Cat(color, name) {
  this.color = color;
  this.name = name;
}

// с помощью new
const cat = new Cat('red', 'Wiskey');
console.log(cat); // Cat { color: 'red', name: 'Wiskey' }

// альтернативный вариант

function myNew(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  return constructor.apply(obj, args) || obj;
}

const catt = myNew(Cat, 'white', 'Lilu');
console.log(catt); // Cat { color: 'white', name: 'Lilu' }
