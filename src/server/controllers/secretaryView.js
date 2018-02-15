const view = require('../models/queries/secretaryViewQuery.js');
exports.get = (req, res) => {
  const location = req.params.location;
  view.viewSecretaryAppiontments(location,(dataBaseConnectionErorr, secretaryAppointments) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else if (secretaryAppointments === undefined) {
      res.send('');
    } else {
      const data = secretaryAppointments;
      res.send(data);
    }
  }
  );
};
