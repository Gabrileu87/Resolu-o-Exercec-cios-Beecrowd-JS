var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

for (let i = 0; i < n; i++) {
    const [x, y] = lines[i].split(' ').map(value => parseInt(value));
    
    let sum = 0;
    const min = Math.min(x, y) + 1;
    const max = Math.max(x, y);

    for (let j = min; j < max; j++) {
        if (j % 2 !== 0) {
            sum += j;
        }
    }

    console.log(sum);
}
