let express = require('express');
let router = express.Router();
const clientController = require('../controllers/clientControllers');

router.get('/gestaoclientes', clientController.gestaoClientes);
router.get('/cadastrocliente', clientController.cadastroCliente);
router.post('/cadastrocliente', clientController.novoCliente);
router.get('/gestaoclientes/editar', clientController.attClienteView);
router.put('/gestaoclientes/editar/:id', clientController.attCliente);

module.exports = router;