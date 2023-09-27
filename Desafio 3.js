// Desafio 3: Número Solitário

function compare(a, b){
    if(a < b){
        return -1;
    } else if(a > b){
        return 1;
    } else {
        return 0;
    }
}

function solitarios(numeros){
    numeros.sort(compare);

    let atual = numeros[0];
    let qtd = 0;
    const numSolitarios = [];

    for(let i = 1; i < numeros.length; i++){
        if(numeros[i] != atual && qtd == 0){
            numSolitarios.push(atual);
            atual = numeros[i];
        } else if (numeros[i] != atual){
            qtd = 0;
            atual = numeros[i];
        } else {
            qtd++;
        }
        if(i == numeros.length-1){
            qtd == 0 ? numSolitarios.push(numeros[i]) : qtd++;
        }
    }
    return numSolitarios;
}

console.log(solitarios([12, 17, 15, 19, 22, 17, 19, 12]));