let express = require('express');
let router = express.Router();
const uploadMulter = require("../middlewares/enviaArquivos");
const perfilController = require('../controllers/perfilControllers');

/* chama multer */
const uploadImagem = uploadMulter.uploadImagem;

/* GET rotas via controllers. */
router.get('/', perfilController.perfilUsuario);
router.post('/', uploadImagem.single("profileImage"), perfilController.perfilUsuario);

//preciso configurar agora o ejs para envio de imagem

module.exports = router;