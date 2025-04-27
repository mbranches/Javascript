function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => `${this.nome} ${this.sobrenome}` //toda instância cria essa função, portanto 1000 instancias de Pessoa === 1000 funções nomeCompleto
}
Pessoa.prototype.nomeCompleto = function() { 
    return `${this.nome} ${this.sobrenome}`
}; //agora todas as instancias irão utilizar o mesmo método

//p1.__proto__ === Pessoa.prototype
// o motor js primeiro tenta encontrar o método dentro do próprio objeto, posteriormente busca dentro de prototype 
//ordem: p1 --> Pessoa.prototype --> Object.prototype

const p1 = new Pessoa("Marcus", "Vinicius");
const p2 = new Pessoa("Luiz", "O.");
console.log(p1.nomeCompleto())
