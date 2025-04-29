function criaPessoa(nome, sobrenome) {
    const prototypePessoa = {
        falar() {
            console.log(`Olá ${this.nome}`);
        },
        comer() {
            console.log(`Comendo`);
        },
        beber() {
            console.log(`Bebendo`);
        }
    };
    return Object.create(prototypePessoa, {
        nome: {
            value: nome,
            enumerable: true 
        },
        sobrenome: { 
            value: sobrenome, 
            enumerable: true 
        }
    }); //método agora estão no prototype
}

const p1 = criaPessoa("Marcus", "Vinicius");
console.log(p1);
p1.falar();
p1.comer();
p1.beber();



//desacoplando:

const falar = {
    falar() {
        console.log(`Olá ${this.nome}`);
    }
};

const comer = {
    comer() {
        console.log(`Comendo`);
    }
};

const beber = {
    beber() {
        console.log(`Bebendo`);
    }
};

const prototypePessoa2 = {...falar, ...comer, ...beber}

function criaPessoa2(nome, sobrenome) {
    return Object.create(prototypePessoa2, {
        nome: {
            enumerable: true,
            value: nome
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome
        }
    })
}

const p2 = criaPessoa("Marcus", "Vinicius");
console.log(p2);
p2.falar();
p2.comer();
p2.beber();