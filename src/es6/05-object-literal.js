// Enahced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId // id: uId
  }
}

console.log(newUser('seniorj', 18, 'COL', 1));