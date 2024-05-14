var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numero  = Number(lines[0])
var hora = Number(lines[1])
var salario = Number(lines[2])

var renda = hora * salario

console.log('NUMBER = ' + numero)
console.log('SALARY = U$ ' + renda.toFixed(2)) 
