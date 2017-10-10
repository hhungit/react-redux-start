
const initOptions = {
    // global event notification;
    error: (error, e) => {
        if (e.cn) {
            // A connection-related error;
            //
            // Connections are reported back with the password hashed,
            // for safe errors logging, without exposing passwords.
            console.log('CN:', e.cn);
            console.log('EVENT:', error.message || error);
        }
    }
};
var pgp = require('pg-promise')(initOptions);
var connectionString = 'postgres://postgres:grokhoang1990@localhost:5432/northwind';
var db = pgp(connectionString);
module.exports = db;