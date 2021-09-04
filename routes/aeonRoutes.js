var express = require('express');
var router = express.Router();

/* GET Application. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aplicação' });
});

module.exports = router;