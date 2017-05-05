const db = require('./db');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Place = require('./place');
const Hotel = require('./hotel');


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = db;
