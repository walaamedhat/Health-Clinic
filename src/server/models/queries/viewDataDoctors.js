const dbConnection = require('../database/dbConnection');

<<<<<<< HEAD
const viewDoctorsGaza = (cityName , cb) => {
=======
const viewDoctorsGaza = (cityName, cb) => {
>>>>>>> aa51193ccf520b5a2516187c077651e4a246b9ed
  const sql = {
    text:
      'SELECT id,name,location,position,description,image FROM doctors WHERE location = $1',
    values: [cityName]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, doctors) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, doctors.rows);
  });
};

module.exports = { viewDoctorsGaza };
