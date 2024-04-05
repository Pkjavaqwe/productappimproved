const express = require('express');

const productcontroller=require("../controller/productcontroller")

const router = express.Router()

router.post('/',)

router.post('/',productcontroller.createProduct)
router.get('/',productcontroller.getAllProducts)
router.get('/:productid',productcontroller.getProductByID)
router.put('/:productid',productcontroller.updateProduct)
router.delete('/:productid',productcontroller.deleteById)

module.exports = router;