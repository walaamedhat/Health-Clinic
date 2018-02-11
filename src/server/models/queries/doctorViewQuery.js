const dbConnection = require('../database/dbConnection');

const viewDoctorsAppiontments = (id_doctor , cb) => {
  const sql = {
    text: 'SELECT * FROM appointments WHERE id_doctor = $1 AND status = "in"',
    values: [id_doctor]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, appointments) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);
    console.log('doctor appointments are :', appointments.rows);

    return cb(null, appointments.rows);
  });
};

module.exports = { viewDoctorsAppiontments };
