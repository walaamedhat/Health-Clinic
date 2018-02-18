const view = require('../models/queries/doctorViewQuery.js');
const { getAge } = require('../helpers/getAge');
exports.get = (req, res) => {
  const id_doctor = req.params.id_doctor;
  view.currentPatient(id_doctor, (erorrpatient, patientdata) => {
    if (erorrpatient) res.status(500).send(erorrpatient);
    else {
      view.allPatients(id_doctor, (erorr, patientCount) => {
        if (erorr) res.status(500).send(erorr);
        if (patientdata.length === 0) {
          res.send('no appointments');
        } else {
          const data = patientdata.concat(patientCount);
          const dob = data[0].dob;
          patientdata[0] = Object.assign(patientdata[0], {
            age: getAge(dob)
          });
          view.waiting(id_doctor, (er, waitingCount) => {
            if (er) res.status(500).send(er);
            else {
              const fullData = data.concat(waitingCount);
              res.send(fullData);
            }
          });
        }
      });
    }
  });
};
