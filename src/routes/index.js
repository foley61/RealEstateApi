"use strict"

const router = require('express').Router()



router.use('/shop', require('./shopRouter'))
router.use('/apartment', require('./apartmentRouter'))
router.use('/land', require('./landRouter'))
router.use('/properties', require('./mainRouter'))
module.exports = router