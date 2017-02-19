var express = require('express');
var router = express.Router();
var AccountController = require('../controllers/AccountController');

router.get('/', AccountController.list);
router.get('/:number', AccountController.findByNumber);
router.post('/', AccountController.create);

module.exports = router;