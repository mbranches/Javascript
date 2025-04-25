const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//Soma do dobro de todos o numeros pares

const pares = numeros.filter(num => num % 2 === 0);
const paresDobrados = pares.map(num => num * 2);
const somaParesDobrados = paresDobrados.reduce(
    (acumulador, num) => {
        acumulador += num;

        return acumulador;
    }, 0
)
console.log(pares);
console.log(paresDobrados);
console.log(somaParesDobrados);
