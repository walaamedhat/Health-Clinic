const book = require('../models/queries/booking.js');
exports.post = (req, res) => {
  book.booking(req.body, dataBaseConnectionErorr => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      res.send('Booking Successfully');
    }
  });
};
