var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const salarioInicial = parseFloat(input);

let reajustePercentual;
let novoSalario;
let reajusteGanho;

if (salarioInicial <= 400.00) {
    reajustePercentual = 15;
} else if (salarioInicial <= 800.00) {
    reajustePercentual = 12;
} else if (salarioInicial <= 1200.00) {
    reajustePercentual = 10;
} else if (salarioInicial <= 2000.00) {
    reajustePercentual = 7;
} else {
    reajustePercentual = 4;
}

reajusteGanho = salarioInicial * reajustePercentual / 100;
novoSalario = salarioInicial + reajusteGanho;

console.log(`Novo salario: ${novoSalario.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajusteGanho.toFixed(2)}`);
console.log(`Em percentual: ${reajustePercentual} %`);
