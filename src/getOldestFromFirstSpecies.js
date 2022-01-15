const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const searchedPerson = employees.find((item) => item.id === id);
  const firstAnimalId = searchedPerson.responsibleFor[0];
  const animal = species.find((element) => element.id === firstAnimalId);
  const allResidents = animal.residents;
  const oldestAnimal = allResidents.reduce((accAnimal, currAnimal) => {
    if (accAnimal.age > currAnimal.age) {
      return accAnimal;
    }
    return currAnimal;
  });
  const arrOldest = [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
  return arrOldest;
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
