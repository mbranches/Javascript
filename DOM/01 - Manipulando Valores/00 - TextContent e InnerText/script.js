"use strict";
/**
 * textcontent -> retorna text com identação
 * 
 * innerText -> retorna somente o texto, sem identação
 **/

const p = document.querySelector('p');

console.log(p.textContent)
console.log(p.innerText)

//em nenhum consegue adicionar html
p.textContent = "<strong>Marcus Branches</strong>" 
p.innerText = "<strong>Marcus Branches</strong>"