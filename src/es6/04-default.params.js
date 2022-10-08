function newUser(name, age, country) {
  var name = name || 'Oscar';
  var age = age || 34;
  var country = country || 'COL';
  console.log(name, age, country);
}

newUser();
newUser('Jesus', 18, 'US');

function newAdmin(name = 'Jesus', age = 18, country = 'COL') {
  console.log(name,age,country);
}

newAdmin();
newAdmin('Ana', 28, 'BR');