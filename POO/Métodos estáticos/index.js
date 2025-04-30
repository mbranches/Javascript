class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume() {
        this.volume += 2;
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    static sla() {
        return "fjafa";
    }
}

const c1 = new ControleRemoto('seila');
c1.aumentarVolume();
console.log(c1);

console.log(ControleRemoto.sla())