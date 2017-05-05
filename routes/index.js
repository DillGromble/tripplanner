const router = require('express').Router();
const Promise = require('sequelize').Promise;
const db = require('../models');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Place = require('../models/place');
const Hotel = require('../models/hotel');





router.get('/', (req, res, next) => {
  const hotels = Hotel.findAll();
  const restaurant = Restaurant.findAll();
  const activity = Activity.findAll();

  Promise.all([hotels, restaurant, activity])
  .spread((hotels, restaurants, activities) => {
    res.render('index', {
      hotels: hotels,
      restaurants: restaurants,
      activities: activities
    })
  })
  .catch( err => next(err));
});







module.exports = router;
