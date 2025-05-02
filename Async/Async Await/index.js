function geraNumAleatorio(min=0, max=3) {
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

// esperaAi('Fase 1', geraNumAleatorio())
//     .then(valor => {
//         console.log(valor);

//         return esperaAi('Fase 2', geraNumAleatorio());
//     })
//     .then(fase => {
//         console.log(fase);

//         return esperaAi('Fase 3', geraNumAleatorio());
//     })
//     .then(fase => {
//         console.log(fase);

//         return fase;
//     })
//     .then(fase => {
//         console.log(`Terminamos na fase: ${fase}`)
//     })
//     .catch(error => console.log(`Error ${error}`));

async function executa() {
    try{
        const fase1 = await esperaAi('Fase 1', geraNumAleatorio());
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', geraNumAleatorio());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', geraNumAleatorio());
        console.log(fase3);
        
        console.log(`Terminamos na fase: ${fase3}`);
    } catch(e) {
        console.log(`Error: ${e}`);
    }
}

executa();