require ('dotenv').config(); //acceder a variables de entorno

const mysql = require('mysql2'); //driver de conexion a bd

const pool = mysql.createPool({ //creacion de conexiones a bd
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    connectionLimit: 10, //conexiones abiertas simultaneamente permitidas
});

module.exports = pool.promise();
