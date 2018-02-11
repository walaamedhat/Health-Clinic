const view = require('../models/queries/doctorViewQuery.js');
exports.get = (req,res) => {
  console.log('jahdgoa', req.params);
  const id_doctor = req.params.id_doctor;
  view.doctorViewQuery(id_doctor,(dataBaseConnectionErorr, appointments) => {
    console.log(dataBaseConnectionErorr);
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      console.log(appointments);
      res.send(appointments);
    }
  });
};
