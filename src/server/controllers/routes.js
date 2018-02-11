const express = require('express');
const router = express.Router();

const doctors = require('./doctors');
const reserve = require('./reserve');

router.get('/doctors/:cityName', doctors.get);

router.get('/reserve', reserve.get);

module.exports = router;
