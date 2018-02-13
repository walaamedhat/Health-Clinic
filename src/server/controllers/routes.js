const express = require('express');
const router = express.Router();

const doctors = require('./doctors');
const reserve = require('./reserve');

router.get('/doctors/:cityName', doctors.get);

router.post('/reserve', reserve.post);

module.exports = router;
