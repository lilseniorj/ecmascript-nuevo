const anotherFunction = () => {
  return new Promise((resolve, reject) =>{
    if (false) { // true: entra en el reject, false: entra en el whoopss.
      resolve('Hey!!!'); // valor numero, objeto o lo que quieras
    } else {
      reject('Whooopss!!!');
    }
  })
}

anotherFunction()
  .then(response => console.log(response))
  .catch(err => console.log(err));