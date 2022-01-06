const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  // const compareID = (ids === species.id);
  // console.log(animals);
  const result = [];
  if (ids === undefined) {
    return result;
  }
  species.filter((item) => {
    ids.filter((itemProcurado) => {
      if (item.id === itemProcurado) {
        result.push(item);
      }
    });
  });
  return result;
}

module.exports = getSpeciesByIds;
