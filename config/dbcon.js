require('dotenv').config();

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.dbPort,
    database: process.env.database,
    multipleStatements: true
});

connection.connect((err) =>{
    if(err) throw err
});

module.exports = connection;