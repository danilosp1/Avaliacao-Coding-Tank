// Desafio 1: Conversor de Horários

function converteHorario(horario){
    const componentesHorario = horario.split(":");
    let periodo = componentesHorario[componentesHorario.length - 1].slice(2, 4).toLowerCase();
    if(periodo == "pm"){
        componentesHorario[0] = parseInt(componentesHorario[0]) + 12;
        return `${componentesHorario[0]}:${componentesHorario[1]}:${componentesHorario[2].slice(0, 2)}`
    } else {
        return horario.slice(0, horario.length-2);
    }
}

console.log(converteHorario("06:15:25AM"));
console.log(converteHorario("06:15:25PM"));