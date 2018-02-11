const dbConnection = require('../database/dbConnection');

const addpatient = (data, cb) => {
  const sql = {
    text:
      'INSERT INTO patients (name,phone,dob,note,visit,time,interval)values($1,$2,$3,$4,$5,$6,$7)',
    values: [
      `${data.name}`,
      `${data.phone}`,
      'null',
      'null',
      'null',
      'null',
      'null'
    ]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, message) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, message);
  });
};

const patients = (data, cb) => {
  const sql = {
    text: 'Select * from patients where name=$1',
    values: [`${data.name}`]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, patient) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, patient.rows);
  });
};

const booking = (data, cb) => {
  const sql = {
    text:
      'INSERT INTO appointments (id_patient,id_doctor,"date","time-set",status)values(3,1,\'2018-02-15\',\'12:40:00\',\'out\')'
    // values: [
    // ($1,$2,$3,$4,$5)
    //   `${data.id_patient}`,
    //   `${data.id_doctor}`,
    //   `${data.date}`,
    //   `${data.time}`,
    //   'out'
    // ]
  };
  dbConnection.query(sql, (dataBaseConnectionErorr, message) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, message);
  });
};

module.exports = { booking, addpatient, patients };
