var express = require('express');
var router = express.Router();
var AgencyController = require('../controllers/AgencyController');

router.get('/', AgencyController.list);
router.post('/', AgencyController.create);

module.exports = router;