const dbConnection = require('../database/dbConnection');

const viewDoctorsAppiontments = (id_doctor , cb) => {
  const sql = {
    text: `SELECT patients.name AS patient_name, patients.note, patients.dob, patients.visit,
                  patients.interval, patients.time, doctors.name AS doctor_name
                  FROM doctors
                  INNER JOIN appointments on appointments.id_doctor = doctors.id
                  INNER JOIN patients on appointments.id_patient = patients.id
                  WHERE appointments.id_doctor=$1 AND appointments.status='in'`,

    values: [id_doctor]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, appointments) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);
    if (appointments.length === 0) {
      cb(null, appointments.rows);
    } else {

      return cb(null, appointments.rows);
    }
  });
};

const waitingPatients = (id_doctor, cb) => {
  const sql = {
    text: `SELECT COUNT(status)
           FROM appointments
           WHERE id_doctor = $1`,
    values: [id_doctor]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, appointments) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, appointments.rows);
  });
};
module.exports = {
  viewDoctorsAppiontments,
  waitingPatients
};
