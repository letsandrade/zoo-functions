const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  const searched = employees.find((item) => item.id === id);
  return employees.some((element) => element.managers.includes(searched.id));
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
console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = { isManager, getRelatedEmployees };
