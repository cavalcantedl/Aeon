let express = require('express');
let router = express.Router();
const uploadMulter = require("../middlewares/enviaArquivos");
const userController = require('../controllers/userControllers');


/* GET rotas via controllers. */
router.get('/gestaousuarios', userController.gestaoUsuarios);
router.get('/cadastrousuario', userController.cadastroUsuario);

//preciso configurar agora o ejs para envio de imagem

module.exports = router;