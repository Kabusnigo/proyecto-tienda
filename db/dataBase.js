const mysql = require('mysql2');

const connection = mysql.createConnection({
   host : 'localhost',
   user : 'root',
   password : 'PLCwe=?TlGmKpFpShz7',
   database : 'tienda'
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