const dbConnection = require('../database/dbConnection');

const viewDoctorsEvents = (data, cb) => {
  const sql = {
    text:
      'SELECT patients.name,appointments.date,appointments."time-set" FROM appointments JOIN ' +
      'doctors on appointments.id_doctor = doctors.id JOIN patients ' +
      'on patients.id = appointments.id_patient where doctors.location = $1 ' +
      'and appointments.id_doctor = $2',
    values: [`${data.cityName}`, `${data.idDoctor}`]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, events) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, events.rows);
  });
};

module.exports = { viewDoctorsEvents };
