const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  species.forEach((item) => console.log(item));
}

module.exports = getAnimalsOlderThan;
console.log(getAnimalsOlderThan('otters', 7));
