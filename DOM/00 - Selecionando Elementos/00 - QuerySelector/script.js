"use strict";

const h1 = document.querySelector('h1'); // tag HTML

const classP = document.querySelector('.paragrafo');

const strongFilhoDeParagrafo = document.querySelector('.paragrafo strong');
strongFilhoDeParagrafo.style.background = 'red' ;

const idP = document.querySelector('#paragrafo');

let timer = 0;
const title = document.querySelector('title'); //título da página

setInterval(() => {
    title.innerText = timer++;
}, 1000)