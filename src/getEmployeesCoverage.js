const data = require('../data/zoo_data');

const { employees, species } = data;

function getSpecific(emp) {
  const searched = employees
    .find((p) => p.id === emp.id || p.firstName === emp.name || p.lastName === emp.name);
  const animalsTutor = searched.responsibleFor;
  const findAnimals = species.filter((item) => animalsTutor.includes(item.id));
  const animalsNames = findAnimals.map((element) => element.name);
  const animalsPlaces = findAnimals.map((place) => place.location);
  const employeeObj = {
    id: searched.id,
    fullName: `${searched.firstName} ${searched.lastName}`,
    species: animalsNames,
    locations: animalsPlaces,
  };
  return employeeObj;
}

function getAllEmployees() {
  const allEmployees = employees.map((item) => {
    const checkAnimals = species.filter((element) => item.responsibleFor.includes(element.id));
    return {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: checkAnimals.map((animal) => animal.name),
      locations: checkAnimals.map((element) => element.location),
    };
  });
  return allEmployees;
}

function getEmployeesCoverage(obj = {}) {
  if (Object.keys(obj).length === 0) {
    return getAllEmployees();
  }
  const specificEmployee = employees
    .find((i) => (i.id === obj.id || i.firstName === obj.name || i.lastName === obj.name));
  if (!specificEmployee) {
    throw new Error('Informações inválidas');
  }
  return getSpecific(obj);
}
module.exports = getEmployeesCoverage;
