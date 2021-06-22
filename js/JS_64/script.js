'use strict';

const checkbox = document.querySelector('#checkbox'),
  form = document.querySelector('form'),
  changeColor = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'green';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

changeColor.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'green';
  }
});
const person = {
  name: 'Ann',
  age: 25,
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('Ann', serializedPerson);
console.log(JSON.parse(localStorage.getItem('Ann')));
