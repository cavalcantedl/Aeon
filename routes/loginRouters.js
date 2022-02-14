const express = require('express');
const router = express.Router();
const loginController = require("../controllers/loginController");
// const uploadArquivos = require("../middlewares/enviaArquivos");
// const validaCadastro = require("../middlewares/loginValidacao");

/* Chama o Multer */
// const logoCliente = uploadArquivos.uploadArquivos;

/* GET Clientes. */
router.get('/', loginController.login);
router.post('/', loginController.acaoLogin);
router.get('/logout', loginController.logout);
router.get('/lock', loginController.lock);



module.exports = router;
