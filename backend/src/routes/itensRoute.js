var express = require('express')
var router = express.Router()
var ItensController = require('../controllers/itensController')
var VerifyToken = require('../utils/utils');

router.get('/', VerifyToken, ItensController.get)
router.get('/:id', ItensController.getById)
router.post('/', ItensController.post)

module.exports = router
