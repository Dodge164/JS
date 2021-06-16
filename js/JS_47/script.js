"use strict";
/* Принципы ООП:
1) Абстракция
2) Наследование


1) Абстракция
// Строки 13-22 - концепция объектно-ориентированного программирования
// Строки 24-25 - экземпляры, на основе концепции
*/
// создаем класс

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Создаем метод
  calcArea() {
    return this.height * this.width; // один метод
  }
}

const square = new Rectangle(10, 10); // разные свойства
const long = new Rectangle(20, 100); // разные свойства

console.log(square.calcArea());
console.log(long.calcArea());

// используем разные свойства, но один и тот же метод

/*
2) Наследование
*/
// Пример наследования
class ColoredRectangleWidthText extends Rectangle {
  // наследуем строки 4-8???
  constructor(height, width, text, bgColor) {
    // еще одно наследование (строки 5-7)
    super(height, width);
    this.text = text;
    this.bgColor = bgColor;
  }
  // создаем метод
  showMyProperties() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWidthText(25, 10, "New object", "green");
div.showMyProperties();
console.log(div.calcArea());
