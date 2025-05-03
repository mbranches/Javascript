"use strict";

const p = document.getElementsByClassName('paragrafo'); //retorna um html collection

const pNodeList = document.querySelectorAll('.paragrafo'); //retorna um html collection


// diferença entre nodeList e HTML Collection: nodeList é  uma lista estática, ja html collection é ao vivo, ou seja todas as alterações refletem na msm na hora. Exemplo:

let span = document.createElement('span');
span.classList.add('paragrafo');
span.innerHTML = 'novo';
document.body.appendChild(span);

console.log(p)
console.log(pNodeList);
