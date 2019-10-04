var express = require('express')
var router = express.Router()
var UsuariosController = require('../controllers/usuariosController')

router.post('/login', UsuariosController.postLogin)
router.post('/', UsuariosController.post)

module.exports = router
