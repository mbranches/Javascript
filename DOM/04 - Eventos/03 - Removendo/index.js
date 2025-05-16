"use strict";

const btn = document.querySelector("button");

const acionarAlert = () => {
    btn.removeEventListener("click", acionarAlert);
    alert(123);
};

btn.addEventListener("click", acionarAlert);
btn.addEventListener("click", () => {
    document.querySelector("body").style.background = 'red';
});