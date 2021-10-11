let express = require('express');
let router = express.Router();
const loginController = require('../controllers/loginControllers');
const userController = require('../controllers/userControllers');

/* GET rotas para as views. */
router.get('/', loginController.login);
router.get('/signup', loginController.signup);
router.get('/senha', loginController.senha);
router.get('/emailsenha', loginController.emailSenha);
router.get('/acessorestrito', loginController.acessoRestrito);


/* Cria rotas de cadastro de usuário */
router.post("/signup", userController.cadastrarUsuario);
router.post('/signup', (req, res) => {
    console.log(req.body);
});

module.exports = router;