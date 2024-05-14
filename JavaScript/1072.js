var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var max = lines.shift ();

var qtd_in = 0;
let qtd_out = 0;

for (let i = 0; i < max; i++){
if (lines[i] >= 10 && lines[i] <= 20) qtd_in++;
else qtd_out++;
}


console.log (`${qtd_in} in`.trim())
console.log (`${qtd_out} out`.trim())