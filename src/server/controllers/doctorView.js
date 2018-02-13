const view = require('../models/queries/doctorViewQuery.js');
const { getAge } = require('../functions/getAge');
exports.get = (req, res) => {
  const id_doctor = req.params.id_doctor;
  view.viewDoctorsAppiontments(id_doctor,(dataBaseConnectionErorr, appointments) => {
    if (dataBaseConnectionErorr) res.status(500).send(dataBaseConnectionErorr);
    else {
      view.waitingPatients(id_doctor, (dataBaseConnectionErorrWaiting, waitingCount) => {
        if (dataBaseConnectionErorrWaiting) res.status(500).send(dataBaseConnectionErorrWaiting);
        if (appointments[0] === undefined) {
          res.send(null);
        } else {
          const data = appointments.concat(waitingCount);
          const dob = data[0].dob;
          appointments[0] = Object.assign(appointments[0], { age: getAge(dob) });
          res.send(data);
        }

      });
    }
  });
};
