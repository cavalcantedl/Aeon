let express = require('express');
let router = express.Router();
const clientController = require('../controllers/clientControllers');

router.get('/gestaoclientes', clientController.gestaoClientes);
router.get('/cadastrocliente', clientController.cadastroCliente);
router.post('/cadastrocliente', clientController.novoCliente);
router.get('/gestaoclientes/attcliente/:id', clientController.attClienteView); 
router.post('/gestaoclientes/attcliente/:id', clientController.attCliente);

module.exports = router;