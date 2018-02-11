const express = require('express');
const router = express.Router();

const doctors = require('./doctors');
const doctorView = require('./doctorView');

router.get('/doctors/:cityName',doctors.get);
router.get('/doctors/:id_doctor', doctorView.get);

module.exports = router;
