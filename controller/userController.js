const db = require('../db/dataBase.js');


// ----------------------------
// ---------  GET -------------
// ----------------------------

// ----- ROPAS HOMBRES ------
const listarRopasHombres = (req, res) => {
    const sql = "SELECT * FROM ropas WHERE sexo LIKE 'masculino'";
    
    db.query(sql, (err, results) => {
        if (err) 
            throw err;
        
        res.json(results);
    });
}

/*
// ----- ROPAS HOMBRES ------
const listarRopasHombres = (req, res) => {
    const {sexo} = req.params;
    const sql = "SELECT * FROM ropas WHERE sexo LIKE '?'";
    
    db.query(sql, [sexo], (err, results) => {
        if (err) 
            throw err;
        
        res.json(results);
    });
}
 */

module.exports = {
    // GET
    listarRopasHombres,
    //multer
    //pload
}