var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const [filo, subgrupo, subsubgrupo] = input.trim().split('\n');

let animal;

if (filo === 'vertebrado') {
    if (subgrupo === 'ave') {
        if (subsubgrupo === 'carnivoro') {
            animal = 'aguia';
        } else if (subsubgrupo === 'onivoro') {
            animal = 'pomba';
        }
    } else if (subgrupo === 'mamifero') {
        if (subsubgrupo === 'onivoro') {
            animal = 'homem';
        } else if (subsubgrupo === 'herbivoro') {
            animal = 'vaca';
        }
    }
} else if (filo === 'invertebrado') {
    if (subgrupo === 'inseto') {
        if (subsubgrupo === 'hematofago') {
            animal = 'pulga';
        } else if (subsubgrupo === 'herbivoro') {
            animal = 'lagarta';
        }
    } else if (subgrupo === 'anelideo') {
        if (subsubgrupo === 'hematofago') {
            animal = 'sanguessuga';
        } else if (subsubgrupo === 'onivoro') {
            animal = 'minhoca';
        }
    }
}

console.log(animal);
