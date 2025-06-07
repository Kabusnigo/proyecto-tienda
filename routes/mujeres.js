const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/hombres',userController.listarRopasHombres);

module.exports = router;