"use strict";

//console.log(document.head); // первый способ получить тело документа
//console.log(document.documentElement); //второй способ полусить тело документа
//console.log(document.body.childNodes); // выводит все узлы внутри документа
//console.log(document.body.firstChild); //показывает первый элемент документа
//console.log(document.body.firstElementChild);//показывает первый элемент документа
//console.log(document.body.lastChild); //показывает второй элемент документа
//console.log(document.body.lastElementChild);//показывает первый элемент документа

// console.log(document.querySelector("#current").parentNode); //
// //найдет элемент с id куррент и покажет его родителя - Див с классом first

// console.log(document.querySelector("#current").parentNode.parentNode); //
// //найдет родителя на два уровня выше от элемента с айди

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(
//   document.querySelector('[data-current="3"]').previousElementSibling
// );
// console.log(document.querySelector("#current").parentElement);
// console.log(document.body.firstElementChild);

// перебор псевдоколлекций
for (let node of document.body.childNodes) {
  if (node.nodeName == "#text") {
    continue; // позволяет пропустить все текстовые узлы (переносы строк)
  }
  console.log(node);
}
