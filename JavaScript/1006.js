var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


  const A = Number(lines[0]);
    const B = Number(lines[1]);
    const C = Number(lines[2])
 
     const media = ( A * 2 + B * 3 + C * 5)/10  

    console.log (`MEDIA = ${media.toFixed(1)}`);