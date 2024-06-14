
const shop = require("../controllers/shopController")

const router = require('express').Router()

router.post('/add', shop.create),
router.get("/:id", shop.read),
router.put("/update/:id", shop.update),
router.delete('/delete/:id', shop.delete)

module.exports = router