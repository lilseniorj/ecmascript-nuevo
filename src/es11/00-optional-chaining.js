const users = {
  jsvg: {
    country: 'COL',
    age: 18
  },
  ana: {
    country: 'MX'
  }
}

console.log(users?.bebeloper?.country);
//El encadenamiento opcional u optional chaining (?.) detiene la evaluación del objeto cuando el valor es undefined o null antes del (?.), retornando undefined sin detener el programa por un error.