const dbConnection = require('../database/dbConnection');

const currentPatient = (id_doctor, cb) => {
  const sql = {
    text: `SELECT patients.name AS patient_name, patients.note, patients.dob, patients.visit,
                  patients.interval, patients.time, doctors.name AS doctor_name
                  FROM doctors
                  INNER JOIN appointments on appointments.id_doctor = doctors.id
                  INNER JOIN patients on appointments.id_patient = patients.id
                  WHERE appointments.id_doctor=$1 AND appointments.status='in'`,

    values: [id_doctor]
  };
  dbConnection.query(sql, (erorr, appointmentdata) => {
    if (erorr) return cb(erorr);

    return cb(null, appointmentdata.rows);
  });
};

const allPatients = (id_doctor, cb) => {
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
const waiting = (id_doctor, cb) => {
  const sql = {
    text: `SELECT COUNT(id_patient)
           FROM appointments
           WHERE id_doctor = $1 and status=$2`,
    values: [id_doctor, 'waiting']
  };
  dbConnection.query(sql, (erorr, waitingNumber) => {
    if (erorr) return cb(erorr);

    return cb(null, waitingNumber.rows);
  });
};
module.exports = {
  currentPatient,
  allPatients,
  waiting
};
