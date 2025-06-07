const db = require('../db/dataBase.js');


// ----------------------------
// ---------  GET -------------
// ----------------------------

// ----- Comidas ------
const listarRopasHombres = (req, res) => {
    const sql = "SELECT * FROM ropas WHERE sexo LIKE 'masculino'";
    
    db.query(sql, (err, results) => {
        if (err) 
            throw err;
        
        res.json(results);
    });
}

module.exports = {
    // GET
    listarRopasHombres,
    //multer
    upload
}