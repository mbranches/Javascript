"use strict";

const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.clientX, event.clientY);
});

btn.addEventListener("click", () => {
    console.log("OLAAAAAAA");
});

const body = document.querySelector("body")
btn.addEventListener("click", () => {
    body.style.background = "red";
});


let x = 0;
btn.addEventListener("mouseover", () => {
    console.log(x++ )
    body.style.background = "blue";
}); 

btn.addEventListener("mouseleave", () => {
    body.style.background = "orange";
})