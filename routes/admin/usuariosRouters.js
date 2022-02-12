const express = require('express');
const router = express.Router();
const usuariosController = require("../../controllers/admin/usuariosController");
const uploadArquivos = require("../../middlewares/enviaArquivos");


/* Chama o Multer */
const adminImage = uploadArquivos.uploadArquivos;

/* GET Admin Pages. */
router.get('/', usuariosController.index);
router.get('/usuarios', usuariosController.usuario);
router.get('/usuarios/cadastrar', usuariosController.cadastroUsuario);
//router.post

module.exports = router;
