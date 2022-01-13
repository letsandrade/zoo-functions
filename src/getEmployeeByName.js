const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  const employee = employees.find((searchedEmployee) => searchedEmployee.firstName === employeeName || searchedEmployee.lastName === employeeName)
  return employee
}
module.exports = getEmployeeByName;
