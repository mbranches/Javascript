"use strict";   

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment();

const lanches = ["lanche1", "lanche2", "lanche3"]
lanches.forEach( element => {
    const li = document.createElement("li");
    li.innerText = element;

    fragment.append(li);
});
ul.appendChild(fragment);