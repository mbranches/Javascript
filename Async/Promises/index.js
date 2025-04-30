function geraNumAleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject("BAD VALUE");

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    })


    
}

esperaAi("Conexão com o BD", geraNumAleatorio(1, 5))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da base', geraNumAleatorio(1, 5));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2, geraNumAleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(() => {
        console.log("Ultimo");
    })
    .catch(e => {
        console.log("ERROR: " + e);
    });

console.log("Primeira execução");