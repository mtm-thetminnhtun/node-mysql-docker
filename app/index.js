require('dotenv').config();
const mysql = require("mysql2");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

connection.query("select * from posts", function (error, results, fields) {
    if (error) {
        connection.destroy();
        throw error;
    } else {
        console.log(results);
        connection.end(function (err) {
            console.log(err, results);
        });
    }
});
