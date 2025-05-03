"use strict";

const allP = document.querySelectorAll('p');

allP.forEach((element, index) => {
    element.style.color = 'white';
    element.style.padding = '15px';

    if(index === 0) {
        element.style.backgroundColor = 'blue'
    }
    if(index === 1) {
        element.style.backgroundColor = 'red'
    }
})