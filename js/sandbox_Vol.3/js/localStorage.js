const myNumber = 64;

localStorage.removeItem('number');
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber.toString());
console.log(localStorage.getItem('number'));
localStorage.clear();

const obj = {
  name: 'Al',
  age: 17,
};
localStorage.setItem('person', JSON.stringify(obj));
// localStorage всегда принимает только строку, поэтому, чтобы объект
// превратить в строковый формат всегда используем JSON.stringify()

// Чтобы получить назад объект, а не строку, чтобы можно было  работать с ключами и данными, используем JSON.parse()
const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Severus';

console.log(person); // {name: 'Severus', age: 17}

// =================
// при работе с разными вкладками
/* при этом событие происходит на одной странице, а результат показан на другой */
// 1 вид записи
window.addEventListener('storage', (event) => {
  console.log(event);
});
// 2 вид записи
window.onstorage = () => {};
