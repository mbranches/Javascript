const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//soma de todos os numeros

const total = numeros.reduce((acumulador, num) => {
    acumulador += num;

    return acumulador;
}, 0);
console.log(total);


const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "Maria", idade: 23},
    {nome: "Eduardo", idade: 55},
    {nome: "Leticia", idade: 19},
    {nome: "Rosana", idade: 32},
    {nome: "Wallace", idade: 47}
];

//prática não indicada!!
//ache o mais velho]
const maisVelho = pessoas.reduce(
    (acumulador, pessoa) => {
        if(acumulador.idade > pessoa.idade) return acumulador

        return pessoa;
    }
);

console.log(maisVelho);