var express = require('express');
var router = express.Router();
var ClientController = require('../controllers/ClientController');

router.get('/', ClientController.list);
router.get('/:id', ClientController.find);
router.post('/', ClientController.create);


module.exports = router;