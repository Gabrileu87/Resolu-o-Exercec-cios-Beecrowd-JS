var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    const [x, y] = lines[i].split(' ').map(Number);

    if (y === 0) {
        console.log("divisao impossivel");
    } else {
        const resultado = x / y;
        console.log(resultado.toFixed(1));
    }
}
