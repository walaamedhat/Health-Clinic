const dbConnection = require('../database/dbConnection');
// , dob, note, visit, time,"interval"
const addpatient = (data, cb) => {
  const sql = {
    text:
      'INSERT INTO patients (name, phone,dob, note, visit, time,"interval")' +
      'values($1,$2,$3,$4,$5,$6,$7)RETURNING *',
    values: [
      `${data.reserveData.dataPatient.name}`,
      `${data.reserveData.dataPatient.phone}`,
      null,
      null,
      null,
      null,
      null
    ]
  };

  dbConnection.query(sql, (dataBaseConnectionErorr, id) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, id.rows[0]);
  });
};

const booking = (data, cb) => {
  const appointment = data.reserve.time.split(',');
  addpatient(data, (erorr, message) => {
    if (erorr) {
      cb(erorr);
    } else {
      const sql = {
        text:
          'INSERT INTO appointments (id_patient,id_doctor,"date","time-set",status)values($1,$2,$3,$4,$5)',
        values: [
          `${message.id}`,
          `${data.reserveData.dataPatient.id}`,
          `${appointment[0]}`,
          `${appointment[1]}`,
          'out'
        ]
      };
      dbConnection.query(sql, (erorr2, Message) => {
        if (erorr2) return cb(erorr2);
        Message = 'Booking Success';

        return cb(null, Message);
      });
    }
  });
};

module.exports = { booking, addpatient };
