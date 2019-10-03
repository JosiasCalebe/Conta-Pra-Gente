var express = require('express')
var router = express.Router()
var controller = require('../controllers/itensController')

router.get('/', controller.get)
router.get('/:id', controller.getById)

module.exports = router
