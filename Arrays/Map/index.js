const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosDobrados = numeros.map(num => num * 2);
// console.log(numerosDobrados);

const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47}
];

//retorna somente a string do nome da pessoa
const nomes = pessoas.map(pessoa => pessoa.nome);
console.log(nomes);

//remova apenas a chave nome das pessoas
// const objetoSoComIdade = pessoas.map(pessoa => {
//     delete pessoa.nome
//     return pessoa;    
// });
// console.log(objetoSoComIdade);

//adicione uma chave id
const objetoComIds = pessoas.map((pessoa, indice) => {
    const newObject = {...pessoa};
    newObject.id = indice;
    return newObject;
})
console.log(pessoas);
console.log(objetoComIds);
