var express = require('express');
var router = express.Router();
var Transactional = require('../controllers/TransactionalHistoryController');

router.get('/:id', Transactional.listByUser);

module.exports = router;