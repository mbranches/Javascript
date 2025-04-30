class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(msg) {
        console.log(`${msg}`);
    }

    comer() {
        console.log(`${this.nome} está comendo`);
    }

    //os métodos ja estão no prototype
}

//comparando com função construtora

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}
Pessoa2.prototype.falar = function falar(msg) {
    console.log(msg);
}

const p1 = new Pessoa("Marcus", "Vinicius");
console.log(p1)
p1.falar("qualquer coisa");
p1.comer();

const p2 = new Pessoa2("Marcus", "Vinicius")
console.log(p2);
p2.falar();