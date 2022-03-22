const router = require('express').Router()
const Controller = require('../controllers/controller')

const controller = new Controller()

router.get('/',controller.index)
router.get('/categories',controller.getAllCategories)

module.exports = router