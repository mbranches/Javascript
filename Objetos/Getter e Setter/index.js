// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        // value: estoque, //valor
        // writable: false, //não pode alterar o valor
        configurable: true, //configuravel
        get: function() {
            return estoque
        },
        set: function(valor) {
            estoque = valor;
        }
    });
};

const p1 = new Produto("Camiseta", 20.0, 121);

// console.log(p1);
// console.log(p1.estoque);

p1.estoque = 1231231;
// console.log(p1.estoque);

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.toUpperCase()
            nome = valor
        }
    };
}

const produto = criaProduto("Algum nome");
produto.nome = "camiseta";
console.log(produto.nome)
