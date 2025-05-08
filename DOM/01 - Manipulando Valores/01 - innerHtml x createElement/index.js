/**
 * innerHtml -> retorna o texto com formatações e com elementos html
 * 
 * createElement -> cria um elemento html
 */


const div = document.querySelector('div');

// console.log(1, div);
// div.innerHTML += "<strong>Inner HTML</strong>";

const elementUl = document.createElement('ul');

[1, 2, 3].forEach(element => {
    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerText = element;
    li.appendChild(p);

    elementUl.appendChild(li);
});

div.appendChild(elementUl)
