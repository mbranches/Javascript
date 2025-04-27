//copiar valor
const produto = {nome: "caneca", preco: 90.0};
// const outro = {
//     ...produto,
//     material: "algodão"
// };
const outro = Object.assign({}, produto, {material: "algodao"});

outro.nome = "Camiseta";
// console.log(produto);
// console.log(outro);

//pegar keys e values
// console.log(Object.keys(produto), Object.values(produto));
// console.log(Object.entries(produto))
for (const [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}

//pegar propriedades
Object.defineProperty(produto, 'nome', {
    writable: false,
    value: 1212122221,
    configurable: false
})
produto.nome = "dmfaslkfjanfjlanfjl"
delete produto.nome;
// console.log(produto.nome)
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); //retorna as propriedades dos atributos