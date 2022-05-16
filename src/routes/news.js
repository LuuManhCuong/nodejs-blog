const express = require('express')
const router = express.Router()
const newsControllers = require('../app/controllers/NewControllers')

// chú ý tuyến đường đi từ trên xuống
router.use('/:slug', newsControllers.show)
router.use('/', newsControllers.index)


module.exports = router

