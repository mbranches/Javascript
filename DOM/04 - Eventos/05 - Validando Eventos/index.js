"use strict";
const menu = document.querySelector(".menu");

//checa se menu não é null
menu?.addEventListener('click', (event) => {
    const { target } = event; 

    const body = document.querySelector("body");

    switch(target.getAttribute('class')) {
        case "home":
            console.log("apertado = home");
            body.style.background = "red";

            break;
        case "sobre":
            console.log("apertado = sobre");

            body.style.background = "blue";
            break;
        case "contato":
            console.log("apertado = contato");

            body.style.background = "pink";
            break;
    }
});