var express = require('express');
var router = express.Router();
var AccountController = require('../controllers/AccountController');

router.get('/', AccountController.list);
router.post('/', AccountController.create);
router.post('/transfer', AccountController.doTransfer);

module.exports = router;