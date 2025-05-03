"use strict";

const input = document.querySelector('#name');

console.log(input.value);

setTimeout(() => {
    input.value = "novo valor";
}, 1000)