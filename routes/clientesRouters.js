let express = require('express');
let router = express.Router();
const clientesController = require('../controllers/clientesController');

/* GET Clientes. */
router.get('/', clientesController.clientes);

/* GET Cadastrar Cliente. */
router.get('/cadastrar', clientesController.cadastrarClientes);
router.post('/cadastrar', clientesController.acaoCadastrarClientes);

module.exports = router;
