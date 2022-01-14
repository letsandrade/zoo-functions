const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const searched = employees.find((item) => item.id === id);
  return (searched.managers.length === 0);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const managesWho = employees.filter((item) => item.managers.includes(managerId));
    const arrNames = [];
    managesWho.forEach((element) => arrNames.push(`${element.firstName} ${element.lastName}`));
    return arrNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
