const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  // encontrar animal buscado
  const chosenAnimal = species.find((searchedAnimal) => searchedAnimal.name === animal);
  // retornar true ou false se todos os residentes daquela especie atenderem a condição
  return chosenAnimal.residents.every((searchedAge) => searchedAge.age > age);
}

module.exports = getAnimalsOlderThan;
