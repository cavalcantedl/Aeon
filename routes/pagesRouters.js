let express = require('express');
let router = express.Router();
const pagesController = require('../controllers/pagesController');

/* GET homepage. */
router.get('/', pagesController.homepage);

module.exports = router;
