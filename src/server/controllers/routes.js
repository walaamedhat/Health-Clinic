const express = require('express');
const router = express.Router();

const doctors = require('./doctors');
<<<<<<< HEAD
const doctorView = require('./doctorView');

router.get('/doctors/:cityName',doctors.get);
router.get('/doctor/:id_doctor', doctorView.get);
=======
const reserve = require('./reserve');

router.get('/doctors/:cityName', doctors.get);

router.post('/reserve', reserve.post);
>>>>>>> aa51193ccf520b5a2516187c077651e4a246b9ed

module.exports = router;
