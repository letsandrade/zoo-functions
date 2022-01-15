const data = require('../data/zoo_data');

const { employees, species } = data;

function getSpecies(searchedInfo) {
  const searchedPerson = employees.find((person) => person.id === searchedInfo.id || person.firstName === searchedInfo.name || person.lastName === searchedInfo.name);
  const animalsTutor = searchedPerson.responsibleFor;
  const findAnimals = species.filter((item) => searchedPerson.includes(item.id));
}
function getEmployeesCoverage(employee = {}) {
  
}

module.exports = getEmployeesCoverage;
