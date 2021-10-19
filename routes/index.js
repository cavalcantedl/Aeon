var express = require('express');
var router = express.Router();
const aeonController = require('../controllers/aeonControllers');

router.get('/', aeonController.index); //página inicial do SITE.

module.exports = router;