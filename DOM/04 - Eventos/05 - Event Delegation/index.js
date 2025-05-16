"use strict";

// const home = document.querySelector(".home");
// home.addEventListener("click", () => {
//     console.log("home");
// });

// const sobre = document.querySelector(".sobre");
// sobre.addEventListener("click", () => {
//     console.log("sobre");
// });

// const contato = document.querySelector(".contato");
// contato.addEventListener("click", () => {
//     console.log("contato");
// });

const menu = document.querySelector(".menu");
menu.addEventListener('click', (event) => {
    // const { target } = event; // mesma coisa que => const target = event.target;
    const { target } = event; 
    // console.log(target.innerText);

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