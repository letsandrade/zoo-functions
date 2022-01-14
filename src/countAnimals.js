const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // primeiro caso, se não houver parâmetro
  if (animal === undefined) {
    const allAnimals = species.reduce((accumulator, currAnimal) => {
      accumulator[currAnimal.name] = currAnimal.residents.length;
      return accumulator;
    }, {});
    return allAnimals;
  }

  if (animal.sex === undefined) {
    const chosenAnimal = species.find(({ name }) => name === animal.specie);
    const numberRes = chosenAnimal.residents.length;
    return numberRes;
  }
  const genderResult = species.find(({ name }) => name === animal.specie).residents;
  return genderResult.filter(({ sex }) => sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
