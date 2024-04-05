const express=require('express')

const router = express.Router()

const categoryController = require('../controller/categorycontroller')

router.post('/',categoryController.createCategory)
router.get('/',categoryController.getAllCategories)
router.get('/:categoryid',categoryController.getCategoryByID)
router.delete('/:categoryid',categoryController.deleteCategoryById)
router.put('/:categoryid',categoryController.updateCategory)

module.exports = router 