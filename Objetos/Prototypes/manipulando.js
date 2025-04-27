const objA = {
    A: 'A'
};
const objB = {
    B: 'B'
};
const objC = new Object();
objC.C = 'C';


Object.setPrototypeOf(objB, objA); //-> seta o prototype de objA em objB
Object.setPrototypeOf(objC, objB);

// console.log(objB.A);
// console.log(objC.B, objC.A);
// console.log(Object.getPrototypeOf(objC));
// console.log(Object.getPrototypeOf(objB));
// console.log(Object.getPrototypeOf(objA));

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto("camiseta", 50.0);
// p1.desconto(100);
// p1.aumento(10);

// console.log(p1);

const p2 = {
    nome: "caneca",
    preco: 15.0
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(10);
console.log(p2)

const p3 = Object.create(Produto.prototype);
p3.nome = "Chaveiro"
p3.preco = 10;

p3.desconto(20);
console.log(p3)