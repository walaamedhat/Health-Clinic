const view = require('../models/queries/viewDataDoctors.js');
exports.get = (req, res) => {
  const cityName = req.params.cityName;
  view.viewDoctorsGaza(cityName, (dataBaseConnectionErorr, data) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      res.send(data);
    }
  });
};
