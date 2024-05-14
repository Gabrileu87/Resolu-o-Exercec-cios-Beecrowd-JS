var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [horaInicial, minInicial, horaFinal, minFinal] = input.split(' ').map(item => parseInt(item))

var hora = (24 - horaInicial) + horaFinal

var minuto = (60 - minInicial) + minFinal

if(hora > 24 ){

hora = hora - 24 
}

if(minInicial > minFinal){

hora = hora - 1
}

if(hora === 24 && minuto > 0 && minInicial != minFinal){

hora = 0
}

if(minuto >= 60){

minuto = minuto - 60
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

const [horaInicial, minInicial, horaFinal, minFinal] = input.split(' ').map(item => parseInt(item));

let duracaoEmMinutos;


const totalMinutosInicio = horaInicial * 60 + minInicial;
const totalMinutosFim = horaFinal * 60 + minFinal;


if (totalMinutosFim >= totalMinutosInicio) {
    duracaoEmMinutos = totalMinutosFim - totalMinutosInicio;
} else {

    duracaoEmMinutos = (24 * 60 - totalMinutosInicio) + totalMinutosFim;
}


const horas = Math.floor(duracaoEmMinutos / 60);
const minutos = duracaoEmMinutos % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);

console.log(O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S))