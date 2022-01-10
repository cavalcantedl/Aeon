const express = require('express');
const router = express.Router();
const clientesController = require("../controllers/clientesController");
const uploadArquivos = require("../middlewares/enviaArquivos");
const validaCadastro = require("../middlewares/clientesValidacao");

/* Chama o Multer */
const logoCliente = uploadArquivos.uploadArquivos;

/* GET Clientes. */
router.get('/', clientesController.clientes);

/* GET Cadastrar Cliente. */
router.get('/cadastrar', clientesController.cadastrarClientes);
router.post('/cadastrar', logoCliente.single("logotipoCliente"), validaCadastro.validaCadastroCliente, clientesController.acaoCadastrarClientes);
// router.get('/alterar/:id', clientesController.alterar);
// router.post('/alterar/:id', clientesController.acaoAlterar);
// router.get('/excluir/:id', clientesController.excluir);

module.exports = router;
