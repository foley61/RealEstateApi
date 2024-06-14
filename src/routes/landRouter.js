
const Land = require("../controllers/landController")

const router = require('express').Router()

router.post('/add', Land.create),
router.get("/:id", Land.read),
router.put("/update/:id", Land.update),
router.delete('/delete/:id', Land.delete)

module.exports = router