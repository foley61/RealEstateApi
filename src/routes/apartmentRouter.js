
const apartment = require("../controllers/apartmentController")

const router = require('express').Router()

router.post('/add', apartment.create),
router.get("/apt/:id", apartment.read),
router.put("/update/:id", apartment.update),
router.delete('/delete/:id', apartment.delete)

module.exports = router