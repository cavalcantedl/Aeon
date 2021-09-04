var express = require('express');
var router = express.Router();

/* GET Application. */
router.get('/', function(req, res, next) {
  res.render('web-application/home', { title: 'Aeon - Gestão Descomplicada para Agência de Marketing' }); /* Indica o caminho da homepage da aplicação */ 
});

module.exports = router;