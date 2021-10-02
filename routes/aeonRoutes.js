let express = require('express');
let router = express.Router();
const aeonController = require('../controllers/aeonControllers');

/* GET rotas via controllers. */
router.get('/', aeonController.index);
router.get('/sistema', aeonController.home);
router.get('/gestaoclientes', aeonController.gestaoClientes);
router.get('/cadastrocliente', aeonController.viewCliente);
router.get('/cadastrousuario', aeonController.cadastroUsuario);
router.post('/cadastrocliente', aeonController.cadastroCliente);

module.exports = router;