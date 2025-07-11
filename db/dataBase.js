require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    /*
   host : 'localhost',
   user : 'root',
   password : 'PLCwe=?TlGmKpFpShz7',
   database : 'tienda'
   */

   host : process.env.DB_HOST,
   user : process.env.DB_USER,
   password : process.env.DB_PASSWORD,
   database : process.env.DB_NAME
});

connection.connect((err) => {
    if(err){
        console.error("Error al conectar a la base de datos: " , err);
        return;
    } else {
        console.log("Conectado a la base de datos");
    }
});

module.exports = connection;