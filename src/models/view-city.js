/* eslint-disable no-underscore-dangle */

function ViewCity(city, countries) {
  this.name = city.name;

  this.country = countries.find(c => c.value === city.name);

  console.log('this.country: ', this.country);
}

module.exports = ViewCity;
