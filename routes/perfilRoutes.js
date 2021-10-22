let express = require('express');
let router = express.Router();
const uploadMulter = require("../middlewares/enviaArquivos");
const perfilController = require('../controllers/perfilControllers');

/* chama multer */
const uploadArquivo = uploadMulter.uploadArquivo;

/* GET rotas via controllers. */
router.get('/', perfilController.perfilUsuario);
router.post('/', uploadArquivo.single("profileImage"), perfilController.perfilUsuario);

//preciso configurar agora o ejs para envio de imagem

module.exports = router;