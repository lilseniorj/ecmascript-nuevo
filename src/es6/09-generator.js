function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}


const it = iterate(['Jesus', 'Santy', 'Ana', 'Duvan']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);