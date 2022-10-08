const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, banana Kiwi, Apple, orange, etc.'

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}


// El método matchAll de los strings devuelve un iterable con todas las coincidencias del string específico,
// a partir de una expresión regular, colocada como argumento.

// string.matchAll(regex)