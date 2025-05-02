fetch('pessoas.json')
    .then(dados => {
        return dados.json();
    })
    .then(json => carregaElementos(json));

function carregaElementos(json) {
    const table = document.createElement('table');
    table.classList.add('table-pessoas');

    const thead = document.createElement('thead');
    const trHead = document.createElement('tr');
    const th1 = document.createElement('th');
    th1.innerHTML = "Nome";
    trHead.appendChild(th1);

    const th2 = document.createElement('th');
    th2.innerHTML = "Idade";
    trHead.appendChild(th2);

    const th3 = document.createElement('th');
    th3.innerHTML = "CPF";
    trHead.appendChild(th3);

    const th4 = document.createElement('th');
    th4.innerHTML = "E-mail";
    trHead.appendChild(th4);
    
    thead.appendChild(trHead);
    table.appendChild(thead);

   const tbody = document.createElement('tbody');
    for(let pessoa of json) {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.innerHTML = pessoa.nome;
        tr.appendChild(tdNome);
        
        const tdIdade = document.createElement('td');
        tdIdade.innerHTML = pessoa.idade;
        tr.appendChild(tdIdade);
        
        const tdCPF = document.createElement('td');
        tdCPF.innerHTML = pessoa.cpf;
        tr.appendChild(tdCPF);
        
        const tdEmail = document.createElement('td');
        tdEmail.innerHTML = pessoa.email;
        tr.appendChild(tdEmail);

        tbody.appendChild(tr);
    };

    table.appendChild(tbody)

    const divResultado = document.querySelector('.resultado');

    divResultado.appendChild(table);
}