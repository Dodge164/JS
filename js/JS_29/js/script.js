"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  hearts = document.querySelectorAll(".heart"),
  oneHeart = document.querySelector(".heart"),
  wrapper = document.querySelector(".wrapper");

box.style.backgroundColor = "blue";
box.style.width = "500px";

btns[1].style.borderRadius = "100%";
circles[2].style.backgroundColor = "red";

box.style.cssText = "background-color: green; width: 500px";

for (let i = 0; i < hearts.length; i++) {
  hearts[i].style.backgroundColor = "yellow";
}

hearts.forEach((item) => {
  item.style.backgroundColor = "purple";
});

const div = document.createElement("div");
//const div2 = document.createElement('div');
const text = document.createTextNode("I was here");

div.classList.add("black");
// div2.classList.add('yellow');

//document.body.append(div);

wrapper.prepend(div); //up
setTimeout(() => {
  wrapper.append(div);
}, 10000);
//wrapper.append(div2); //down

hearts[0].before(div);
hearts[0].after(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Get off</h1>";

//div.textContent = "boring";
div.insertAdjacentHTML("afterend", "<h2>Hell</h2>");
