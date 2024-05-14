var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines.shift());

for(let i = 0; i < n; i++){
    var [a, b, c] = lines[i].split(" ").map(Number);

    let media = (a*2 + b*3 + c*5)/10;
    console.log(media.toFixed(1));
}
