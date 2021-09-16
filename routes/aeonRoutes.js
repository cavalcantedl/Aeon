let express = require('express');
let router = express.Router();
const aeonController = require('../controllers/aeonControllers');

/* GET rotas via controllers. */
router.get('/', aeonController.home);
router.get('/gestaoclientes', aeonController.gestaoClientes);
router.get('/login', aeonController.login);
router.get('/signup', aeonController.signup);
router.get('/senha', aeonController.senha);
router.get('/emailsenha', aeonController.emailSenha);
router.get('/cadastrocliente', aeonController.cadastroCliente);

module.exports = router;