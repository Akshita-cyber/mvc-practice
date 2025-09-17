const express = require('express')
const router = express.Router()
const {getProduct} = require('../controllers/productController.js')

router.get('/products',getProduct)

module.exports = router
