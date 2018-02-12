const dbConnection = require('../database/dbConnection');

const addpatient = (data, cb) => {
  console.log('pppppppppp');
  const sql =
    ' INSERT INTO patients (name, phone, dob, note, visit, time,"interval")VALUES (\'salam\', \'0595142567\', \'2018-02-08\', \'n thing much to sy\', \'12\', \'09:20:00\',\'8\') RETURNING *';
  dbConnection.query(sql, (dataBaseConnectionErorr, data) => {
    if (dataBaseConnectionErorr) return cb(dataBaseConnectionErorr);

    return cb(null, data.rows[0]);
  });
};

// const addpatient = (data, cb) => {
//   console.log('pppppppppp');
//   const sql = ` INSERT INTO patients (name, phone, dob, note, visit, time,\"interval\")
//     VALUES ('salam', '0595142567', '2018-02-08', 'n thing much to sy', '12', '09:20:00','8')
//      RETURNING *`;
//
//   return new Promise((resolve, reject) => {
//     dbConnection.query(sql, (dataBaseConnectionErorr, data) => {
//       if (dataBaseConnectionErorr) return reject(dataBaseConnectionErorr);
//       resolve(data.rows[0]);
//     });
//   });
// };
const booking = (data, cb) => {
  addpatient(null, (erorr, message) => {
    if (erorr) return erorr;
    else {
      const sql = {
        text:
          'INSERT INTO appointments (id_patient,id_doctor,"date","time-set",status)values($1,$2,$3,$4,$5)',
        values: [`${message.id}`, 1, '2018-02-15', '12:40:00', 'out']
      };
      dbConnection.query(sql, (erorr2, Message) => {
        if (erorr2) return cb(erorr2);

        return cb(null, Message);
      });
    }
  });
};

module.exports = { booking, addpatient };
