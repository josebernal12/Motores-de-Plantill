const { Router } = require('express')
const router = Router()
const { getProducto, postProducto,raizProducto } = require('../controllers/controller')

router.get('/', raizProducto)
router.get('/producto', getProducto)
router.post('/producto', postProducto)

module.exports = router