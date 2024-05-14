var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = lines.shift();
var SalarioFixo = parseFloat (lines.shift())
var TotalVendas = parseFloat (lines.shift())

var comissao = TotalVendas * 0.15;
                                                                                                       
var salarioFinal = SalarioFixo + comissao;

console.log ("TOTAL = R$ " + salarioFinal.toFixed (2));