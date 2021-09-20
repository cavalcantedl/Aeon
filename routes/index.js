var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET contato. */
router.get('/contato', function(req, res, ) {
  res.render('contato');
});

/* GET depoimentos. */
router.get('/depoimentos', function(req, res, ) {
  res.render('depoimentos');
});

/* GET para quem. */
router.get('/para_quem', function(req, res, ) {
  res.render('para_quem');
});

/* GET quem somos. */
router.get('/quem_somos', function(req, res, ) {
  res.render('quem_somos');
});

/* GET vantagens. */
router.get('/vantagens', function(req, res, ) {
  res.render('vantagens');
});

/* GET login. */
router.get('/login', function(req, res, ) {
  res.render('login');
});

/* GET Signup. */
router.get('/signup', function(req, res, ) {
  res.render('signup');
});

/* GET senha. */
router.get('/senha', function(req, res, ) {
  res.render('senha');
});
module.exports = router;
