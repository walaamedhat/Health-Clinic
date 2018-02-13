const dbConnection = require('../database/dbConnection');

const viewDoctorsGaza = (cityName, cb) => {
  const sql = {
    text:
      'SELECT name,location,position,description,image FROM doctors WHERE location = $1',
    values: [cityName]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, doctors) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, doctors.rows);
  });
};

module.exports = { viewDoctorsGaza };
