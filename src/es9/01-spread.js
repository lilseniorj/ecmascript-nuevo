const user = { username: 'jsevr', age: 18, country: 'COL'};
const { username, ...values } = user;
console.log(username);
console.log(values);