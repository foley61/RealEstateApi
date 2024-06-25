
const apartment = require("../controllers/apartmentController")

const router = require('express').Router()
const {isLogin} = require("../middlewares/permissions")
router.post('/add',isLogin, apartment.create),
router.get("/apt/:id", apartment.read),
router.put("/update/:id",isLogin, apartment.update),
router.delete('/delete/:id',isLogin, apartment.delete)

module.exports = router