let express = require('express');
let router = express.Router();
const aeonController = require('../controllers/aeonControllers');

/* GET rotas via controllers. */
router.get('/', aeonController.visaoGeral); // página inicial do sistema.
// router.get('/gestaoclientes', aeonController.gestaoClientes);
router.get('/cadastrocliente', aeonController.viewCliente);
router.get('/cadastrousuario', aeonController.cadastroUsuario);
router.get('/acessorestrito', aeonController.acessoRestrito);

module.exports = router;