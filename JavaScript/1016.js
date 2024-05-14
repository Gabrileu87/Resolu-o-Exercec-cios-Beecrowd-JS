var input = require("fs").readFileSync("/dev/stdin", "utf8");
var dist = parseInt(input.split("\n"));

console.log(dist * 2 + " minutos");