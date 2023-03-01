let mysql = require('mysql2');
require('dotenv').config()

let connection = mysql.createConnection({
    host: 'localhost',
    database: 'hjemmeside_database',
    user: 'root',
    password: process.env.MYSQL_password
});

module.exports = connection;
