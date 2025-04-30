class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, ''),
            writable:false,
            configurable: false,
            enumerable: false
        });
    }

    isSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraDigito(cpfParcial) {
        let total = 0;
        let regressivo = cpfParcial.length + 1;

        for(let valor of cpfParcial) {
            total += regressivo * valor;
            regressivo--;
        }

        const digito = 11 - (total % 11);

        return digito >= 10 ? 0 : digito;
    }

    geraNovoCpf() {
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        
        const digito1 = this.geraDigito(cpfParcial);
        const digito2 = this.geraDigito(cpfParcial + digito1);

        return cpfParcial + digito1 + digito2;
    }

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;

        const cpfExperado = this.geraNovoCpf();

        return cpfExperado === this.cpfLimpo;
    }
}

//705.484.450-52 070.987.720-03

// const validaCpf = new ValidaCpf("070.987.720-03");
// console.log(validaCpf.valida())