let express = require('express');
let router = express.Router();
const loginController = require('../controllers/loginControllers');

/* GET rotas views controllers. */
router.get('/', loginController.login);
router.get('/signup', loginController.signup);
router.get('/senha', loginController.senha);
router.get('/emailsenha', loginController.emailSenha);
router.get('/acessorestrito', loginController.acessoRestrito);


/* Cria rotas de cadastro */
router.post('/signup', (req, res) => {
    console.log(req.body);
});



module.exports = router;