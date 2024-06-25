const auth = require("../controllers/authController")

const router = require("express").Router()

router.post("/login", auth.login),
router.post("/logout", auth.logout)

module.exports = router