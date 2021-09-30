let express = require('express');
let router = express.Router();
const loginController = require('../controllers/loginControllers');

/* GET rotas via controllers. */
router.get('/login', loginController.login);
router.get('/signup', loginController.signup);
router.get('/senha', loginController.senha);
router.get('/emailsenha', loginController.emailSenha);

module.exports = router;