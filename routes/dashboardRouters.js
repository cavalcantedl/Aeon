let express = require('express');
let router = express.Router();
const dashboardController = require('../controllers/dashboardController');

/* GET homepage. */
router.get('/', dashboardController.dashboard);

module.exports = router;
