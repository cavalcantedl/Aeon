let express = require('express');
let router = express.Router();
const aeonController = require('../controllers/aeonControllers');

/* GET rotas via controllers. */
router.get('/', aeonController.index);
router.get('/sistema', aeonController.home);
router.get('/gestaoclientes', aeonController.gestaoClientes);
router.get('/cadastrocliente', aeonController.cadastroCliente);
router.get('/cadastrousuario', aeonController.cadastroUsuario);
module.exports = router;