const nomes = ["marcus", "vinicius", "lima", "Branches"];

// nome.splices(índicie de onde começa o delete, qtd para apagar, elem1, elem2)

// console.log(nomes.splice(1, 3));

//do indicie 1 até o maior número possível do Js
// console.log(nomes.splice(1, Number.MAX_VALUE));

//a partir do indicie 3, deleta 0, adicionar os elementos
// nomes.splice(3, 0, "Luiz", "jose");
// console.log(nomes);

//a partir do indicie 3, remove 1("Luiz"), adiciona elemento "sergio"
// nomes.splice(3, 1, "Sergio");
// console.log(nomes);

//simulando shift
// let removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

//simulando push
// nomes.splice(nomes.length, 0, "Mário", "Sérgio");
// console.log(nomes);

//simulando unshift
nomes.splice(0, 0, "Mário", "Sérgio");
console.log(nomes);