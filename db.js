const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 9999,
    database: 'NODE2906',
    password: 'thuytrang297',
    max: 5,
    idleTimeoutMillis: 1000,
    user: 'postgres'
});

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done();
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

////////////// TEST FUNCTION ////////////////
//getAllStudent();

// getStudentById(2,(err,result) => {
//     if(err) return console.log(err.toString());
//     console.log(result);
// });

//insertStudent('tuandhminh@gmail.com','456');

//updateStudent(3,'miracle@gmail.com','miracle');

//deleteStudent(2);
///////////////////////////////////////////


// function queryDB(sql, cb) {
//         pool.connect((err, client) => {
//            if (err) return cb(err, null);
//             client.query(sql, (errQuery, result) => {
//                 if (errQuery) return cb(errQuery, null);
//                 cb(null, result);
//             });
//         });
//     }
    // const sql = 'SELECT * FROM "Student"';
    // queryDB(sql,(err,result) => {
    //     if(err) return console.log(err.toString());
    //     console.log(result.rows);
    // })

// queryDB('SELECT * FROM "Student"', (err, result) => {
//      if (err) return console.log(err.toString());
//      console.log(result.rows);
//  });
 
module.exports = queryDB;
