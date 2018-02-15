const dbConnection = require('../database/dbConnection');

const viewSecretaryAppiontments = (location , cb) => {
  const sql = {
    text: `SELECT appointments.id, patients.name AS patient_name,
                  doctors.name AS doctor_name, appointments.status,
                  appointments."time-set" AS time
                  FROM patients
                  INNER JOIN appointments on patients.id = appointments.id_patient
                  INNER JOIN doctors on appointments.id_doctor = doctors.id
                  where doctors.location = $1`,

    values: [location]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, secretaryAppointments) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, secretaryAppointments.rows);
  });
};

module.exports = {
  viewSecretaryAppiontments
};
