const express = require('express');
const router = express.Router();
const adminController = require("../../controllers/admin/adminController");
const uploadArquivos = require("../../middlewares/enviaArquivos");


/* Chama o Multer */
const adminImage = uploadArquivos.uploadArquivos;

/* GET Admin Pages. */
router.get('/', adminController.index);
router.get('/usuarios', adminController.usuarios);

module.exports = router;
