"use strict";

const container = document.querySelector(".container");

console.log(container.children); //HTMLCollection
console.log(container.childNodes); //Node List

const children = Array.from(container.children);

children.forEach((el) => el.style.backgroundColor = 'red')