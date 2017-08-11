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

module.exports = queryDB;
