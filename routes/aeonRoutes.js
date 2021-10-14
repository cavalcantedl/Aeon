let express = require('express');
let router = express.Router();
const aeonController = require('../controllers/aeonControllers');

/* GET rotas via controllers. */
router.get('/', aeonController.home); // página inicial do sistema.
// router.get('/gestaoclientes', aeonController.gestaoClientes);
router.get('/cadastrocliente', aeonController.viewCliente);
router.get('/cadastrousuario', aeonController.cadastroUsuario);


module.exports = router;