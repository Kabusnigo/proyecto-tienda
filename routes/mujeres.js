const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/',userController.listarRopasMujeres);

module.exports = router;