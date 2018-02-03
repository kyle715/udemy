var express = require('express');
var router = express.Router();
var ctrlHotels = require('../controllers/hotels.controllers.js');

router
    .route('/hotels')
    .get(ctrlHotels.hotelsGetall);

router
    .route('/hotels/:hotelId')
    .get(ctrlHotels.hotelsGetOne);

module.exports = router;