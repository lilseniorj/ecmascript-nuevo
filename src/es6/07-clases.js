// declarando
class User {};
// instancia de una clase
// const newUser = new User();

class user {
  // metodos
  greeting() {
    return 'Hello';
  }
};

const seniorj = new user();
console.log(seniorj.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

 // constructor

class user {
  constructor() {
    // Constructor
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'Hello';
  }
}

const david = new user();


// this

class user {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());


// setter and getters

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // metodos
  speak(){
    return 'Hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user('Jesus', 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);
