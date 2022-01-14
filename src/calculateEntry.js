const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const result = entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    } else if (curr.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const totalEntrants = countEntrants(entrants);
  const totalChild = (totalEntrants.child * prices.child);
  const totalAdult = (totalEntrants.adult * prices.adult);
  const totalSenior = (totalEntrants.senior * prices.senior);
  const finalCost = (totalChild + totalAdult + totalSenior);
  return finalCost;
}

module.exports = { calculateEntry, countEntrants };
