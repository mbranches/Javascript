"use strict";

const form = document.forms.namedItem("registration");

form.addEventListener('input', (event) => {
    event.preventDefault();

    const nome = form.nome.value;
    
    const newDivElement = document.createElement('div');

    newDivElement.innerText = nome;

    form.nextElementSibling.remove();

    form.after(newDivElement);
})