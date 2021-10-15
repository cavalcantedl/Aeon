let express = require('express');
let router = express.Router();
const usersAeon = require("../models/usersAeon");
const userController = require('../controllers/userControllers');

/* GET rotas via controllers. */
router.get('/gestaousuarios', userController.gestaoUsuarios);
router.get('/userprofile', userController.gestaoUsuarios);

module.exports = router;