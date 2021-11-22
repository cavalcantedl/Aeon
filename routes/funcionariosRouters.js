const express = require('express');
const router = express.Router();
const funcionariosController = require("../controllers/funcionariosController");
// const uploadArquivos = require("../middlewares/enviaArquivos");
// const validaCadastro = require("../middlewares/funcionariosValidacao");

/* Chama o Multer */
// const logoCliente = uploadArquivos.uploadArquivos;

/* GET Funcionários. */
router.get('/', funcionariosController.funcionarios);

/* GET Cadastrar Funcionários. */
router.get('/cadastrar', funcionariosController.cadastrarFuncionarios);
// router.post('/cadastrar', funcionariosController.acaoCadastrarFuncionarios);


module.exports = router;