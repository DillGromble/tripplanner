const Sequelize = require('sequelize');
const db = require('./db');


const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  ammenities: {
    type: Sequelize.STRING,
    allowNull: false
  }
})


module.exports = Hotel;
