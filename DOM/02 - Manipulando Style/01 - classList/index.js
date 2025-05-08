"use strict";

const h1 = document.querySelector("h1");
h1.classList.add("active", "teste1");
h1.classList.add("teste2");
h1.classList.remove("teste1");
h1.classList.toggle("teste1"); //adiciona se ainda não tiver sido adicionado
console.log(h1);