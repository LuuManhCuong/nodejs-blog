const express = require('express')
const router = express.Router()
const siteController = require('../app/controllers/SiteControllers')

// chú ý tuyến đường đi từ trên xuống
router.use('/search', siteController.search)
router.use('/', siteController.index)


module.exports = router

