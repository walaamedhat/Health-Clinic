const book = require('../models/queries/booking.js');
exports.get = (req, res) => {
  console.log('hiiiiii');
  book.booking(null, (dataBaseConnectionErorr, message) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      res.send('Booking Success');
    }
  });
};
