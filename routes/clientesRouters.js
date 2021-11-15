const express = require('express');
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const uploadArquivos = require("../middlewares/enviaArquivos");

/* Chama o Multer */
const logoCliente = uploadArquivos.uploadArquivos;

/* GET Clientes. */
router.get('/', clientesController.clientes);

/* GET Cadastrar Cliente. */
router.get('/cadastrar', clientesController.cadastrarClientes);
router.post('/cadastrar', logoCliente.single("logotipoCliente"), clientesController.acaoCadastrarClientes);



module.exports = router;
