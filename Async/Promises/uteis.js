function geraNumAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject("BAD VALUE");
                return;
            }

            console.log(".")
            resolve(msg + ' passei na promise'.toUpperCase());
        }, tempo);
    })


    
}
//Promise.all Promise.race Promise.resolve Promise.reject

// const promises = [
//     // 'Primeiro valor',
//     esperaAi('Promise 1', geraNumAleatorio(1, 3)),
//     esperaAi('Promise 2', geraNumAleatorio(1, 3)),
//     esperaAi('Promise 3', geraNumAleatorio(1, 3)),
//     esperaAi(10, geraNumAleatorio(1, 3)),
//     // 'Outro valor'
// ];

// Promise.all(promises)
//     .then((valor) => {
//         console.log(valor); 
//     })
//     .catch((erro) => console.log('error: ' + erro)); //se uma da error, nenhum promise é retornada

// Promise.race(promises) //retorna o primeiro valor resolvido, porém as outras promises ainda são executadas
//     .then(valor => console.log(valor))
//     .catch((erro) => console.log('Erro: ' + erro)); //só cai no catch se a promise retornada for a que cair no error


function baixaPagina() {
    const emCache = true;

    if(emCache) return Promise.reject('Página em cache');

    return esperaAi('Página baixada', 3000);
}

baixaPagina()
    .then(dadosPagina => console.log("####" + dadosPagina))
    .catch(e => console.log('erro: ', e));