let express = require('express');
let router = express.Router();
const aeonController = require('../controllers/aeonControllers');

/* GET rotas via controllers. */
router.get('/', aeonController.home);
router.get('/sistema/gestaoclientes', aeonController.gestaoClientes);

module.exports = router;