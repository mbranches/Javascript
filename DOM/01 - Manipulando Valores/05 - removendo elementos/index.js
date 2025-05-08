"use strict";
const h1 = document.querySelector("h1");
h1.remove();

const allLi = document.querySelectorAll("li");
allLi[2].remove();
console.log(allLi);