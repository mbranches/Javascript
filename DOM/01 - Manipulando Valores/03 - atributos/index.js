const div = document.querySelector('div');
div.setAttribute('id', 'novoid');
div.setAttribute('class', 'novaclass');
div.setAttribute('class', 'background-color-red'); //sobrescreve

div.classList.add('novaclass');

console.log(div)
console.log(div.getAttribute("id"));

div.removeAttribute('id');