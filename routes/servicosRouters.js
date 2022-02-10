const express = require('express');
const router = express.Router();
const servicosController = require("../controllers/servicosController");
const uploadArquivos = require("../middlewares/enviaArquivos");
// const validaCadastro = require("../middlewares/servicosValidacao");

/* Chama o Multer */
// const logoCliente = uploadArquivos.uploadArquivos;

/* GET Serviços. */
router.get('/', servicosController.servicos);

/* GET Cadastrar Serviço. */
router.get('/cadastrar', servicosController.cadastrarServico);
// router.post('/cadastrar', logoCliente.single("logotipoCliente"), validaCadastro.validaCadastroCliente, clientesController.acaoCadastrarClientes);
// router.get('/editar/:id', clientesController.editarCliente);
// router.put('/editar/:id', logoCliente.single("logotipoCliente"), validaCadastro.validaCadastroCliente, clientesController.acaoEditarCliente);
// router.delete('/excluir/:id', clientesController.excluir);

module.exports = router;