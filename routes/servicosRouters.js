const express = require('express');
const router = express.Router();
const servicosController = require("../controllers/servicosController");
// const uploadArquivos = require("../middlewares/enviaArquivos");
const validaCadastro = require("../middlewares/servicosValidacao");

/* Chama o Multer */
// const logoCliente = uploadArquivos.uploadArquivos;

/* GET Serviços. */
router.get('/', servicosController.servicos);

/* GET Cadastrar Serviço. */
router.get('/cadastrar', servicosController.cadastrarServico);
router.post('/cadastrar', validaCadastro.validaCadastroServico, servicosController.acaoCadastrarServicos);
router.get('/editar/:id', servicosController.editarServico);
router.put('/editar/:id', validaCadastro.validaCadastroServico, servicosController.acaoEditarServico);
router.delete('/excluir/:id', servicosController.excluir);

module.exports = router;