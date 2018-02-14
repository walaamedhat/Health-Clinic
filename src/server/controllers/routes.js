const express = require('express');
const path = require('path');
const router = express.Router();

const doctors = require('./doctors');
const reserve = require('./reserve');

router.get('/doctors/:cityName', doctors.get);

router.post('/reserve', reserve.post);
// .get('*', function(req, res) {
//   res.sendFile(indexPath);
// });

module.exports = router;

const indexPath = path.join(__dirname, '../../public', 'index.html');
