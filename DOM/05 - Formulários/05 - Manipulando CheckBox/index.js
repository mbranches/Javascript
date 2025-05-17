"use strict";

const form = document.forms.namedItem('select-checkbox');
const divSubmit = document.querySelector(".submit");
const divChange = document.querySelector(".change");



let checkedItems = [];
form.addEventListener('submit', event => {
    event.preventDefault();

    divSubmit.innerHTML = checkedItems;
});

form.checkbox.forEach(element => {
    element.addEventListener('change', (event) => {
        addCheckeds(event, element);

        divChange.innerHTML = checkedItems;
    });
});

const addCheckeds = (event, element) => {
    const { target } = event;
    const valueCheckbox = element.value;


    if(target.checked && !checkedItems.includes(valueCheckbox)) {
        checkedItems.push(valueCheckbox);
    }

    if(!target.checked && checkedItems.includes(valueCheckbox)) {
        checkedItems.splice(checkedItems.indexOf(valueCheckbox), 1);
    }
};