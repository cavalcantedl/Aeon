let express = require('express');
let router = express.Router();
const uploadMulter = require("../middlewares/enviaArquivos");
const userController = require('../controllers/userControllers');

/* chama multer */
const uploadArquivo = uploadMulter.uploadArquivo;

/* GET rotas via controllers. */
router.get('/gestaousuarios', userController.gestaoUsuarios);
router.get('/userprofile', userController.userProfile);
router.post('/userprofile', uploadArquivo.single("profileImage"), userController.userProfile);

//preciso configurar agora o ejs para envio de imagem

module.exports = router;