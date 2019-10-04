var express = require('express')
var router = express.Router()
var ItensController = require('../controllers/itensController')

router.get('/', ItensController.get)
router.get('/:id', ItensController.getById)
router.post('/', ItensController.post)

module.exports = router
