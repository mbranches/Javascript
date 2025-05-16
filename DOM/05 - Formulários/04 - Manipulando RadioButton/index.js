"use strict";

const form = document.forms.namedItem('select-radio');
const divSubmit = document.querySelector(".submit");
const divChange = document.querySelector(".change");

form.addEventListener('submit', event => {
    event.preventDefault();

    const radio = form.radio;
    console.log(radio.value);

    divSubmit.innerHTML = radio.value;

    // radio.forEach((elemnt) => {
    //     if (elemnt.checked) {
    //         console.log(elemnt)
    //     }
    // })


});

form.radio.forEach(element => {
    element.addEventListener('change', (event) => {
        const { target } = event;
        if(target.checked) divChange.innerHTML = target.value; 
    })
});