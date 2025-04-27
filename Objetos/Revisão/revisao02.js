//factory functions
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }

// const p1 = criaPessoa("Luiz", "Otávio");
// console.log(p1.nomeCompleto());

//constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freeze(this); // -> serve para os valores passados ao instânciar pessoa não sejam mais alteraveis

    // return this;
};

const jair = new Pessoa("Jair", "Ventura");

console.log(jair)