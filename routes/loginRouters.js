const express = require('express');
const router = express.Router();
const loginController = require("../controllers/loginController");
// const uploadArquivos = require("../middlewares/enviaArquivos");
// const validaCadastro = require("../middlewares/loginValidacao");

/* Chama o Multer */
// const logoCliente = uploadArquivos.uploadArquivos;

/* GET Clientes. */
router.get('/', loginController.login);

/* GET Cadastrar Cliente. */
// router.get('/cadastrar', clientesController.cadastrarClientes);
// router.post('/cadastrar', logoCliente.single("logotipoCliente"), validaCadastro.validaCadastroCliente, clientesController.acaoCadastrarClientes);


module.exports = router;
