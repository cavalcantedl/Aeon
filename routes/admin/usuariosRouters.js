const express = require('express');
const router = express.Router();
const usuariosController = require("../../controllers/admin/usuariosController");
const uploadArquivos = require("../../middlewares/enviaArquivos");
const validaCadastro = require("../../middlewares/usuariosValidacao");

/* Chama o Multer */
const fotoUsuario = uploadArquivos.uploadArquivos;

/* GET Admin Pages. */
router.get('/', usuariosController.index);
router.get('/usuarios', usuariosController.usuario);
router.get('/usuarios/cadastrar', usuariosController.cadastroUsuario);
router.post('/usuarios/cadastrar', fotoUsuario.single("imagemUsuario"),validaCadastro.validaCadastroUsuario, usuariosController.acaoCadastroUsuario);
router.get('/usuarios/editar/:id', usuariosController.editarUsuario);
router.put('/usuarios/editar/:id', validaCadastro.validaCadastroUsuario, usuariosController.acaoEditarUsuario);
router.delete('/usuarios/excluir/:id', usuariosController.excluir);
module.exports = router;
