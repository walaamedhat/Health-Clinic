const express = require('express');
const router = express.Router();

const doctors = require('./doctors');
const doctorView = require('./doctorView');
const reserve = require('./reserve');

router.get('/doctors/:cityName', doctors.get);
router.get('/doctor/:id_doctor', doctorView.get);
router.post('/reserve', reserve.post);

module.exports = router;
