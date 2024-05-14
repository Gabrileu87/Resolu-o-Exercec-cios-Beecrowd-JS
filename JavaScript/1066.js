var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var par = 0
var impar = 0
var positivo = 0
var negativo = 0


for(var i = 0; i < 5; i++){
    var n = lines[i]
    if(n % 2 == 0){
        par++
    } else {
        impar++
    }
    if(n > 0){
        positivo++
    } else if(n < 0){
        negativo++
    }
}
console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${positivo} valor(es) positivo(s)`);
console.log(`${negativo} valor(es) negativo(s)`);