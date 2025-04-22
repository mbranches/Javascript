const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//retorna os numeros maior que 10

// let maioresQueDez = numeros.filter(num => num > 10);
// console.log(maioresQueDez);

const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47}
];

//retorna todas as pessoas que tem o nome com 5 letras ou mais;
// let pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.length >= 5);
// console.log(pessoasFiltradas);

//pessoas com mais de 50 anos
// let pessoasFiltradas = pessoas.filter(pessoa => pessoa.idade > 50);
// console.log(pessoasFiltradas);

//pessoas com nomes que terminam com a
let pessoasFiltradas = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith("a"));
console.log(pessoasFiltradas);