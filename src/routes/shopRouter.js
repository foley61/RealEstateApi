
const shop = require("../controllers/shopController")
const {isLogin} = require("../middlewares/permissions")
const router = require('express').Router()
router.post('/add',isLogin, shop.create),
router.get("/:id", shop.read),
router.put("/update/:id",isLogin, shop.update),
router.delete('/delete/:id',isLogin, shop.delete)

module.exports = router