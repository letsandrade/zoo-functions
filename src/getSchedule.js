const data = require('../data/zoo_data');

const { hours, species } = data;

function getSchedule(scheduleTarget) {
  const week = Object.keys(hours)
  console.log(week);
  const animals = species.map((item) => item.name);
  console.log(animals);
  const completeSchedule = {
    
  };
  // primeiro caso, sem parâmetro
  //if (!scheduleTarget) {
    
  //}
}
console.log(getSchedule());
module.exports = getSchedule;
