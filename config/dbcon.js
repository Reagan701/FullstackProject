require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.dbPort,
    database: process.env.database,
    multipleStatements: true,
    connectionLimit:10,
});

module.exports = connection;