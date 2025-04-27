//705.484.450-52
  
//7x 0x 5x 4x 8x 4x 4x 5x 0x
//10 9  8  7  6  5  4  3  2
//70 0  40 28 48 20 16 15 0 = 237

//11 - (237 % 11) = 5 (primeiro digito) -> se o digito for maior que 9, considera-se 0

//7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
//11 10 9  8  7  6  5  4  3  0
//77 0  45 32 56 24 20 20 0  10 = 284

//11 - (284 % 11) = 2

//705.484.450-52 === 705.484.450-52

function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true, 
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length != 11) return false;
    
    const cpfParcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(cpfParcial); //cpf parcial é string
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial + digito1 + digito2;

    if (novoCPF === this.cpfLimpo) return true;

    return false;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, numero) => {
        ac += (regressivo * numero);
        regressivo--

        return ac;
    }, 0);

    const digitoEsperado = 11 - (total % 11);

    return digitoEsperado > 9 ? '0' : String(digitoEsperado);
}


const cpf = new ValidaCpf("03110336286");
console.log(cpf.valida());