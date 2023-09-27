// Desafio 2: Quantidade de Palavras

function quantidadePalavras(frase){
    let qtd = 1; // Como está em camelCase, é importante a iniciar com 1, para contar a primeira palavra
    for(let i = 0; i < frase.length; i++){
        if(frase[i] >= 'A' && frase[i] <= 'Z') qtd++;
    }
    return qtd;
}

console.log(quantidadePalavras("façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"));
