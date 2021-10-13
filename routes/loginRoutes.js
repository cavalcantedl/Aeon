let express = require('express');
let router = express.Router();
const loginController = require('../controllers/loginControllers');
const userController = require('../controllers/userControllers');
const validator = require('../middlewares/validator');

/* GET rotas para as views de processo de login e cadastro. */
router.get('/', loginController.login);
router.get('/signup', loginController.signup);
router.get('/senha', loginController.senha);
router.get('/emailsenha', loginController.emailSenha);
router.get('/acessorestrito', loginController.acessoRestrito);


/*Cria rota de login */

router.post('/', validator.validaLogin, loginController.logar);

/* Cria rotas de cadastro de usuário */
router.post('/signup', validator.validaCadastro, userController.cadastrarUsuario);


module.exports = router;