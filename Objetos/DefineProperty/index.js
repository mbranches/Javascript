// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperties(this, {
        'nome': {
            enumerable: true, //mostra a chave
            value: nome, //valor
            writable: true, //não pode alterar o valor
            configurable: true //configuravel
        },
        'preco': {
            enumerable: true, //mostra a chave
            value: preco, //valor
            writable: true, //não pode alterar o valor
            configurable: true //configuravel
        }
    })

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, //valor
        writable: false, //não pode alterar o valor
        configurable: true //configuravel
    });
};

const p1 = new Produto("Camiseta", 20.00, 50);
console.log(p1)