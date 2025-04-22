const list = ["eduardo", "maria", "jose"];

// list[2] = "daniel";
// console.log(list)

// delete list[2];
// console.log(list)

//para receber os valores de uma lista
const novo = [...list];
// novo.pop();
// console.log(novo);
// console.log(list)

//deleta o ultimo item
// let deletado = novo.pop();
// console.log(deletado);

//deleta o primeiro
// console.log(novo)
// let deletado1 = novo.shift();
// console.log(deletado1);
// console.log(novo);

//adicionar ao final
// novo.push("ultimo item");
// console.log(novo);

//adiciona ao inicio
// novo.unshift("primeiro item")
// console.log(novo);

//final é exclusivo não inclusivo
// let novo2 = novo.slice(0, -1);
// console.log(novo2);

//string para array
// const nome = "Marcus Vinicius";
// const nomes = nome.split(" ");
// console.log(nomes);

//array para string
const nomes = [ 'Marcus', 'Vinicius' ];
const nome = nomes.join(", ");
console.log(nome);