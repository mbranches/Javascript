const pessoa = {
    nome: "Joel",
    sobrenome: "Silva"
};

//formas de acessar
// console.log(pessoa.nome);
// console.log(pessoa['sobrenome']);

//acessando de maneira dinâmica
// const chave = 'sobrenome';

// console.log(pessoa[chave]);

//Inicializando objeto pelo construtor
const pessoa2 = new Object();
pessoa2.nome = 'Luiz';
pessoa2.sobrenome = 'Otávio';
pessoa2.idade = 32;
pessoa2.falarNome = function() {
    console.log(`nome: ${this.nome}`)
};
pessoa2.getDataNascimento = function() {
    const dataAtual = new Date();

    return dataAtual.getFullYear() - this.idade;
}

// delete pessoa2.nome;

console.log(pessoa2);

// pessoa2.falarNome();
// console.log(pessoa2.getDataNascimento())

for (let chave in pessoa2) {
    console.log(pessoa2[chave ]);
}