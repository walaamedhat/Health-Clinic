const viewEvents = require('../models/queries/viewCalenderDoctors.js');
const filterEvents = require('../helpers');

exports.get = (req, res) => {
  const data = req.params;
  viewEvents.viewDoctorsEvents(data, (dataBaseConnectionErorr, events) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      const filterevents = filterEvents(events);
      res.send(filterevents);
    }
  });
};
